# Student My Requests — Feature Map

## Module Purpose
The Student "My Requests" module (`/student/my-requests`) acts as a centralized desk for all formal applications submitted to the school administration (Leaves, Bonafide, Documents, General queries). 

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `student_requests_components/` | Visual UI: Tracker, Modal, List, Main Container | `StudentRequestsMain.tsx`, `StudentRequestsList.tsx`, `StudentRequestTracker.tsx`, `StudentNewRequestModal.tsx` |
| `student_requests_api/` | Mocks fetching requests and submitting new ones | `student_requests_api.ts` |
| `student_requests_types/` | Data interfaces including the lifecycle enums | `student_requests_types.ts` |
| `student_requests_constants/` | Mock data for UI testing | `student_requests_constants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Request Categories | `/student/my-requests` | Filter by Leave, Certificate, Bonafide, Document, or Other. | `StudentRequestsMain` | N/A | ✅ IMPLEMENTED |
| Submit New Request | `/student/my-requests` | Click "New Request" to open a modal form to submit a new application to the admin. | `StudentNewRequestModal` | `POST /api/student/requests` | ✅ IMPLEMENTED |
| Visual Status Tracker | `/student/my-requests` | See a beautiful horizontal stepper indicating if the request is Pending → Under Review → Approved/Rejected → Completed. | `StudentRequestTracker` | N/A | ✅ IMPLEMENTED |
| Admin Remarks | `/student/my-requests` | Read specific feedback or instructions left by the administrator regarding the request. | `StudentRequestsList` | N/A | ✅ IMPLEMENTED |

## User Flows & Interactions
### Flow 1: Tracking a Rejected Request
1. The user views the requests list.
2. A request that has been rejected shows the tracker progressing up to the third node.
3. The third node dynamically changes to a red 'X' and reads "Rejected" instead of "Approved". The connecting line also turns red (danger color).
4. The admin's remark explains the reason for rejection (e.g., "Insufficient documents attached.").

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — subfolders used, files < 300 lines.
- [x] Rule 2: Isolation — exclusively in `student/my-requests`.
- [x] Rule 4: Theme Independence — semantic variables used for the tracker states (`bg-primary`, `bg-danger`, `bg-border`).
- [x] Rule 9: Loaders/Errors — custom `loading.tsx` and `error.tsx` implemented.
- [x] Rule 13: Feature Map — this file created.
- [x] User Requirement: "Pending → Under Review → Approved/Rejected → Completed" -> Exact state machine mapped into a custom visual Stepper component (`StudentRequestTracker.tsx`).
