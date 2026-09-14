# Admin Staff Attendance Module — Feature Map

## Module Purpose
The Staff Attendance module handles tracking and correcting attendance for all staff and teachers. It supports two primary views: **Daily** (for marking attendance today) and **Monthly** (for reviewing historical records and making corrections).

## Directory Structure
| Folder | Responsibility |
|---|---|
| `/admin/hr_staff_attendance/` | The entire attendance interface (Tabs, Toolbar, Daily/Monthly views, Correction Modal). |

## Feature Inventory
| Feature | Key Components | Status |
|---|---|---|
| Tabs (Daily vs Monthly) | `AdminHrStaffAttendanceToolbar` | ✅ MOCKED |
| Date & Month Filters | `AdminHrStaffAttendanceToolbar` | ✅ MOCKED |
| Sync Biometric & Reports | `AdminHrStaffAttendanceToolbar` | ✅ INTERACTIVE |
| Mark Daily Attendance | `AdminHrStaffAttendanceDaily` | ✅ MOCKED (Interactive) |
| Monthly Register Grid | `AdminHrStaffAttendanceMonthly` | ✅ MOCKED |
| Attendance Correction Modal| `AdminHrStaffAttendanceCorrectionModal`| ✅ MOCKED |

## User Flows & Interactions
### Flow 1: Marking Daily Attendance
1. User navigates to `/admin/hr_staff_attendance`. Default tab is **Daily Attendance**.
2. The grid displays all staff for the selected date.
3. The Admin can click the "Present", "Absent", "Late", "Half Day", or "Leave" buttons.
4. **Interaction Check:** Clicking a button instantly updates its state and applies a vibrant color (Green for Present, Red for Absent, Orange for Late).
5. User clicks **"Save Manual Attendance"** to finalize.

### Flow 2: Correcting Past Attendance
1. User clicks the **"Monthly Register"** tab.
2. The view switches to a 30-day horizontal scrollable grid.
3. Each cell represents a day, showing 'P', 'A', 'L', etc.
4. User hovers over a cell (cell scales up) and clicks it.
5. **Interaction Check:** A premium blur-modal opens (`AdminHrStaffAttendanceCorrectionModal`). The modal specifies the Employee Name and the exact Day. User inputs the new status and a reason, then saves.

## Strict Rules Verification Check
- **Rule 1 (<300 Lines):** Perfectly followed. The Daily and Monthly views are separated into distinct files.
- **Rule 4 (No Raw Variables):** All coloring utilizes exact Tailwind mapped colors (`bg-success`, `bg-warning`, `border-info`). No `[var(...)]` tokens are present.
- **Rule 6 (Hooks Isolation):** `useAdminHrStaffAttendance` manages all tab switching, filtering, fetching, and modal toggling logic.
- **Rule 29 (Motion-Safe):** All tab switches, button hovers (`hover:scale-110`), and modal overlays utilize `motion-safe:animate-in` for premium transitions.
