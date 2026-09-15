# Student Notifications Center — Feature Map

## Module Purpose
The Student Notifications module (`/student/notifications`) acts as a central hub for all alerts and updates across the platform. It aggregates alerts for fees, attendance, results, assignments, and more.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `student_notifications_components/` | Visual UI: Filter Sidebar, Notifications List, State Management | `StudentNotificationsMain.tsx`, `StudentNotificationsList.tsx`, `StudentNotificationsFilter.tsx` |
| `student_notifications_api/` | Fetches notification payload | `student_notifications_api.ts` |
| `student_notifications_types/` | Data interfaces for categories and payload | `student_notifications_types.ts` |
| `student_notifications_constants/` | Mock data for UI testing | `student_notifications_constants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Category Filtering | `/student/notifications` | Click on a category in the sidebar (Attendance, Homework, Fee, etc.) to filter the main list. The sidebar shows dynamic counts for each category. | `StudentNotificationsFilter` | N/A | ✅ IMPLEMENTED |
| Visual Indicators | `/student/notifications` | Unread notifications have a blue dot and full opacity. Read notifications are slightly faded. Each category has its own distinct color and icon (e.g., Red Wallet for Fee, Green Award for Result). | `StudentNotificationsList` | N/A | ✅ IMPLEMENTED |
| Mark as Read/Unread | `/student/notifications` | Click the toggle on individual notifications, or use "Mark all as read" at the top to clear all indicators. | `StudentNotificationsMain` | `PUT /api/student/notifications/read` | ✅ MOCKED UI |
| Deep Linking | `/student/notifications` | Click "View Details" on a notification to navigate directly to the relevant module (e.g., `/student/fees`). | `StudentNotificationsList` | N/A | ✅ IMPLEMENTED |

## User Flows & Interactions
### Flow 1: Interacting with Unread Alerts
1. The user visits the page and sees 2 unread notifications (Fee and Homework).
2. The Fee notification stands out with a red icon background.
3. The user clicks "Mark all as read" at the top.
4. The local state updates, fading all notification cards slightly, removing the blue unread dots, and the top badge updates to "0 Unread". The "Mark all as read" button becomes disabled.

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — subfolders used, files < 300 lines.
- [x] Rule 2: Isolation — exclusively in `student/notifications`.
- [x] Rule 4: Theme Independence — semantic variables used for 10+ distinct categories (`bg-danger`, `text-success`, `text-info`, `text-amber-500`, `text-purple-500`, `text-teal-500`, etc.).
- [x] Rule 9: Loaders/Errors — custom `loading.tsx` and `error.tsx` implemented.
- [x] Rule 13: Feature Map — this file created.
