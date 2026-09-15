# Student Examinations — Feature Map

## Module Purpose
The Student Examinations module (`/student/examinations`) provides a clear, organized view of the student's exam schedule. It allows the student to switch between different exam terms (e.g., Mid Terms, Finals, Unit Tests) and view specific details like syllabus, room number, date, time, and whether the exam is Theory, Practical, or Internal.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `student_examinations_components/` | Visual layouts, sidebars, and modals | `StudentExaminationsMain.tsx`, `StudentExaminationsTermSelector.tsx`, `StudentExaminationsSchedule.tsx`, `StudentExaminationsDetailsModal.tsx` |
| `student_examinations_api/` | Fetches data | `student_examinations_api.ts` |
| `student_examinations_types/` | Data interfaces | `student_examinations_types.ts` |
| `student_examinations_constants/` | Mock data for testing | `student_examinations_constants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Term Selector Sidebar | `/student/examinations` | Select from Upcoming or Past Exam terms. | `StudentExaminationsTermSelector` | `GET /api/student/examinations` | ✅ MOCKED |
| General Instructions | `/student/examinations` | View school-wide rules for the selected exam term. | `StudentExaminationsSchedule` | `GET /api/student/examinations` | ✅ MOCKED |
| Schedule List | `/student/examinations` | See the list of exams including Date, Time, Room, and Type (Theory/Practical). | `StudentExaminationsSchedule` | `GET /api/student/examinations` | ✅ MOCKED |
| Details & Syllabus Modal | `/student/examinations` | Click "Syllabus & Details" to read the exact syllabus and subject-specific instructions. | `StudentExaminationsDetailsModal` | N/A | ✅ MOCKED |

## User Flows & Interactions
### Flow 1: Navigating Exam Terms
1. The `StudentExaminationsTermSelector` sidebar lists exam terms grouped by "Upcoming" and "Past".
2. Upcoming exams have a distinct amber "Upcoming" badge for immediate attention.
3. Clicking a term updates `selectedTermId` in `StudentExaminationsMain`, rendering the appropriate `StudentExaminationsSchedule`.

### Flow 2: Viewing Exam Details
1. Inside the schedule, exams are color-coded (Blue for Theory, Purple for Practical, Emerald for Internal).
2. The user clicks "Syllabus & Details" on a specific subject row.
3. The `StudentExaminationsDetailsModal` slides in, presenting a larger view of Date/Time/Room, and the full text of the Syllabus and Instructions.

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — subfolders used, files < 300 lines.
- [x] Rule 2: Isolation — exclusively in `student/examinations`.
- [x] Rule 4: Theme Independence — semantic variables used (`bg-popover`, `text-info`).
- [x] Rule 9: Loaders/Errors — custom `loading.tsx` and `error.tsx` implemented.
- [x] Rule 13: Feature Map — this file created.
- [x] Rule 29: Motion Accessibility — `motion-safe:animate-[slideIn_0.3s_ease-out]` used for Modal.
