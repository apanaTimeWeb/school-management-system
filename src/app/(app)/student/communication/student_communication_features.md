# Student Communication — Feature Map

## Module Purpose
The Student Communication module (`/student/communication`) acts as the central inbox for all school-related updates. It allows students to read Important Updates, School Notices, Class Notices, and various notifications (Exams, Homework, Events). It features category filtering and read/unread status management.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `student_communication_components/` | Visual layouts for Inbox Sidebar, List, and Reader Modal | `StudentCommunicationMain.tsx`, `StudentCommunicationSidebar.tsx`, `StudentCommunicationList.tsx`, `StudentCommunicationModal.tsx` |
| `student_communication_api/` | Fetches inbox data | `student_communication_api.ts` |
| `student_communication_types/` | Data interfaces | `student_communication_types.ts` |
| `student_communication_constants/` | Mock data for testing | `student_communication_constants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Inbox Categories | `/student/communication` | Filter messages by clicking categories (e.g., 'Important Update', 'Class Notice'). View unread counts per category. | `StudentCommunicationSidebar` | `GET /api/student/communication` | ✅ MOCKED |
| Notice Feed | `/student/communication` | View a list of messages. Unread messages are bolded with a primary left-border highlight. | `StudentCommunicationList` | Client-side filtering | ✅ IMPLEMENTED |
| Mark as Read | `/student/communication` | Clicking an unread message automatically marks it as read in the local state. | `StudentCommunicationMain` | N/A | ✅ IMPLEMENTED |
| Reader Modal | `/student/communication` | Read the full content and download mock attachments in a clean popup modal. | `StudentCommunicationModal` | N/A | ✅ IMPLEMENTED |

## User Flows & Interactions
### Flow 1: Reading a Notice
1. The user selects a category (e.g., "Exam Notification") from the `StudentCommunicationSidebar`.
2. The `StudentCommunicationList` filters to show only those notices. Unread notices have a blue highlight.
3. The user clicks a notice card.
4. `StudentCommunicationMain` updates `selectedMessage` to open the `StudentCommunicationModal`. It also instantly updates the `isRead` flag to true for that message ID, decrementing the unread badge counter in the sidebar.
5. In the modal, the user can read the full text and click the mock attachment block to download related files.

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — subfolders used, files < 300 lines.
- [x] Rule 2: Isolation — exclusively in `student/communication`.
- [x] Rule 4: Theme Independence — semantic variables used (`bg-danger/10`, `text-info`).
- [x] Rule 9: Loaders/Errors — custom `loading.tsx` and `error.tsx` implemented.
- [x] Rule 13: Feature Map — this file created.
- [x] Rule 29: Motion Accessibility — `motion-safe:animate-[slideIn_0.3s_ease-out]` used for Modal.
