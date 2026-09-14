# Admin HR / Office Dashboard — Feature Map

## Module Purpose
The HR & Office Dashboard module provides a centralized command center for administrators to monitor staff metrics and operations. It allows the admin to view real-time counts of active teaching and non-teaching staff, monitor daily attendance percentages, and act upon urgent pending requests such as document verifications and leave approvals. This dashboard is strictly a read-only overview with quick action links to deeper modules.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `hr_dashboard_components/` | Renders all visual KPI widgets, pending lists, and alert banners | `AdminHrDashboardMain.tsx`, `AdminHrDashboardKpis.tsx`, `AdminHrDashboardAttendance.tsx`, `AdminHrDashboardAlerts.tsx` |
| `hr_dashboard_api/` | Simulated API fetches for dashboard aggregation | `AdminHrDashboardApi.ts` |
| `hr_dashboard_types/` | TypeScript interfaces for dashboard data and alerts | `AdminHrDashboardTypes.ts` |
| `hr_dashboard_constants/` | Hardcoded configuration and fallback mock data | `AdminHrDashboardConstants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| HR Core Stats | `/admin/hr_dashboard` | View total employee split (Teachers vs Non-Teaching) | `AdminHrDashboardKpis` | `GET /api/admin/hr/dashboard/stats` | ✅ MOCKED |
| Attendance KPIs | `/admin/hr_dashboard` | Monitor today's attendance percentage and absentees | `AdminHrDashboardAttendance` | `GET /api/admin/hr/dashboard/stats` | ✅ MOCKED |
| Pending Items | `/admin/hr_dashboard` | View lists of expiring documents and leave requests | `AdminHrDashboardPendingItems` | `GET /api/admin/hr/dashboard/stats` | ✅ MOCKED |
| Staff Events | `/admin/hr_dashboard` | See upcoming birthdays and work anniversaries | `AdminHrDashboardEvents` | `GET /api/admin/hr/dashboard/stats` | ✅ MOCKED |

## User Flows & Interactions
### Flow 1: View Dashboard
1. User navigates to `/admin/hr_dashboard`
2. Next.js App Router loads `page.tsx` and delegates to `AdminHrDashboardMain` client component
3. Skeleton loaders (`loading.tsx` and internal spinners) are displayed while API resolves
4. Data is fetched via `fetchHrDashboardStats()`
5. All KPI and List components populate with the fetched `HrDashboardStats` object

## Data and State Architecture
- **State pattern:** Local component state via `useState` and `useEffect` for data fetching. No global Zustand store needed as data is read-only and consumed fully by the main orchestrator.
- **Zustand stores:** None
- **Context providers:** None
- **Local-storage keys:** None
- **MSW handler file:** Handled internally via simulated promise delay in API file until MSW setup is complete globally.

## API Contract
All calls go through the simulated API layer for now.

| Function | Method | Endpoint | Request | Response `data` type |
|---|---|---|---|---|
| `fetchHrDashboardStats()` | GET | `/api/admin/hr/dashboard/stats` | — | `HrDashboardStats` |

## Permissions and Security
- **Required role:** `ADMIN` — Should be enforced by `middleware.ts`.
- **Destructive actions and their guards:** None. This dashboard is read-only. Action buttons route to forms in other modules.
- **Cross-role isolation:** Fully isolated under `/admin/hr_dashboard`.

## Loading, Empty, and Error States
| Section | Loading State | Empty State | Error State |
|---|---|---|---|
| Full page | `loading.tsx` — premium skeleton blocks mimicking 4-row layout | N/A | `error.tsx` — Custom error boundary with "Retry" button |
| Pending Items | Managed by top-level loader | Fallback text "No pending documents." | Managed by top-level error boundary |

## Edge Cases and AI Warnings
- **Number Formatting is Strict:** KPIs must format numbers using `Intl.NumberFormat('en-IN')` to adhere to Rule 80. Raw numbers should not be injected directly into JSX.
- **Premium Design Enforcement:** All cards must retain their gradient overlays (`bg-gradient-to-b from-[rgba(...)] to-transparent`) and hover effects (`hover:-translate-y-1 hover:shadow-lg`) to preserve the defined Luxury Premium Gold aesthetic.
- **Component File Ceiling:** We split the dashboard into 5+ sub-components precisely to avoid the `AdminHrDashboardMain.tsx` breaching the 300-line ceiling. Do not merge them back.
- **No Arbitrary Colors:** Status indicators in `AdminHrDashboardAlerts` use strict mappings to CSS tokens (e.g., `--warning`, `--danger`). Do not use raw hex values.

## Component Responsibility Map
| Component File | Responsibility |
|---|---|
| `AdminHrDashboardMain.tsx` | Root client orchestrator. Fetches data, manages loading/error states, renders children. |
| `AdminHrDashboardKpis.tsx` | Renders the top row of core employee statistics. |
| `AdminHrDashboardAttendance.tsx` | Renders attendance and leave-related statistics. |
| `AdminHrDashboardPendingItems.tsx` | Displays lists of actionable items (docs, leaves) needing attention. |
| `AdminHrDashboardEvents.tsx` | Displays upcoming birthdays and anniversaries. |
| `AdminHrDashboardAlerts.tsx` | Top-level alert banner for high-priority warnings. |

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — module-prefixed subfolders, 300-line ceiling
- [x] Rule 2: Total Role Isolation — zero cross-role imports verified
- [x] Rule 3: Hyper-descriptive naming — role prefix on all files
- [x] Rule 4: Theme Independence — no hardcoded hex/Tailwind colors in JSX
- [x] Rule 8: Server/Client Boundary — `page.tsx` = Server Component, `*Main.tsx` = Client
- [x] Rule 9: Loading/error/not-found — `loading.tsx` + `error.tsx` present and non-generic
- [x] Rule 11: Centralized URL Config — `*UrlConfig.ts` file present, no hardcoded URLs
- [x] Rule 13: Feature Map — this document is complete and non-generic
- [x] Rule 29: Motion-safe prefixes used in `loading.tsx` skeletons
- [x] Rule 80: Formatting applied to KPI numbers
