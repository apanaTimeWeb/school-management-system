# Admin HR / Employees Module — Feature Map

## Module Purpose
The HR Employees module manages the complete lifecycle and directory of staff members. It handles viewing all staff records, onboarding new employees through a multi-step wizard, and managing individual employee profiles (including personal, contact, joining, bank, documents, and history data).

## Directory Structure
| Folder | Responsibility |
|---|---|
| `/admin/hr_employees/` | The root list view (Employee Directory). Contains table, filters, toolbar. |
| `/admin/hr_employees/add/` | The Add Employee multi-step wizard. |
| `/admin/hr_employees/[id]/` | The Employee Profile detailed view (Tabs, Headers, Action Modals). |
| `.../hr_employees_api/` | Simulated API for employees (CRUD mock). |
| `.../hr_employees_types/` | TypeScript interfaces for all employee properties. |

## Feature Inventory
| Feature | Route | Key Components | Main API Calls | Status |
|---|---|---|---|---|
| Employee List | `/admin/hr_employees` | `AdminHrEmployeesTable`, `AdminHrEmployeesToolbar` | `GET /employees` | ✅ MOCKED |
| Add Employee Wizard | `/admin/hr_employees/add` | `AdminHrEmployeesAddStepper`, `AdminHrEmployeesAddMain` | `POST /employees` | ✅ MOCKED |
| Employee Profile | `/admin/hr_employees/[id]` | `AdminHrEmployeesProfileHeader`, `AdminHrEmployeesProfileTabs` | `GET /employees/:id` | ✅ MOCKED |
| Employee History Modals | `/admin/hr_employees/[id]` | `AdminHrEmployeesHistoryModal` (Transfer, Promote, Resign) | `POST /employees/:id/history` | ✅ MOCKED |

## User Flows & Interactions
### Flow 1: View Employee List
1. User navigates to `/admin/hr_employees`.
2. List fetches via `useAdminHrEmployeesList` hook.
3. User can filter by search, status, and department.
4. Clicking the "👁️" icon routes to the profile page.

### Flow 2: Add New Employee
1. User clicks "Add Employee" from the toolbar.
2. Navigates to `/admin/hr_employees/add`.
3. Fill 4-step wizard: Personal -> Contact -> Joining -> Docs & Bank.
4. "Submit" triggers mock save and redirects back to list.

### Flow 3: Manage Employee Profile & History
1. User navigates to `/admin/hr_employees/[id]`.
2. Profile loaded via `useAdminHrEmployeesProfile` hook.
3. User can view tabs: Personal Info, Job & Bank, Documents, History.
4. User clicks "Promote", "Transfer", "Resign", or "Terminate" to open the `AdminHrEmployeesHistoryModal`.
5. Fills action details and saves the historical record.

## Data and State Architecture
- **State pattern:** React `useState` within custom hooks (`useAdminHrEmployeesList`, `useAdminHrEmployeesAdd`, `useAdminHrEmployeesProfile`) to isolate complex fetching and form logic from JSX.
- **Zustand stores:** None required; state is strictly module-scoped.

## Edge Cases and Rule Compliance
- **Rule 1 (Micro-modularization):** The profile page was split into Header, Tabs, and Modal to enforce the <300 line ceiling.
- **Rule 4 (Theme Independence):** Strictly standard tailwind classes are used (`bg-card`, `text-primary`, `bg-success/10`). No arbitrary variables (`[var(...)]`) exist.
- **Rule 6 (No Logic in JSX):** All `useEffect` and data management were heavily extracted into custom hooks.
- **Rule 29 (Motion-safe animations):** All hover transitions and modal animations have `motion-safe:` prefixes.
