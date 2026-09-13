# Principal Dashboard — Feature Map

## Module Purpose
The Principal Dashboard is the high-level executive view for the school principal. It provides a real-time summary of the school's daily operations, academic performance, and financial status. The principal uses this to quickly assess attendance, approve pending requests, view disciplinary alerts, and monitor overall school health. This module is strictly read-only for metrics but allows quick navigation to actionable areas.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `dashboard_components/` | All micro-modularized UI components for the dashboard grid. | `PrincipalDashboardMain.tsx`, `PrincipalDashboardKPIs.tsx`, `PrincipalDashboardFinancials.tsx` |
| `dashboard_api/` | Centralized API fetchers with simulated network latency. | `PrincipalDashboardApi.ts`, `PrincipalDashboardUrlConfig.ts` |
| `dashboard_types/` | TypeScript interfaces for all dashboard data models. | `PrincipalDashboard.types.ts` |
| `dashboard_constants/` | Mock data arrays and static constants. | `PrincipalDashboardConstants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| KPI Overview | `/principal/dashboard` | View top-level stats for students, staff, attendance, and admissions. | `PrincipalDashboardKPIs.tsx` | `GET /api/principal/dashboard/kpis` | ✅ Live |
| Financial Summary | `/principal/dashboard` | View month-by-month fee collection vs pending via a stacked bar chart. | `PrincipalDashboardFinancials.tsx` | `GET /api/principal/dashboard/financials` | ✅ Live |
| Academic Performance | `/principal/dashboard` | View average subject scores in a radar chart. | `PrincipalDashboardAcademics.tsx` | `GET /api/principal/dashboard/academics` | ✅ Live |
| Daily Absentees | `/principal/dashboard` | View today's absent staff and students with their reasons. | `PrincipalDashboardAbsentees.tsx` | `GET /api/principal/dashboard/absentees` | ✅ Live |
| Operations Hub | `/principal/dashboard` | Tabbed view to review Notices, Discipline Alerts, Leaves, and Events. | `PrincipalDashboardOperations.tsx` | `GET /api/principal/dashboard/{notices,alerts,leaves,events}` | ✅ Live |
| Activity Timeline | `/principal/dashboard` | View the most recent system activities in chronological order. | `PrincipalDashboardActivities.tsx` | `GET /api/principal/dashboard/activities` | ✅ Live |

## User Flows & Interactions
### Flow 1: Review Daily Operations
1. User loads the Principal Dashboard.
2. The `PrincipalDashboardMain` component fetches data for all sections simultaneously.
3. While loading, skeleton loaders matching the exact shape of the components are displayed.
4. User clicks on the "Alerts" tab in the Operations component to view disciplinary incidents.
5. User clicks on a Quick Action like "Approve Leaves" to navigate to the detailed approvals page (navigation to be implemented in respective modules).

## Data and State Architecture
- **State pattern:** Local state in `PrincipalDashboardMain.tsx` orchestrates data fetching and passes it down as props. Client components handle their own UI state (e.g., active tabs in `PrincipalDashboardOperations`).
- **Zustand stores:** None required for this purely read-only dashboard.
- **Context providers:** None.

## API Contract
All calls are currently mocked in `PrincipalDashboardApi.ts` using a `delay` function to simulate network latency.

| Function | Method | Endpoint (Mocked) | Request | Response `data` type |
|---|---|---|---|---|
| `fetchPrincipalDashboardKPIs()` | GET | `/api/principal/dashboard/kpis` | — | `PrincipalDashboardKPIs` |
| `fetchPrincipalDashboardFinancials()` | GET | `/api/principal/dashboard/financials` | — | `FeeCollectionData[]` |
| `fetchPrincipalDashboardAbsentees()` | GET | `/api/principal/dashboard/absentees` | — | `AbsenteeRecord[]` |
| `fetchPrincipalDashboardAcademics()` | GET | `/api/principal/dashboard/academics` | — | `AcademicPerformanceData[]` |
| `fetchPrincipalDashboardOperations()` | GET | `/api/principal/dashboard/{type}` | — | Array of respective types |

## Permissions and Security
- **Required role:** PRINCIPAL.
- **Destructive actions:** None in the dashboard view. Actionable buttons (Quick Actions) will redirect to pages where RBAC (Role-Based Access Control) is strictly enforced.
- **Sensitive data handling:** Financial data (fee collection) and discipline alerts are visible only to the principal or superadmin.

## Loading, Empty, and Error States
| Section | Loading State | Empty State | Error State |
|---|---|---|---|
| Full page | `loading.tsx` — full dashboard skeleton mimicking all grids | N/A | `error.tsx` — module-branded error with Retry button calling `reset()` |
| Financial Chart | Local skeleton matching chart height | Empty chart space if no data | Handled by page error boundary |
| Operations Tabs | Local skeleton for tab headers and list items | "No [items] found" text | Handled by page error boundary |
| Absentees List | Local skeleton for list items | "No absentees reported today." | Handled by page error boundary |

## Edge Cases and AI Warnings
- **ApexCharts SSR Issue:** `react-apexcharts` relies on the `window` object. It MUST be dynamically imported with `{ ssr: false }` using `next/dynamic` in `PrincipalDashboardFinancials.tsx` and `PrincipalDashboardAcademics.tsx`. Failure to do so will break the build.
- **Chart Responsive Resize:** ApexCharts sometimes fails to resize properly if the container doesn't have a fixed/calculated height. Ensure the parent container has a defined height (e.g., `h-[300px]`).
- **Data Fetching Synchronization:** Since the dashboard fetches 10 different datasets, `Promise.all` is used in `PrincipalDashboardMain.tsx`. If one fails, the whole dashboard will throw to the `error.tsx` boundary.
- **Component Boundaries:** Do not mix the chart logic into `PrincipalDashboardMain.tsx`. Each chart must remain in its own isolated component to prevent massive re-renders.

## Component Responsibility Map
| Component File | Responsibility |
|---|---|
| `PrincipalDashboardMain.tsx` | Root client orchestrator. Owns layout, fetches all data via Promise.all. |
| `PrincipalDashboardKPIs.tsx` | Renders the top 5 KPI stat cards with trend indicators. |
| `PrincipalDashboardFinancials.tsx` | Renders the stacked bar chart for fee collection using ApexCharts. |
| `PrincipalDashboardAcademics.tsx` | Renders the radar chart for academic performance and the upcoming exams list. |
| `PrincipalDashboardAbsentees.tsx` | Renders the daily absentee list with colored status badges. |
| `PrincipalDashboardOperations.tsx` | Tabbed interface for Notices, Alerts, Leaves, and Events. |
| `PrincipalDashboardActivities.tsx` | Timeline view of recent system activities. |
| `PrincipalDashboardQuickActions.tsx` | Right-side column of quick navigation buttons. |

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — module-prefixed subfolders, 300-line ceiling
- [x] Rule 2: Total Role Isolation — zero cross-role imports verified
- [x] Rule 3: Hyper-descriptive naming — role prefix on all files
- [x] Rule 4: Theme Independence — no hardcoded hex/Tailwind colors in JSX
- [x] Rule 5: Smart State Management — Local state for layout, no unnecessary global stores
- [x] Rule 6: Logic/UI Separation — (API logic is separated)
- [x] Rule 7: Type Isolation — all types in `dashboard_types/` folder
- [x] Rule 8: Server/Client Boundary — `page.tsx` = Server Component, `PrincipalDashboardMain.tsx` = Client
- [x] Rule 9: Loading/error/not-found — `loading.tsx` + `error.tsx` present and non-generic
- [x] Rule 11: Centralized URL Config — `PrincipalDashboardUrlConfig.ts` file present
- [x] Rule 13: Feature Map — this document is complete and non-generic
