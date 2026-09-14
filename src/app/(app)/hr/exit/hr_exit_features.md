# Admin Employee Exit Module — Feature Map

## Module Purpose
The Employee Exit module formally handles the offboarding (resignation/termination) process. It provides a visual pipeline of employees currently serving their notice period, a checklist to ensure all assets are returned and dues cleared, and a final control point to mark the employee as 'Relieved'.

## Directory Structure
| Folder | Responsibility |
|---|---|
| `/admin/hr_exit/` | The core interface for managing the offboarding pipeline and historical exit records. |

## Feature Inventory
| Feature | Location | Status |
|---|---|---|
| **Offboarding Pipeline List** | Primary Tab (`AdminHrExitList`) | ✅ INTERACTIVE |
| **Progress Tracker** | Inside Pipeline List | ✅ INTERACTIVE (Auto-calculates Clearance Progress) |
| **Clearance Tracker** | Deep Modal (`AdminHrExitDetailModal`) | ✅ INTERACTIVE |
| **Asset Return** | Inside Deep Modal Checklist | ✅ INTERACTIVE |
| **Pending Dues** | Inside Deep Modal Checklist | ✅ INTERACTIVE |
| **Exit Interview** | Inside Deep Modal Checklist | ✅ INTERACTIVE |
| **Relieving / Exp Letter** | Inside Deep Modal Docs | ✅ MOCKED (Generate actions) |
| **Final Separation Control** | Inside Deep Modal | ✅ INTERACTIVE (Moves to history) |
| **Exit History** | Second Tab (`AdminHrExitHistory`) | ✅ IMPLEMENTED |

## User Flows & Interactions
### Flow 1: Tracking Offboarding Progress
1. Admin navigates to `/admin/hr_exit`.
2. A table shows all resigning employees. A red **Clearance Progress Bar** (e.g. 50%) visually indicates how many clearance tasks are completed.
3. Clicking on an employee (e.g., *Rakesh Singh*) opens the deep `AdminHrExitDetailModal`.

### Flow 2: Completing Clearance & Dues
1. Inside the modal, the Admin sees the employee's Resignation Date, Notice Period, and Expected Relieving date at the top.
2. Below, a checklist shows items like **Asset Return** and **Pending Dues**.
3. **Interaction (Checklist):** Clicking any checklist item instantly toggles it. The UI strikes through the text and changes the icon to a solid Green Check (`bg-success/10`).
4. Closing the modal will reveal the progress bar in the list has automatically updated.

### Flow 3: Final Separation
1. In the modal, there is a dedicated red zone for Final Separation.
2. **Interaction (Mark as Relieved):** The Admin clicks the **"Mark as Relieved / Exited"** button.
3. An alert confirms the action. The modal automatically closes.
4. The employee is instantly removed from the active Pipeline tab and moved permanently into the **Exited Employees (History)** tab.

## Strict Rules Verification Check
- **Rule 4 (No Raw Variables):** Strictly mapped standard Tailwind colors (`text-success`, `bg-danger/10`, `border-primary`). Zero `[var(...)]` CSS variables were used.
- **Rule 6 (Hooks Isolation):** `useAdminHrExit` houses all the logic for updating specific checklist tasks within nested employee objects and moving items between the active pipeline and history state arrays.
- **Rule 29 (Motion-Safe):** Hover actions, tab switches, and the deep detail modal all utilize `motion-safe:animate-in` and `motion-safe:fade-in` for a deeply premium interactive experience.
