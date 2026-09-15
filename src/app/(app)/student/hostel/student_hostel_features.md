# Student Hostel — Feature Map

## Module Purpose
The Student Hostel module (`/student/hostel`) is a specialized dashboard for students enrolled in the school's boarding/hostel facilities. It allows them to view their room allocation, warden details, attendance, manage leave requests, pre-register visitors, and read hostel-specific notices.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `student_hostel_components/` | Visual UI: Sidebar, Details, Leave Form, Visitors Form, Notices | `StudentHostelMain.tsx`, `StudentHostelDetails.tsx`, `StudentHostelLeave.tsx`, `StudentHostelVisitors.tsx`, `StudentHostelNotices.tsx` |
| `student_hostel_api/` | Fetches data and handles mock Form submissions | `student_hostel_api.ts` |
| `student_hostel_types/` | Data interfaces | `student_hostel_types.ts` |
| `student_hostel_constants/` | Mock data for UI testing | `student_hostel_constants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Non-Hosteler Check | `/student/hostel` | If the student is a Day Scholar (`isHosteler === false`), a placeholder blocks access cleanly. | `StudentHostelMain` | `GET /api/student/hostel` | ✅ IMPLEMENTED |
| Room Details & Fee | `/student/hostel` | View assigned Room, Bed, Warden contact (click-to-call), and Fee status. | `StudentHostelDetails` | N/A | ✅ IMPLEMENTED |
| Night Attendance | `/student/hostel` | View a progress bar summarizing their hostel night attendance percentage. | `StudentHostelDetails` | N/A | ✅ IMPLEMENTED |
| Leave Management | `/student/hostel` | Apply for 'Night Out' or 'Going Home'. View a history of past leave statuses (Pending/Approved/Rejected). | `StudentHostelLeave` | `POST /api/student/hostel/leave` | ✅ IMPLEMENTED |
| Visitor Pass | `/student/hostel` | Pre-register visitors (parents/guardians) by entering name, date, and time slot. View pass status. | `StudentHostelVisitors` | `POST /api/student/hostel/visitor` | ✅ IMPLEMENTED |
| Hostel Notices | `/student/hostel` | Read announcements specifically from the hostel warden. Urgent notices are highlighted in red. | `StudentHostelNotices` | N/A | ✅ IMPLEMENTED |

## User Flows & Interactions
### Flow 1: Pre-registering a Visitor
1. User clicks the "Visitor Pass" tab in the sidebar.
2. They click the "New Pass" button to toggle the form.
3. They fill in the Visitor Name, Relation, Date, and Time Slot.
4. Clicking submit shows a loading spinner on the button (`isSubmitting === true`).
5. The mock API returns success after 1 second. The new visitor is optimistically appended to the top of the grid with a "Pending" status, and the form closes.

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — subfolders used, files < 300 lines.
- [x] Rule 2: Isolation — exclusively in `student/hostel`.
- [x] Rule 4: Theme Independence — semantic variables used (`bg-success`, `text-info`, `text-danger`).
- [x] Rule 9: Loaders/Errors — custom `loading.tsx` and `error.tsx` implemented.
- [x] Rule 13: Feature Map — this file created.
- [x] User Requirement: "Conditional module" -> Implemented via `isHosteler` boolean check rendering a placeholder for day scholars.
