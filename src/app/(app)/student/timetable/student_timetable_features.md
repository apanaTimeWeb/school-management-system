# Student Timetable — Feature Map

## Module Purpose
The Student Timetable module (`/student/timetable`) allows the student to view their daily schedule, switch between a detailed day-by-day vertical list or a full-week grid view, and get notified about substitute teachers or room changes.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `student_timetable_components/` | Visual layouts of the timetable | `StudentTimetableMain.tsx`, `StudentTimetableDaily.tsx`, `StudentTimetableWeekly.tsx`, `StudentTimetableUpdates.tsx` |
| `student_timetable_api/` | Fetches timetable data | `student_timetable_api.ts` |
| `student_timetable_types/` | Data interfaces for periods and updates | `student_timetable_types.ts` |
| `student_timetable_constants/` | Mock data | `student_timetable_constants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| View Toggling | `/student/timetable` | Switch between 'Daily View' and 'Weekly Grid' | `StudentTimetableMain` | `GET /api/student/timetable` | ✅ MOCKED |
| Daily View | `/student/timetable` | Select a day (Mon-Sat) and see a vertical timeline of classes and breaks | `StudentTimetableDaily` | `GET /api/student/timetable` | ✅ MOCKED |
| Weekly Grid | `/student/timetable` | View the entire week in a horizontal table format | `StudentTimetableWeekly` | `GET /api/student/timetable` | ✅ MOCKED |
| Updates | `/student/timetable` | See recent room changes or substitute teachers | `StudentTimetableUpdates` | `GET /api/student/timetable` | ✅ MOCKED |

## User Flows & Interactions
### Flow 1: Daily View Interactions
1. `StudentTimetableMain.tsx` loads the daily view by default.
2. The user sees a horizontal scrollable row of days (Mon, Tue, Wed).
3. Clicking a day changes `selectedDayIndex` and updates the vertical list of periods.
4. Breaks are highlighted in amber (`bg-amber-500/5`), while normal classes use standard card backgrounds. Substitute teacher alerts show up in red within the period block.

### Flow 2: Weekly View Interactions
1. User clicks the "Weekly Grid" button.
2. The main area swaps to `StudentTimetableWeekly.tsx`.
3. A large table is rendered, scrollable horizontally on small screens. Breaks are rotated text vertically (`transform -rotate-90`) for a compact and standard school timetable look.

## Data and State Architecture
- **State pattern:** `useState` in `StudentTimetableMain.tsx` handles data fetching and `viewMode`. `useState` in `StudentTimetableDaily.tsx` handles the selected day pill.

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — subfolders used, files < 300 lines.
- [x] Rule 2: Isolation — exclusively in `student/timetable`.
- [x] Rule 4: Theme Independence — semantic variables used (e.g. `bg-card`, `bg-amber-500/5`).
- [x] Rule 9: Loaders/Errors — custom `loading.tsx` and `error.tsx` implemented.
- [x] Rule 13: Feature Map — this file created.
- [x] Rule 29: Motion Accessibility — `motion-safe:transition-all` used for view toggles and hover states.
