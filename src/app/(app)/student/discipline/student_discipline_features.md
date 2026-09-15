# Student Discipline & Behaviour — Feature Map

## Module Purpose
The Student Discipline module (`/student/discipline`) gives students and parents visibility into behaviour tracking. It allows them to read positive/negative remarks from teachers, review official warnings/disciplinary actions, and track the schedule of counselling sessions.

As per strict school policies, this view ONLY shows data explicitly meant for the student. Confidential counselling notes or internal administrative remarks are not exposed here.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `student_discipline_components/` | Visual UI: Tabs, Remarks, Warnings, Counselling | `StudentDisciplineMain.tsx`, `StudentDisciplineRemarks.tsx`, `StudentDisciplineWarnings.tsx`, `StudentDisciplineCounselling.tsx` |
| `student_discipline_api/` | Fetches read-only discipline data | `student_discipline_api.ts` |
| `student_discipline_types/` | Data interfaces | `student_discipline_types.ts` |
| `student_discipline_constants/` | Mock data for UI testing | `student_discipline_constants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Privacy Notice | `/student/discipline` | See a permanent banner indicating that the records shown here are governed by confidentiality policies. | `StudentDisciplineMain` | N/A | ✅ IMPLEMENTED |
| Behaviour Remarks | `/student/discipline` | Read positive, negative, and improvement notes left by teachers. Icons and colors change based on the remark type. | `StudentDisciplineRemarks` | `GET /api/student/discipline` | ✅ MOCKED |
| Official Warnings | `/student/discipline` | View serious disciplinary incidents, the action taken, and current status (Active, Resolved, Closed). If any status is Active, the tab pulses red. | `StudentDisciplineWarnings` | `GET /api/student/discipline` | ✅ MOCKED |
| Counselling Records | `/student/discipline` | View dates and topics of attended counselling sessions, as well as the date for the next scheduled session. | `StudentDisciplineCounselling` | `GET /api/student/discipline` | ✅ MOCKED |

## User Flows & Interactions
### Flow 1: Navigating Warnings
1. The user visits the Discipline page.
2. The `StudentDisciplineMain` checks if any warning in `data.warnings` has an 'Active' status.
3. If true, a red pulsing dot appears next to the "Official Warnings" tab.
4. When the user clicks the tab, they see the warning with a heavy red border and an 'Active' badge, drawing attention to the unresolved issue.

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — subfolders used, files < 300 lines.
- [x] Rule 2: Isolation — exclusively in `student/discipline`.
- [x] Rule 4: Theme Independence — semantic variables used (`bg-success`, `text-info`, `text-danger`, `text-amber-500`).
- [x] Rule 9: Loaders/Errors — custom `loading.tsx` and `error.tsx` implemented.
- [x] Rule 13: Feature Map — this file created.
- [x] User Requirement: "Student को केवल वही information दिखे जो school policy के अनुसार visible है" -> Handled by omitting detailed notes from the types and providing a clear Privacy Banner.
