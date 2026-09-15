# Student Attendance — Feature Map

## Module Purpose
The Student Attendance module (`/student/attendance`) provides a read-only summary of the student's daily and subject-wise attendance. It includes top-level KPIs, a visual calendar, historical breakdown, and automatic warnings for low attendance. Edit access is strictly denied as per user requirements.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `student_attendance_components/` | Visual layout | `StudentAttendanceMain.tsx`, `StudentAttendanceKpis.tsx`, `StudentAttendanceCalendar.tsx`, `StudentAttendanceSubjectWise.tsx`, `StudentAttendanceHistory.tsx` |
| `student_attendance_api/` | Fetches data | `student_attendance_api.ts` |
| `student_attendance_types/` | Data interfaces | `student_attendance_types.ts` |
| `student_attendance_constants/` | Mock data | `student_attendance_constants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| KPIs & Alerts | `/student/attendance` | View overall % and Present/Absent/Late/Leave counts. Receive warnings if % is low. | `StudentAttendanceKpis` | `GET /api/student/attendance` | ✅ MOCKED |
| Calendar View | `/student/attendance` | Hover over calendar dates to see specific status and remarks. | `StudentAttendanceCalendar` | `GET /api/student/attendance` | ✅ MOCKED |
| Subject-wise | `/student/attendance` | See attendance broken down by enrolled subjects. | `StudentAttendanceSubjectWise` | `GET /api/student/attendance` | ✅ MOCKED |
| Monthly History | `/student/attendance` | View past month summaries in a vertical timeline. | `StudentAttendanceHistory` | `GET /api/student/attendance` | ✅ MOCKED |

## User Flows & Interactions
### Flow 1: Interacting with the Calendar
1. User sees the `StudentAttendanceCalendar.tsx` representing the current month.
2. Days marked "Absent" are colored red (`bg-danger`), "Present" are green (`bg-success`).
3. Hovering over a day (`group-hover:block`) reveals a dark, floating tooltip displaying the specific remarks (e.g., "Absent: Medical Leave").

### Flow 2: Low Attendance Alert
1. If `overallPercentage` falls below a threshold (mocked as true for testing), a prominent Red Alert Box (`bg-danger/10`) appears above the KPIs warning the student about academic penalties.
2. The percentage number itself turns red (`text-danger`) to emphasize the issue.

## Security & Rule Enforcement
- **Read-Only Rule:** "Student attendance edit नहीं कर सकेगा". Assured. The UI has absolutely no forms, buttons, or API mutation calls capable of changing data.

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — subfolders used, files < 300 lines.
- [x] Rule 2: Isolation — exclusively in `student/attendance`.
- [x] Rule 4: Theme Independence — semantic variables used (`bg-success`, `text-danger`).
- [x] Rule 9: Loaders/Errors — custom `loading.tsx` and `error.tsx` implemented.
- [x] Rule 13: Feature Map — this file created.
- [x] Explicit rule (No Edits) — Enforced.
