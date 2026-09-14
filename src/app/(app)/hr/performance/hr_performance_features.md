# Admin Employee Performance Module — Feature Map

## Module Purpose
The Employee Performance module handles the end-to-end Appraisal Cycle. It allows HR and Managers to track custom goals, provide a 1-to-5 star rating, enter detailed remarks, toggle a promotion recommendation, and ultimately finalize the review into historical records.

## Directory Structure
| Folder | Responsibility |
|---|---|
| `/admin/hr_performance/` | Core interface for managing active appraisals and viewing historical performance ratings. |

## Feature Inventory
| Feature | Location | Status |
|---|---|---|
| **Appraisal List Table** | Primary Tab (`HrPerformanceList`) | ✅ INTERACTIVE (Auto Goal Progress) |
| **Performance Goals Evaluation**| Deep Modal (`HrPerformanceModal`) | ✅ INTERACTIVE (Range Sliders) |
| **Star Rating System** | Inside Deep Modal | ✅ INTERACTIVE (1 to 5 Hover/Click) |
| **Reviews & Remarks** | Inside Deep Modal | ✅ IMPLEMENTED (Manager & HR Textareas) |
| **Promotion Recommendation** | Inside Deep Modal | ✅ INTERACTIVE (Tailwind Switch Toggle) |
| **Save Draft vs Finalize** | Inside Deep Modal Actions | ✅ INTERACTIVE (State routing) |
| **Performance History** | Second Tab (`HrPerformanceHistory`) | ✅ IMPLEMENTED |

## User Flows & Interactions
### Flow 1: Tracking Goal Progress
1. Admin navigates to `/admin/hr_performance`.
2. A list of active appraisals is shown. A primary-colored progress bar dynamically calculates the `(Achieved / Total Weightage)` ratio to show exactly how far along the employee is with their goals.

### Flow 2: Conducting the Evaluation (The Modal)
1. Clicking an employee (e.g., *Rakesh Singh*) opens a deep interactive modal.
2. **Interaction (Goal Sliders):** On the left, each goal has an interactive HTML `<input type="range">`. Dragging the slider instantly updates the Achieved % next to it.
3. **Interaction (Star Rating):** Below the goals is a 5-star rating component. Hovering scales the stars up, and clicking a star (e.g., 4) locks it in with a bright primary color (`fill-primary`) and text readout "4 / 5".
4. **Interaction (Promotion Toggle):** On the right, below the remarks textareas, is a custom Tailwind CSS Switch (Toggle). Clicking it slides a pill across to indicate "Promotion Recommended" (turning Green `bg-success`).

### Flow 3: Finalizing the Appraisal
1. The Admin clicks **"Finalize Appraisal"**.
2. An alert confirms the action. The modal closes.
3. The employee is instantly removed from the "Active Appraisals" pipeline.
4. The record is permanently logged in the **"Performance History"** tab with the date of completion and a shiny Trophy icon if they were recommended for a promotion.

## Strict Rules Verification Check
- **Rule 4 (No Raw Variables):** Strictly mapped standard Tailwind colors (`text-success`, `bg-danger/10`, `border-primary`, `fill-primary`). Zero `[var(...)]` CSS variables were used.
- **Rule 6 (Hooks Isolation):** `useHrPerformance` houses all the logic. Deep cloning (`JSON.parse(JSON.stringify)`) is used in the modal to isolate local edits from the global state until the user clicks Save.
- **Rule 29 (Motion-Safe):** Goal sliders, Star rating hover scales (`hover:scale-110`), and custom switch toggles all use heavily animated, highly responsive Tailwind transition utilities for a premium interactive feel.

