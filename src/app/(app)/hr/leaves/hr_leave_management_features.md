# Admin Leave Management Module — Feature Map

## Module Purpose
The Leave Management module is designed to track, approve, and configure leaves for all employees (Teachers and Staff). It consolidates Leave Applications, Leave Balances, Leave Types Configuration, and the School Holiday Calendar into a single dashboard interface.

## Directory Structure
| Folder | Responsibility |
|---|---|
| `/admin/hr_leave_management/` | The core interface featuring a massive tab switcher (`AdminHrLeaveTabs`) leading to 4 distinct views. |

## Feature Inventory
| Feature | Location | Status |
|---|---|---|
| **Leave Applications** | Primary Tab | ✅ INTERACTIVE |
| **Approve / Reject Action** | Inside Applications Table | ✅ INTERACTIVE (With Mock State Updates) |
| **Filters (Staff/Teacher/Pending)** | Above Applications Table | ✅ MOCKED |
| **Leave Balances** | Second Tab | ✅ MOCKED |
| **Leave Types (Config)** | Third Tab | ✅ MOCKED |
| **Holiday Calendar** | Fourth Tab | ✅ MOCKED |

## User Flows & Interactions
### Flow 1: Processing a Leave Request
1. Admin opens `/admin/hr_leave_management`.
2. The "Leave Applications" tab loads by default, querying all pending requests.
3. The Admin can use the filter dropdowns to narrow the list to just "Teachers" or just "Staff".
4. **Interaction Point:** On a "Pending" application row, hovering over the actions column reveals a green **Approve** button and a red **Reject** button. 
5. Clicking Approve instantly marks the row as Approved with a green badge, and triggers a UI toast/alert to confirm the action.

### Flow 2: Checking Employee Balances
1. Admin clicks the "Leave Balances" tab.
2. A beautiful grid of cards appears. Each card represents an employee.
3. The card breaks down exactly how many Sick, Casual, or Earned leaves they have used versus remaining (highlighted in red for Used, green for Available).

## Strict Rules Verification Check
- **Rule 4 (No Raw Variables):** All coloring utilizes exact Tailwind mapped colors (`bg-success`, `border-warning`, `text-danger`, `text-info`). No `[var(...)]` tokens are present.
- **Rule 6 (Hooks Isolation):** `useAdminHrLeave` manages the massive logic of tab switching and multi-endpoint data fetching.
- **Rule 29 (Motion-Safe):** All tabs transition via `motion-safe:animate-in`, and approve/reject buttons fade in via `opacity-0 group-hover:opacity-100 transition-opacity`.
- **Modularity:** Tab views are broken into separate sub-components (`AdminHrLeaveApplications`, `AdminHrLeaveOtherTabs`).
