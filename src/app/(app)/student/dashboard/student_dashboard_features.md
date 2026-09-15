# Student Dashboard — Feature Map

## Module Purpose
The Student Dashboard module acts as the centralized landing page for logged-in students. It provides a real-time summary of the student's academic standing, daily schedule, and urgent action items (like pending fees or homework). It strictly isolates the student role from other modules, ensuring students only see their own allowed data.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `student_dashboard_components/` | Renders all visual KPI widgets, timetable lists, and update boards | `StudentDashboardMain.tsx`, `StudentDashboardKpis.tsx`, `StudentDashboardTimetable.tsx`, `StudentDashboardUpdates.tsx`, `StudentDashboardProfileHeader.tsx`, `StudentDashboardAcademics.tsx`, `StudentDashboardExams.tsx`, `StudentDashboardQuickActions.tsx` |
| `student_dashboard_api/` | Simulated API fetches for dashboard aggregation | `student_dashboard_api.ts` |
| `student_dashboard_types/` | TypeScript interfaces for dashboard data and alerts | `student_dashboard_types.ts` |
| `student_dashboard_constants/` | Hardcoded configuration and fallback mock data | `student_dashboard_constants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Welcome Profile | `/student/dashboard` | View basic student info (Roll No, Class) | `StudentDashboardProfileHeader` | `GET /api/student/dashboard/stats` | ✅ MOCKED |
| Attendance & Fees KPIs | `/student/dashboard` | Monitor overall attendance % and pending fee dues | `StudentDashboardKpis` | `GET /api/student/dashboard/stats` | ✅ MOCKED |
| Today's Timetable | `/student/dashboard` | View scheduled classes for today with live indicators | `StudentDashboardTimetable` | `GET /api/student/dashboard/stats` | ✅ MOCKED |
| Academic Tasks | `/student/dashboard` | See pending homework and assignments | `StudentDashboardAcademics` | `GET /api/student/dashboard/stats` | ✅ MOCKED |
| Exams & Results | `/student/dashboard` | See upcoming exam dates and recent marks | `StudentDashboardExams` | `GET /api/student/dashboard/stats` | ✅ MOCKED |
| Notice Board | `/student/dashboard` | Read school announcements, events, and notifications | `StudentDashboardUpdates` | `GET /api/student/dashboard/stats` | ✅ MOCKED |
| Quick Actions | `/student/dashboard` | Fast navigation to deepest module features | `StudentDashboardQuickActions` | N/A | ✅ MOCKED |

## User Flows & Interactions
### Flow 1: View Daily Schedule
1. Student navigates to `/student/dashboard`
2. App Router loads `page.tsx` displaying the `loading.tsx` skeleton.
3. Once `fetchStudentDashboardStats()` resolves, the UI populates.
4. The student sees the `StudentDashboardTimetable` which highlights the currently "LIVE" (ongoing) class using a pulsing green badge.

### Flow 2: Act on Urgent Notifications
1. The student checks the `StudentDashboardUpdates` notice board.
2. Unread notices have a subtle highlighted background (`bg-page shadow-sm border-primary/20`) and a bold title with a blue dot indicator.
3. The student can click a notice (hover effect scales up) to view details (to be linked to full Notice component).

## Data and State Architecture
- **State pattern:** Local component state (`useState`, `useEffect`) inside `StudentDashboardMain.tsx` orchestrates data loading. No Zustand store is required since the dashboard is read-only summary data.
- **Zustand stores:** None.
- **Context providers:** None.
- **Local-storage keys:** None.
- **MSW handler file:** Handled internally via simulated promise delay in API file until MSW setup is complete.

## API Contract
| Function | Method | Endpoint | Request | Response `data` type |
|---|---|---|---|---|
| `fetchStudentDashboardStats()` | GET | `/api/student/dashboard/stats` | — | `StudentDashboardData` |

## Permissions and Security
- **Required role:** `STUDENT` — Should be enforced by `middleware.ts`.
- **Destructive actions and their guards:** None. This dashboard is read-only.
- **Cross-role isolation:** Fully isolated under `/student/dashboard`. Students cannot access `HR` or `Admin` components.

## Loading, Empty, and Error States
| Section | Loading State | Empty State | Error State |
|---|---|---|---|
| Full page | `loading.tsx` — premium skeleton blocks mimicking layout with shimmer effect | N/A | `error.tsx` — Custom error boundary with "Try Again" button |
| Sub-components | Managed by top-level loader | Fallback text "No pending tasks!" or "No classes scheduled." | Managed by top-level error boundary |

## Edge Cases and AI Warnings
- **Number Formatting:** Fee amounts must use `Intl.NumberFormat('en-IN')` per Rule 80.
- **Micro-Modularization:** The dashboard contains 8 distinct UI sections. These MUST remain separate components (`StudentDashboardKpis`, `StudentDashboardTimetable`, etc.) to prevent `StudentDashboardMain.tsx` from breaching the 300-line limit.
- **Theme Independence:** Colors use semantic tokens (`bg-card`, `text-primary`, `bg-success/10`, `text-danger`). Absolutely no raw `#hex` or `text-red-500` without a specific mapped meaning from the global design document.
- **Motion Safe:** All hover interactions (`hover:-translate-y-1`, `animate-pulse`) are prefixed with `motion-safe:` as per WCAG accessibility requirements in Design System rule 29.

## Component Responsibility Map
| Component File | Responsibility |
|---|---|
| `StudentDashboardMain.tsx` | Orchestrates fetching and renders the grid layout of child components. |
| `StudentDashboardProfileHeader.tsx` | Renders the welcome banner, avatar, and basic student info. |
| `StudentDashboardKpis.tsx` | Renders attendance and fee due statistics. |
| `StudentDashboardQuickActions.tsx` | Renders 6 fast-navigation shortcut buttons. |
| `StudentDashboardTimetable.tsx` | Renders a vertical timeline of today's classes. |
| `StudentDashboardAcademics.tsx` | Renders pending homework and assignment cards. |
| `StudentDashboardExams.tsx` | Renders upcoming exam countdowns and recent test scores. |
| `StudentDashboardUpdates.tsx` | Renders a scrollable list of school notices and announcements. |

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — module-prefixed subfolders, 300-line ceiling
- [x] Rule 2: Total Role Isolation — isolated in `/student`
- [x] Rule 3: Hyper-descriptive naming — role prefix on all files
- [x] Rule 4: Theme Independence — no hardcoded hex/Tailwind colors in JSX
- [x] Rule 8: Server/Client Boundary — `page.tsx` = Server, `*Main.tsx` = Client
- [x] Rule 9: Loading/error/not-found — `loading.tsx` + `error.tsx` implemented beautifully
- [x] Rule 11: Centralized URL Config — `student_dashboard_url_config.ts` present
- [x] Rule 13: Feature Map — this document is complete
- [x] Rule 29: Motion-safe prefixes used in `loading.tsx` and all hover states
- [x] Rule 80: Formatting applied to Fee Dues (`Intl.NumberFormat`)
