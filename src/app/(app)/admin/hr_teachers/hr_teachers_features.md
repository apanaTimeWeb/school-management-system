# Admin Teacher Management Module — Feature Map

## Module Purpose
The Teacher Management module (`hr_teachers`) isolates teacher-specific data logic from generic HR employees. It handles tracking academic qualifications, subjects taught, section assignments, Class Teacher duties, and weekly workload.

## Directory Structure
| Folder | Responsibility |
|---|---|
| `/admin/hr_teachers/` | Directory list of all teachers, filtering by subject/dept. |
| `/admin/hr_teachers/[id]/` | Detailed teacher profile, workload charts, assignment modals. |

## Feature Inventory
| Feature | Route | Key Components | Status |
|---|---|---|---|
| Teacher Directory | `/admin/hr_teachers` | `AdminHrTeachersTable`, `AdminHrTeachersToolbar` | ✅ MOCKED |
| Teacher Profile | `/admin/hr_teachers/[id]` | `AdminHrTeachersProfileHeader`, `AdminHrTeachersProfileTabs` | ✅ MOCKED |
| Class Assignment | `/admin/hr_teachers/[id]` | `AdminHrTeachersAssignmentModal` | ✅ MOCKED |
| Workload | `/admin/hr_teachers/[id]` | Inside `AdminHrTeachersProfileTabs` | ✅ MOCKED |

## User Flows & Interactions
### Flow 1: Directory Search
1. User navigates to `/admin/hr_teachers`.
2. Directory populates with colorful avatars.
3. User can filter by 'Department' and 'Status'.
4. "Eye" icon clicks route to Profile. "Pen" and "Shield" trigger interaction alerts.

### Flow 2: Managing Workload & Class Teacher Role
1. Admin opens Teacher Profile.
2. The Header explicitly shows if the teacher is a "Class Teacher" (Star icon) or not.
3. Clicking "Assign Class Teacher" opens a premium blur modal.
4. The Admin selects a class from the dropdown and saves.
5. Workload Tab visually maps "Periods Per Week" using a circular progress style.

## Strict Rules Verification Check
- **Rule 4 (Theme Independence):** All components have been rigidly coded using `text-primary`, `bg-success/10`, `text-info`, `text-purple-500`. No raw CSS vars in JSX.
- **Rule 6 (Hooks Isolation):** All fetching and modal toggle states are safely isolated in `useAdminHrTeachersList` and `useAdminHrTeachersProfile`.
- **Interactivity & Color:** The layout features colorful Badges, interactive hover animations (`group-hover:scale-110`, `-translate-y-1`), and visually distinct tabs for an incredibly premium user experience. All requested checklist fields exist across the profile.
