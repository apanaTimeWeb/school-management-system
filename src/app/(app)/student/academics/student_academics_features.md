# Student Academics — Feature Map

## Module Purpose
The Student Academics module (`/student/academics`) provides the student with a comprehensive overview of their current academic standing. It includes their enrolled subjects, teachers, syllabus progress per subject, and historical academic records.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `student_academics_components/` | Visual layouts of the academic overview | `StudentAcademicsMain.tsx`, `StudentAcademicsHeader.tsx`, `StudentAcademicsSubjects.tsx`, `StudentAcademicsSyllabusProgress.tsx`, `StudentAcademicsHistory.tsx` |
| `student_academics_api/` | Simulated API fetches | `student_academics_api.ts` |
| `student_academics_types/` | Data interfaces for subjects and syllabus | `student_academics_types.ts` |
| `student_academics_constants/` | Mock data for UI testing | `student_academics_constants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Academic Header | `/student/academics` | View current class, section, session, curriculum | `StudentAcademicsHeader` | `GET /api/student/academics` | ✅ MOCKED |
| Subjects & Teachers | `/student/academics` | View enrolled subjects, teacher names, and chapter progress bars | `StudentAcademicsSubjects` | `GET /api/student/academics` | ✅ MOCKED |
| Syllabus Tracker | `/student/academics` | Track completed vs in-progress chapters | `StudentAcademicsSyllabusProgress` | `GET /api/student/academics` | ✅ MOCKED |
| Academic History | `/student/academics` | View a timeline of past classes, grades, and percentages | `StudentAcademicsHistory` | `GET /api/student/academics` | ✅ MOCKED |

## User Flows & Interactions
### Flow 1: Check Syllabus Progress
1. User sees the `StudentAcademicsSubjects` cards which have dynamic progress bars showing `%` complete based on `completedChapters / totalChapters`.
2. Below that, `StudentAcademicsSyllabusProgress` shows exactly which chapters are `in_progress` (indicated by an animated pulsing clock icon).

### Flow 2: View Past Grades
1. In the right column, `StudentAcademicsHistory` renders a vertical timeline.
2. The user sees their past classes along with overall grades (`A`, `A+`) and promotion status.

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — subfolders used, files < 150 lines.
- [x] Rule 2: Isolation — exclusively in `student/academics`.
- [x] Rule 4: Theme Independence — semantic variables used (e.g. `bg-card`, `bg-blue-500/10`).
- [x] Rule 9: Loaders/Errors — custom `loading.tsx` and `error.tsx` implemented.
- [x] Rule 13: Feature Map — this file created.
- [x] Rule 29: Motion Accessibility — `motion-safe:animate-pulse`, `transition-all` safely used.
