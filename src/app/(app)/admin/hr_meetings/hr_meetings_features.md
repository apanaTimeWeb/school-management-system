# Admin Staff Meetings Module — Feature Map

## Module Purpose
The Staff Meetings module provides a unified workflow for managing internal meetings from scheduling to post-meeting tracking. It handles Agenda planning, Attendance marking, taking official Minutes of Meeting (MOM), and tracking Action Items across all meetings in one place.

## Directory Structure
| Folder | Responsibility |
|---|---|
| `/admin/hr_meetings/` | Centralizes meeting schedules, deep modal editing for MOM, and a cross-meeting action item tracker tab. |

## Feature Inventory
| Feature | Location | Status |
|---|---|---|
| **Meeting Schedule Grid** | Primary Tab (`AdminHrMeetingsList`) | ✅ INTERACTIVE |
| **Meeting Status Badges** | Inside Schedule Grid | ✅ DYNAMIC (Color coded Upcoming/Completed) |
| **Meeting Details Editor**| Deep Modal (`AdminHrMeetingModal`) | ✅ INTERACTIVE |
| **Attendance Tracker** | Inside Deep Modal | ✅ INTERACTIVE (Ratio input fields) |
| **MOM / Minutes Textarea** | Inside Deep Modal | ✅ IMPLEMENTED |
| **Action Items Sub-editor** | Inside Deep Modal | ✅ INTERACTIVE (Add rows, toggle status) |
| **Action Items Tracking Tab** | Second Tab (`AdminHrMeetingsActionItems`) | ✅ INTERACTIVE (Global view) |

## User Flows & Interactions
### Flow 1: Scheduling & Recording a Meeting
1. Admin navigates to `/admin/hr_meetings`.
2. Admin clicks **"Schedule Meeting"** or clicks "View / Edit Details" on an existing past meeting.
3. **Interaction (Deep Form):** A modal opens split into two columns:
   - **Left Column:** Basic details (Title, Time, Location), Agenda, and a checkbox to **Mark Attendance Recorded**. Checking it reveals inputs for `Present` vs `Total Expected` counts.
   - **Right Column:** Textarea for the **Minutes of Meeting (MOM)** and a dynamic section for **Action Items**.
4. Admin can click **"Add Task"** to add a new action item row.
5. **Interaction (Task Status Toggle):** Admin can click the icon next to the task (Square -> Clock -> Checkmark) to cycle the status from `Open` to `In Progress` to `Closed`. This instantly applies strikethrough styling to completed tasks.
6. Clicking **"Save Meeting Details"** updates the main grid.

### Flow 2: Global Action Item Tracking
1. Admin switches to the **"Follow-up & Action Items"** tab.
2. The UI extracts all action items embedded inside *every* meeting and flattens them into a single global table.
3. This allows the Principal/Admin to immediately see all pending tasks across the entire school/gym without opening each meeting manually.

## Strict Rules Verification Check
- **Rule 4 (No Raw Variables):** Strictly mapped standard Tailwind colors. Status badges use `bg-info/10 text-info`, action items use `text-success` and `text-danger` for deadlines.
- **Rule 6 (Hooks Isolation):** `useAdminHrMeetings` manages deep cloning of complex meeting objects so action items can be edited locally in the modal without mutating global state until "Save" is clicked. It also elegantly computes the flattened `allActionItems` array.
