# Student Events & Activities — Feature Map

## Module Purpose
The Student Events & Activities module (`/student/events`) is a hub for co-curricular participation. It allows students to discover upcoming events (Sports, Cultural, Workshops), register for them, track their current registrations, and view results or download certificates for past events.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `student_events_components/` | Visual UI: Tabs, List, Participations, Results, Modal | `StudentEventsMain.tsx`, `StudentEventsList.tsx`, `StudentEventsMyParticipations.tsx`, `StudentEventsResults.tsx`, `StudentEventsRegistrationModal.tsx` |
| `student_events_api/` | Fetches events and handles registration | `student_events_api.ts` |
| `student_events_types/` | Data interfaces | `student_events_types.ts` |
| `student_events_constants/` | Mock data for UI testing | `student_events_constants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Tabbed Interface | `/student/events` | Switch between "Upcoming Events", "My Registrations", and "Results". | `StudentEventsMain` | N/A | ✅ IMPLEMENTED |
| Event Discovery | `/student/events` | View a rich grid of upcoming events. Filter them by Category (Sports, Cultural, etc). | `StudentEventsList` | `GET /api/student/events` | ✅ MOCKED |
| Registration | `/student/events` | Click "Register Now" to open a confirmation modal. If already registered, shows a disabled "Registered" button. | `StudentEventsList`, `StudentEventsRegistrationModal` | `POST /api/student/events/register` | ✅ IMPLEMENTED |
| Participations | `/student/events` | View a table of all registered events and their approval status. | `StudentEventsMyParticipations` | `GET /api/student/events` | ✅ MOCKED |
| Results & Certificates | `/student/events` | View ranks/scores from past events and click to download certificates. | `StudentEventsResults` | `GET /api/student/events` | ✅ MOCKED |

## User Flows & Interactions
### Flow 1: Registering for an Event
1. The user browses the "Upcoming Events" grid.
2. They click "Register Now" on an event (e.g., Robotics Workshop).
3. The `StudentEventsRegistrationModal` opens, showing event details and a warning about absenteeism.
4. They click "Confirm Registration". The button shows a loading spinner for ~1.2s (API mock).
5. Upon success, the UI optimistically adds the event to `myParticipations`, closes the modal, switches the active tab to "My Registrations", and alerts success.

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — subfolders used, files < 300 lines.
- [x] Rule 2: Isolation — exclusively in `student/events`.
- [x] Rule 4: Theme Independence — semantic variables used (`bg-success`, `text-info`).
- [x] Rule 9: Loaders/Errors — custom `loading.tsx` and `error.tsx` implemented.
- [x] Rule 13: Feature Map — this file created.
