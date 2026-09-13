# 04. Academic Management (Principal) — Feature Map

## Module Purpose
The Academic Management module allows the Principal to oversee the entire educational structure of the school. It includes viewing all Classes, Sections, Subjects, monitoring Syllabus Progress in real-time, and reviewing the Academic Calendar. The Principal can assign or reassign Class Teachers and Heads of Departments (HODs) through interactive modal workflows.

## Directory Structure
| Folder | Responsibility |
|---|---|
| `academics_components/` | Contains the `Main` orchestrator, 4 major Tabs (Classes, Subjects, Progress, Calendar), and Modals. |
| `academics_api/` | Simulated API calls for fetching mock classes, subjects, syllabus progress, and calendar events. |
| `academics_types/` | Zod schemas and TypeScript interfaces mapping to the educational data models. |
| `academics_constants/` | Mock backend single-source-of-truth arrays for all academic entities. |
| `academics_store/` | Zustand state managing active tab navigation and modal visibility for assigning teachers/HODs. |

## Feature Inventory
| Feature | Component | Description |
|---|---|---|
| **Tabbed Dashboard** | `PrincipalAcademicsMain.tsx` | High-level orchestrator switching between the 4 main modules (Classes, Subjects, Progress, Calendar). |
| **Classes & Sections** | `PrincipalAcademicsClassesTab.tsx` | Renders a card per Class, listing sections. Allows the Principal to Assign/Change Class Teachers via a Modal. |
| **Subjects & Curriculum**| `PrincipalAcademicsSubjectsTab.tsx`| Renders a grid of subjects. Displays the assigned HOD and total teachers. Includes an "Assign HOD" action. |
| **Syllabus Progress** | `PrincipalAcademicsProgressTab.tsx`| Real-time analytics view showing how much syllabus is completed per section and subject, utilizing a visual progress bar. |
| **Academic Calendar** | `PrincipalAcademicsCalendarTab.tsx`| Timeline of exams, holidays, and activities for the term. |
| **Teacher Assignment** | `PrincipalAcademicsAssignTeacherModal.tsx`| Interactive modal for selecting a teacher and assigning them to a specific section. Simulates a save state. |
| **HOD Assignment** | `PrincipalAcademicsHODModal.tsx` | Interactive modal for assigning a senior teacher as the Head of a specific Department. |

## Data and State Architecture
- **State Pattern**: Zustand (`usePrincipalAcademicsStore.ts`) handles Tab switching and Modal visibility globally to avoid prop-drilling between the deeply nested lists and modals.
- **Component Limitations**: Adheres strictly to the sub-300 line ceiling rule by splitting each tab into its own independent file that fetches its own data independently.

## Loading, Empty, and Error States
- `loading.tsx` presents a tabbed skeleton loader.
- Individual tabs show their own skeleton pulse animations while their specific `fetch` promise resolves (500ms delay).
- Handled global failures via `error.tsx`.

## AI Instructions & Theming Notes
- **Colors**: Strictly implemented the 5-color premium theme. Badges, action buttons, and icons utilize `text-primary`, `text-success`, `text-danger`, etc., per the user's explicit request.
- **Role Isolation**: Only Principal actions (like assigning HODs) are exposed here. Teacher-facing interfaces for updating progress are NOT part of this module.
