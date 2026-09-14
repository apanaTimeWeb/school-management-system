# Admin Office Administration Module — Feature Map

## Module Purpose
The Office Administration module centralizes three major workflows:
1. Broadcasting Official Notices and Circulars.
2. Tracking Internal Administrative Tasks (and Registers).
3. Maintaining a Repository of Official Documents and Correspondence.

## Directory Structure
| Folder | Responsibility |
|---|---|
| `/admin/office_admin/` | Contains the three main tabs (Notices, Tasks, Documents) and their respective filtering and rendering logic. |

## Feature Inventory
| Feature | Location | Status |
|---|---|---|
| **Office Notices Grid** | Primary Tab (`AdminOfficeNotices`) | ✅ IMPLEMENTED |
| **Notice Publishing Modal** | Deep Modal (`AdminOfficeNoticeModal`) | ✅ INTERACTIVE |
| **Administrative Tasks List** | Second Tab (`AdminOfficeTasks`) | ✅ IMPLEMENTED (Color coded status) |
| **Official Documents Table** | Third Tab (`AdminOfficeDocuments`) | ✅ IMPLEMENTED |

## User Flows & Interactions
### Flow 1: Publishing a Circular
1. Admin navigates to `/admin/office_admin` and clicks **"Publish Notice"**.
2. **Interaction (Deep Form):** A modal opens allowing the Admin to choose:
   - **Type:** Notice vs Circular.
   - **Priority:** Normal, High, Urgent.
   - **Target Audience:** All Staff, Teachers, Admin.
3. Upon clicking **"Publish & Broadcast"**, the new Notice instantly appears at the top of the grid list, complete with dynamic Priority Badges (e.g. Red for Urgent, Yellow for High).

### Flow 2: Checking Task Status
1. Admin switches to the **"Tasks & Registers"** tab.
2. A kanban-style grid of tasks is displayed.
3. The tasks are color-coded based on status: Yellow for `Pending`, Blue for `In Progress`, and Green for `Completed`. Filter dropdown allows quick isolation of pending tasks.

### Flow 3: Managing Official Correspondence
1. Admin switches to the **"Documents & Records"** tab.
2. A clean, tabular file-manager interface is shown, detailing file size, category (e.g., "Official Correspondence", "Administrative Record"), and upload dates, with a "Download" action button.

## Strict Rules Verification Check
- **Rule 4 (No Raw Variables):** Fully compliant. Priority Badges in Notices and Task status cards are purely styled using standard tokens (`bg-warning/10 text-warning`, `border-success/50`).
- **Rule 6 (Hooks Isolation):** `useAdminOffice` elegantly handles the tab switching, data fetching based on the active tab, and modal state management. It also dynamically resets filters when tabs are switched to avoid orphaned UI states.
