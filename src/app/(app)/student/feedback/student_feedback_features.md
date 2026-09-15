# Student Feedback — Feature Map

## Module Purpose
The Student Feedback module (`/student/feedback`) empowers students to share their opinions on various school operations securely. It supports course/teacher feedback, general suggestions, and formal complaints/grievances. It explicitly supports a toggle for Anonymous submissions, controlled by a school policy flag.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `student_feedback_components/` | Visual UI: Tabs, Submission Form, History List | `StudentFeedbackMain.tsx`, `StudentFeedbackForm.tsx`, `StudentFeedbackHistory.tsx` |
| `student_feedback_api/` | Mocks fetching configs and submitting forms | `student_feedback_api.ts` |
| `student_feedback_types/` | Data interfaces | `student_feedback_types.ts` |
| `student_feedback_constants/` | Mock data for UI testing | `student_feedback_constants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Feedback Categories | `/student/feedback` | Select from Course, Teacher, School, Event, Suggestion, or Complaint. | `StudentFeedbackForm` | N/A | ✅ IMPLEMENTED |
| Dynamic Targets | `/student/feedback` | If 'Teacher Feedback' is selected, a dropdown of teachers appears. Same for 'Course'. | `StudentFeedbackForm` | N/A | ✅ IMPLEMENTED |
| Star Rating | `/student/feedback` | Rate from 1 to 5 stars interactively. Rating is hidden for Complaints/Suggestions. | `StudentFeedbackForm` | N/A | ✅ IMPLEMENTED |
| Anonymous Toggle | `/student/feedback` | Check a box to submit anonymously. If the school policy `allowAnonymous` is false, it shows a warning instead. | `StudentFeedbackForm` | `POST /api/student/feedback` | ✅ IMPLEMENTED |
| Submission History | `/student/feedback` | View past submitted feedback. Shows category, anonymity status, admin replies, and current status (Pending/Reviewed/Resolved). | `StudentFeedbackHistory` | `GET /api/student/feedback` | ✅ IMPLEMENTED |

## User Flows & Interactions
### Flow 1: Submitting a Grievance
1. The user visits the Feedback module.
2. They select the "Complaint/Grievance" category button.
3. The Star Rating component unmounts (as ratings don't apply to complaints).
4. The user checks "Submit Anonymously" to hide their identity.
5. They enter their complaint in the textarea and click Submit.
6. The UI enters a loading state (`isSubmitting === true`).
7. On success, the UI automatically switches to the "My Submissions" tab, showing the newly created complaint at the top with a "Pending" status badge.

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — subfolders used, files < 300 lines.
- [x] Rule 2: Isolation — exclusively in `student/feedback`.
- [x] Rule 4: Theme Independence — semantic variables used (`bg-primary`, `bg-danger`, `text-success`).
- [x] Rule 9: Loaders/Errors — custom `loading.tsx` and `error.tsx` implemented.
- [x] Rule 13: Feature Map — this file created.
- [x] User Requirement: "Anonymous feedback केवल school policy के अनुसार" -> Added `allowAnonymous` config boolean that toggles the anonymous switch in the form.
