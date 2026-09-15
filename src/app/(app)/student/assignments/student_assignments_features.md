# Student Assignments — Feature Map

## Module Purpose
The Student Assignments module (`/student/assignments`) allows students to view assignments, submit files, check teacher feedback, and track submission history. It separates the viewing of instructions and the submission process into intuitive tabs within a single modal experience.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `student_assignments_components/` | Visual layouts and modals | `StudentAssignmentsMain.tsx`, `StudentAssignmentsList.tsx`, `StudentAssignmentsModal.tsx` |
| `student_assignments_api/` | Fetches data | `student_assignments_api.ts` |
| `student_assignments_types/` | Data interfaces including submission history | `student_assignments_types.ts` |
| `student_assignments_constants/` | Mock data for UI testing | `student_assignments_constants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Status Filtering | `/student/assignments` | Filter by 'Pending', 'Submitted', 'Graded', 'Overdue' | `StudentAssignmentsMain` | `GET /api/student/assignments` | ✅ MOCKED |
| Grid Cards | `/student/assignments` | Quick overview of subject, title, due date, status | `StudentAssignmentsList` | `GET /api/student/assignments` | ✅ MOCKED |
| Details Tab | `/student/assignments` | Read instructions, download attachments, view grades and teacher feedback | `StudentAssignmentsModal` | N/A | ✅ MOCKED |
| Submission Tab | `/student/assignments` | Upload a file, view previous submission timeline (Accepted, Rejected, Pending) | `StudentAssignmentsModal` | N/A | ✅ MOCKED |

## User Flows & Interactions
### Flow 1: Submit an Assignment
1. The user clicks on a "Pending" assignment card.
2. The `StudentAssignmentsModal` slides in.
3. The user switches to the "Submission & History" tab.
4. If `canSubmit` is true (e.g. status is pending or resubmission is allowed), a dashed upload dropzone is visible.
5. Clicking the upload box triggers the upload flow.

### Flow 2: View Submission History & Rejection
1. If an assignment was submitted and rejected, the "Submission History" timeline shows the record.
2. Rejected submissions are highlighted in red (`bg-danger/10`) and include the teacher's comment (e.g., "Formatting is incorrect...").
3. Because `allowResubmission` is true, the upload dropzone is still available above the history timeline.

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — subfolders used, files < 300 lines.
- [x] Rule 2: Isolation — exclusively in `student/assignments`.
- [x] Rule 4: Theme Independence — semantic variables used (`bg-popover`, `bg-overlay/80`).
- [x] Rule 9: Loaders/Errors — custom `loading.tsx` and `error.tsx` implemented.
- [x] Rule 13: Feature Map — this file created.
- [x] Rule 29: Motion Accessibility — `motion-safe:animate-[slideIn_0.3s_ease-out]` used for Modal.
