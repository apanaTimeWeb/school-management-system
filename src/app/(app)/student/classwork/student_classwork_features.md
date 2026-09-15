# Student Classwork — Feature Map

## Module Purpose
The Student Classwork module (`/student/classwork`) allows students to view what was taught in class on any given day. It provides a history sidebar for easy date navigation and displays the topic, chapter, notes, and specific teacher instructions for each subject period.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `student_classwork_components/` | Visual layouts, sidebar, day view, and modal | `StudentClassworkMain.tsx`, `StudentClassworkHistorySidebar.tsx`, `StudentClassworkDayView.tsx`, `StudentClassworkDetailsModal.tsx` |
| `student_classwork_api/` | Fetches data | `student_classwork_api.ts` |
| `student_classwork_types/` | Data interfaces for daily records | `student_classwork_types.ts` |
| `student_classwork_constants/` | Mock data for testing | `student_classwork_constants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| History Sidebar | `/student/classwork` | Browse past dates to see historical classwork. | `StudentClassworkHistorySidebar` | `GET /api/student/classwork` | ✅ MOCKED |
| Day View List | `/student/classwork` | View all subjects taught on the selected date with a preview of notes and instructions. | `StudentClassworkDayView` | `GET /api/student/classwork` | ✅ MOCKED |
| Details Modal | `/student/classwork` | Read the full notes and instructions in a distraction-free modal. | `StudentClassworkDetailsModal` | N/A | ✅ MOCKED |

## User Flows & Interactions
### Flow 1: Navigating History
1. The sidebar defaults to the most recent date (e.g., "Today").
2. The user clicks a past date in the `StudentClassworkHistorySidebar`.
3. The `selectedDayId` state updates in `StudentClassworkMain`.
4. The `StudentClassworkDayView` re-renders to show the subject records for that specific date.
5. If there are no records for a day (e.g., Sunday), a clean fallback UI is shown.

### Flow 2: Viewing Full Details
1. The `StudentClassworkDayView` shows a preview (`line-clamp-2`) of notes to save space.
2. The user clicks the "Maximize" button (`Maximize2` icon) on a subject card.
3. The `StudentClassworkDetailsModal` slides in, showing the full, un-truncated notes and teacher instructions.

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — subfolders used, files < 300 lines.
- [x] Rule 2: Isolation — exclusively in `student/classwork`.
- [x] Rule 4: Theme Independence — semantic variables used (`bg-popover`, `text-info`).
- [x] Rule 9: Loaders/Errors — custom `loading.tsx` and `error.tsx` implemented.
- [x] Rule 13: Feature Map — this file created.
- [x] Rule 29: Motion Accessibility — `motion-safe:animate-[slideIn_0.3s_ease-out]` used for Modal.
