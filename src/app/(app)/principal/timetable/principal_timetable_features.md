# 06. Timetable Management (Principal) — Feature Map

## Module Purpose
The Timetable Management module allows the Principal to view master schedules across all Classes and Teachers. It serves as the authoritative interface for identifying scheduling conflicts (Double Bookings, Overloads) and acting as an approval center for drafting and publishing the term's timetables. It also handles day-to-day dynamic adjustments like assigning substitute teachers for absent staff.

## Directory Structure
| Folder | Responsibility |
|---|---|
| `timetable_components/` | Core UI logic containing the Main orchestrator, Class Tab, Teacher Tab, Approval Tab, Substitute Modal, and Conflict Resolution Modal. |
| `timetable_api/` | Fetches mock scheduling logic and timetable conflicts. |
| `timetable_types/` | Zod schemas and TypeScript models for `PrincipalClassTimetable`, `PrincipalTeacherTimetable`, `PrincipalTimetableConflict`, and `PrincipalTimetableDraft`. |
| `timetable_constants/` | Hardcoded mock payload data acting as the mock backend. |
| `timetable_store/` | Zustand state managing active tabs and modal triggers for Substitutes and Conflicts. |

## Feature Inventory
| Feature | Component | Description |
|---|---|---|
| **Tabbed Dashboard** | `PrincipalTimetableMain.tsx` | High-level orchestrator switching between Class Timetable, Teacher Timetable, and Approval & Conflicts. |
| **Class Timetable** | `PrincipalTimetableClassTab.tsx`| Renders a day-by-day weekly view of periods for a specific class. Displays Time, Subject, Teacher, and Room. |
| **Teacher Timetable** | `PrincipalTimetableTeacherTab.tsx`| Renders a day-by-day weekly view of a specific teacher's workload. Identifies free periods and assigned rooms. |
| **Substitute Allocation** | `PrincipalTimetableSubstituteModal.tsx` | Accessed via the Class/Teacher tabs, this allows the Principal to pick an alternative teacher for a specific period if the assigned teacher is absent. |
| **Approval & Conflicts** | `PrincipalTimetableApprovalTab.tsx`| Displays drafts submitted by administration (Term 1, Term 2, etc.) and lists detected structural conflicts (e.g., Double Bookings). |
| **Conflict Resolution** | `PrincipalTimetableConflictModal.tsx`| Accessed from the Approval Tab. Provides options to resolve structural conflicts (e.g., Unassign, Move Period, Substitute) so a draft can be published. |

## Data and State Architecture
- **State Pattern**: Zustand (`usePrincipalTimetableStore.ts`) handles tab switching and deep modal triggers globally.
- **Responsive Tables**: Extensively utilizes `overflow-x-auto` around native HTML tables (`<table className="min-w-[800px]">`) to preserve intricate column structures without breaking layout on mobile devices.

## AI Instructions & Theming Notes
- **Colors**: Leveraged the 5-color premium theme. Examples:
  - "BREAK" periods are styled distinctively (`bg-black/20`, text `warning`).
  - Active tabs use primary/info highlighting based on context.
  - Conflict priority badges use `danger` for high-severity issues and `warning` for medium.
- **Build Checks**: Verified via `npm run build` to ensure 0 TypeScript or linting errors.
