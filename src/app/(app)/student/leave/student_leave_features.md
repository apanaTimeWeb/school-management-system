# Student Leave Application — Feature Map

## Module Purpose
The Student Leave module (`/student/leave`) allows students (and their parents) to formally request time off from school. It provides a structured form to apply for leave (with dates, reason, and attachments) and a history view to track the approval workflow status (Pending, Approved, Rejected) including teacher/admin remarks.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `student_leave_components/` | State manager (Tabs), Form, and History list | `StudentLeaveMain.tsx`, `StudentLeaveForm.tsx`, `StudentLeaveHistory.tsx` |
| `student_leave_api/` | Fetches history and handles form submission | `student_leave_api.ts` |
| `student_leave_types/` | Data interfaces for Leave Request and Workflow | `student_leave_types.ts` |
| `student_leave_constants/` | Mock data for UI testing | `student_leave_constants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Tabbed Navigation | `/student/leave` | Switch between applying for a new leave and viewing past history. | `StudentLeaveMain` | N/A | ✅ IMPLEMENTED |
| Apply Leave Form | `/student/leave` | Fill out Leave Type, Start/End Dates, Reason, and (mock) Attachment. | `StudentLeaveForm` | `POST /api/student/leave` | ✅ IMPLEMENTED |
| Leave History | `/student/leave` | View past applications with clear color-coded statuses (Approved, Rejected, Pending). | `StudentLeaveHistory` | `GET /api/student/leave` | ✅ MOCKED |
| Workflow & Remarks | `/student/leave` | See exactly who the leave is pending with (e.g., Class Teacher, Principal) and read their final remarks. | `StudentLeaveHistory` | N/A | ✅ IMPLEMENTED |

## User Flows & Interactions
### Flow 1: Submitting a Leave Application
1. The user lands on the "Apply Leave" tab (`StudentLeaveForm`).
2. They select a `leaveType`, pick dates, type a `reason`, and optionally check the mock attachment box.
3. They click "Submit Application". The button shows a loading spinner (`isSubmitting`).
4. The `StudentLeaveMain` controller receives the payload, simulates an API call delay, and optimistically adds the new record to the `data.history` array.
5. The view automatically switches to the "Leave History" tab, showing the newly added request at the top as "Pending".

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — subfolders used, files < 300 lines.
- [x] Rule 2: Isolation — exclusively in `student/leave`.
- [x] Rule 4: Theme Independence — semantic variables used (`bg-success/10`, `text-danger`).
- [x] Rule 9: Loaders/Errors — custom `loading.tsx` and `error.tsx` implemented.
- [x] Rule 13: Feature Map — this file created.
