# Accountant Dashboard — Feature Map

## Module Purpose
The Accountant Dashboard module serves as the primary operational hub for the financial staff in the School ERP. Accountants use it to monitor daily and monthly collections in real-time, approve or reject pending refunds and concessions, and identify fee defaulters. It is strictly an overview and quick-action module; detailed reporting and full student ledgers are handled in their respective dedicated modules.

## Directory Structure

| Folder | Responsibility | Key Files |
|---|---|---|
| `accountant_dashboard_components/` | Renders all UI components for the dashboard view | `AccountantDashboardMain.tsx`, `AccountantDashboardKPIs.tsx`, `AccountantDashboardTransactions.tsx`, `AccountantDashboardPending.tsx`, `AccountantDashboardDefaulters.tsx` |
| `accountant_dashboard_store/` | Zustand store for managing local dashboard UI state (active tabs, alert visibility) | `useAccountantDashboardStore.ts` |
| `accountant_dashboard_types/` | TypeScript interfaces for dashboard data models (KPIs, Transactions, Defaulters) | `AccountantDashboardTypes.ts` |
| `accountant_dashboard_utils/` | Shared utilities (currency formatters) and mock data configurations | `AccountantDashboardConstants.ts` |

## Feature Inventory

| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Financial Overview | `/accountant/dashboard` | View top-level KPIs (Today, Monthly, Outstanding) and charts | `AccountantDashboardKPIs`, `AccountantDashboardTrendChart` | Mocked | ✅ Live |
| Transaction Monitor | `/accountant/dashboard` | Switch between Today's Transactions and Recent Payments lists | `AccountantDashboardTransactions` | Mocked | ✅ Live |
| Pending Approvals | `/accountant/dashboard` | View and approve/reject pending refunds and concessions | `AccountantDashboardPending` | Mocked | ✅ Live |
| Defaulter Actions | `/accountant/dashboard` | See top fee defaulters and click to send WhatsApp reminders | `AccountantDashboardDefaulters` | Mocked | ✅ Live |
| Quick Actions | `/accountant/dashboard` | Navigate quickly to Collect Fee, Invoices, Refunds, etc. | `AccountantDashboardQuickActions` | Mocked | ✅ Live |

## User Flows & Interactions

### Flow 1: Switch Transaction View
1. User clicks "Recent Payments" tab in the transactions card.
2. `useAccountantDashboardStore.setActiveTransactionTab('recent')` updates the state.
3. `AccountantDashboardTransactions` conditionally renders the respective data array.

### Flow 2: Approve Pending Refund
1. User clicks the "Approve" (Check icon) on a pending refund row.
2. A simulated action (toast/alert) confirms the approval of the selected refund ID.

## Data and State Architecture

- **State pattern:** Zustand (`useAccountantDashboardStore`) for simple UI toggles (active tabs). Real API data will eventually use React Query (Server State).
- **Zustand stores:** `useAccountantDashboardStore.ts` (activeTransactionTab, activePendingTab, isImportantAlertsVisible).
- **Context providers:** None required for this module as Zustand handles the state elegantly.
- **Local-storage keys:** None currently.

## API Contract

*Note: Currently using Mock Data per instruction, to be connected later.*

| Function | Method | Endpoint | Request | Response `data` type |
|---|---|---|---|---|
| `fetchDashboardKPIs()` | GET | `/accountant/dashboard/kpis` | — | `DashboardKPIs` |
| `fetchTransactions()` | GET | `/accountant/dashboard/transactions?type={today\|recent}` | `{ type }` | `TransactionRecord[]` |

## Permissions and Security

- **Required role:** `ACCOUNTANT`.
- **Destructive actions and their guards:** Approving/Rejecting refunds requires specific endpoint validation on the backend.
- **Cross-role isolation:** Completely isolated layout (`AccountantSidebar`, `AccountantHeader`) inside `/accountant` routing group.

## Loading, Empty, and Error States

| Section | Loading State | Empty State | Error State |
|---|---|---|---|
| Dashboard | `loading.tsx` (Pending) | N/A | Route-level `error.tsx` (Pending) |
| Transactions | Handled via React Query suspense (future) | "No transactions found." message row | Inline error |
| Pending List | Handled via React Query suspense (future) | "No pending requests." | Inline error |

## Edge Cases and AI Warnings

- **Chart Hydration Issue:** `react-apexcharts` must be imported dynamically with `ssr: false` to prevent window-is-not-defined errors during Next.js server rendering.
- **Status Colors:** Must rely exclusively on Tailwind utility classes (e.g. `bg-success/10 text-success`) mapped to the design system. Never use arbitrary hex colors for statuses.
- **Mock Data Swap:** When integrating the actual API, replace imports from `AccountantDashboardConstants` with React Query hooks. Do not rewrite the UI components.
- **Currency Formatting:** Always use the Indian standard formatter utility (`formatCurrency`) rather than raw string manipulation.

## Component Responsibility Map

| Component File | Responsibility |
|---|---|
| `AccountantDashboardMain.tsx` | Root client component. Arranges all sub-components using CSS Grid. |
| `AccountantDashboardKPIs.tsx` | Renders 4 top-level stat cards with trend indicators. |
| `AccountantDashboardTrendChart.tsx` | Displays area chart for 30-day collection trend using ApexCharts. |
| `AccountantDashboardPaymentSummary.tsx`| Displays donut chart for payment method split using ApexCharts. |
| `AccountantDashboardTransactions.tsx` | Renders table for transactions with embedded search and tabs. |
| `AccountantDashboardPending.tsx` | Renders actionable list of refunds/concessions. |
| `AccountantDashboardDefaulters.tsx` | Renders list of defaulters with WhatsApp reminder action. |
| `AccountantDashboardQuickActions.tsx`| Renders 4 primary shortcut buttons. |
| `AccountantDashboardAlerts.tsx` | Renders dismissible global alerts banner. |

## Rule Compliance Checklist

- [x] Rule 1: Micro-modularization — module-prefixed subfolders
- [x] Rule 2: Total Role Isolation — uses Accountant layout shell
- [x] Rule 4: Theme Independence — utilizes var(--bg-card) etc via tailwind classes
- [x] Rule 5: Smart State Management — Zustand used for UI toggles
- [x] Rule 13: Feature Map — this document is complete
- [x] Rule 28: Glassmorphism / Depth — proper hover states and borders used
- [x] Rule 33: Chart rendering respects SSR (dynamic import)
- [x] Design §4: Status badge rules strictly followed
