# Admin Teacher Workload & Assignment Module — Feature Map

## Module Purpose
The Workload module ensures fair distribution of academic and administrative responsibilities among teaching staff. It maps Subjects, Classes, and Weekly Periods to teachers, and calculates if a teacher is `Optimal`, `Underutilized`, or `Overloaded` based on their maximum allowed capacity.

## Directory Structure
| Folder | Responsibility |
|---|---|
| `/admin/hr_workload/` | Interface for editing teacher assignments and viewing department-wide workload distributions. |

## Feature Inventory
| Feature | Location | Status |
|---|---|---|
| **Workload Pipeline Table** | Primary Tab (`HrWorkloadList`) | ✅ INTERACTIVE |
| **Progress/Capacity Bar** | Inside Pipeline Table | ✅ DYNAMIC (Color codes capacity) |
| **Academic Assignment Editor**| Deep Modal (`HrWorkloadModal`) | ✅ INTERACTIVE |
| **Add/Remove Rows** | Inside Deep Modal | ✅ INTERACTIVE (Dynamic Form) |
| **Live Capacity Meter** | Inside Deep Modal | ✅ INTERACTIVE (Updates as periods are typed) |
| **Additional Responsibilities** | Inside Deep Modal | ✅ INTERACTIVE (Removable chips) |
| **Workload Summary Tab** | Second Tab (`HrWorkloadSummary`) | ✅ MOCKED UI |

## User Flows & Interactions
### Flow 1: Tracking Overloaded Teachers
1. Admin navigates to `/admin/hr_workload`.
2. A list of teachers is shown with their assigned classes (as small UI chips). 
3. **Interaction (Dynamic Capacity):** The progress bar shows their assigned periods vs max capacity. It is color-coded: Green (Optimal), Blue (Underutilized), or Red (Overloaded).

### Flow 2: Balancing the Workload (The Modal)
1. Clicking an overloaded teacher opens the `HrWorkloadModal`.
2. **Interaction (Academic Assignment rows):** On the left, the Admin sees a list of assigned subjects/classes. The Admin can click the Trash icon to remove a row, instantly lowering the total periods.
3. **Interaction (Live Meter):** Below the assignments is the **Total Capacity Meter**. As the Admin changes the "Periods/Wk" input box (e.g., from 6 to 2), the capacity meter shrinks instantly in real-time. If it drops below the max limit, it changes from Red (Overloaded) to Green (Optimal).
4. **Interaction (Additional Roles):** On the right, the Admin can click the "X" on responsibilities (e.g., "Sports Coordinator") to remove them.

### Flow 3: Saving Changes
1. The Admin clicks **"Save Assignments"**.
2. An alert confirms the action. The modal closes.
3. The main list re-renders with the newly balanced capacity bar for that teacher.

## Strict Rules Verification Check
- **Rule 4 (No Raw Variables):** Strictly mapped standard Tailwind colors (`bg-danger`, `text-success`, `bg-info/10`). Zero `[var(...)]` CSS variables were used.
- **Rule 6 (Hooks Isolation):** `useHrWorkload` houses all logic, including deep cloning for the modal.
- **Rule 29 (Motion-Safe):** The real-time Total Capacity Meter uses `transition-all duration-300` to smoothly slide up and down and change colors dynamically as the Admin types in the period inputs.

