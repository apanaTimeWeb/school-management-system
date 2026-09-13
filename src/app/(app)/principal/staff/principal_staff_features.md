# 09. Teacher & Staff Management (Principal) — Feature Map

## Module Purpose
The Staff Management module enables the Principal to access the complete directory of school employees (teaching and non-teaching), view their detailed profiles (qualifications, assignments, experience), and track their performance, attendance, and workload metrics.

## Directory Structure
| Folder | Responsibility |
|---|---|
| `staff_components/` | Core UI containing Main orchestrator, Directory Tab, Performance Tab, and Profile Modal. |
| `staff_api/` | Simulated API calls fetching staff data. |
| `staff_types/` | TypeScript interfaces for the staff data structures. |
| `staff_constants/` | Mock payload data. |
| `staff_store/` | Zustand state managing tabs and profile modal visibility. |

## Feature Inventory
| Feature | Component | Description |
|---|---|---|
| **Tabbed Dashboard** | `PrincipalStaffMain.tsx` | High-level orchestrator switching between Directory and Performance. |
| **Staff Directory** | `PrincipalStaffDirectoryTab.tsx`| Table listing all staff with their Name, ID, Department, Designation, Status, and Contact. Includes a button to view their full profile. |
| **Profile Viewer**| `PrincipalStaffProfileModal.tsx`| A detailed modal showing Qualifications, Experience, Email, Phone, Address, and Assigned Subjects/Classes for a specific staff member. |
| **Performance & Workload** | `PrincipalStaffPerformanceTab.tsx`| Highlights Teacher performance ratings (Stars), weekly classes/free periods, substitutions, and attendance summaries (Leaves, Absents, Presents). |

## Data and State Architecture
- **State Pattern**: Zustand (`usePrincipalStaffStore.ts`) handles tab switching and stores the `selectedProfileId` to render the Modal.

## AI Instructions & Theming Notes
- **Colors**: Uses the premium 5-color theme. Examples:
  - "Active" status = Green Success, "On Leave" = Amber Warning.
  - Profile Avatars use Gold Primary colors.
  - Table is fully responsive (horizontal scrolling enforced on mobile).
