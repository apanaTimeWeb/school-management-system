# Student Messages — Feature Map

## Module Purpose
The Student Messages module (`/student/messages`) is a restricted, school-controlled communication channel. It functions as a hybrid Inbox/Chat where teachers and admins can initiate threads with students. Students can read these threads and reply *only* if the school/teacher has enabled replies for that specific thread. Students cannot arbitrarily start new private chats, ensuring compliance with school safety policies.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `student_messages_components/` | Visual layouts for the Chat interface | `StudentMessagesMain.tsx`, `StudentMessagesSidebar.tsx`, `StudentMessagesChatArea.tsx` |
| `student_messages_api/` | Fetches threads and handles sending replies | `student_messages_api.ts` |
| `student_messages_types/` | Interfaces for ChatMessages and Threads | `student_messages_types.ts` |
| `student_messages_constants/` | Mock chat threads | `student_messages_constants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Thread List (Sidebar) | `/student/messages` | View all active conversations. See unread badges and last message previews. | `StudentMessagesSidebar` | `GET /api/student/messages` | ✅ MOCKED |
| Chat History View | `/student/messages` | View the full message history of a selected thread in a modern chat bubble UI. | `StudentMessagesChatArea` | N/A | ✅ IMPLEMENTED |
| Mark as Read | `/student/messages` | Clicking a thread with an unread badge automatically clears the badge in local state. | `StudentMessagesMain` | N/A | ✅ IMPLEMENTED |
| Restricted Replies | `/student/messages` | If `allowedReplies` is true, a chat input box is shown. If false, a lock icon with a warning is shown instead. | `StudentMessagesChatArea` | N/A | ✅ IMPLEMENTED |
| Send Reply | `/student/messages` | Type a message and hit send. A spinner shows while sending, and the message optimistically appears in the chat. | `StudentMessagesChatArea` | `POST /api/student/messages/reply` | ✅ IMPLEMENTED |

## User Flows & Interactions
### Flow 1: Replying to a Teacher
1. The user clicks a thread in the `StudentMessagesSidebar` started by a Teacher.
2. The `StudentMessagesChatArea` mounts, auto-scrolling to the bottom of the chat history.
3. Because `allowedReplies` is true for this mock thread, the input bar is visible at the bottom.
4. The user types a message and clicks the send button (or hits Enter).
5. The button shows a loading spinner for ~600ms (mocking network latency).
6. The new message is appended to the chat as a primary-colored bubble on the right side ("self" styling).
7. The sidebar's "last message preview" is updated to reflect the newly sent message.

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — subfolders used, files < 300 lines.
- [x] Rule 2: Isolation — exclusively in `student/messages`.
- [x] Rule 4: Theme Independence — semantic variables used (e.g., `bg-primary`, `bg-page`).
- [x] Rule 9: Loaders/Errors — custom `loading.tsx` and `error.tsx` implemented.
- [x] Rule 13: Feature Map — this file created.
- [x] Special Constraint: Restricted messaging enforced via the `allowedReplies` flag and lack of a "New Chat" button.
