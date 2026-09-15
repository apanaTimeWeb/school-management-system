# Student Results — Feature Map

## Module Purpose
The Student Results module (`/student/results`) displays the student's academic performance for various examinations. It mimics a physical report card, showing top-level KPIs (Percentage, Grade, Status, Rank), a detailed subject-wise marks table, and the class teacher's overall remarks.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `student_results_components/` | Visual layouts for sidebar and main report card | `StudentResultsMain.tsx`, `StudentResultsTermSelector.tsx`, `StudentResultsReportCard.tsx` |
| `student_results_api/` | Fetches data | `student_results_api.ts` |
| `student_results_types/` | Data interfaces for marks and KPIs | `student_results_types.ts` |
| `student_results_constants/` | Mock data for UI testing | `student_results_constants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Term Selector Sidebar | `/student/results` | Choose which past exam term to view (e.g. "Mid Term", "Unit Test 1"). | `StudentResultsTermSelector` | `GET /api/student/results` | ✅ MOCKED |
| Top-Level KPIs | `/student/results` | Instantly see Percentage, Grade, Rank, and Pass/Fail status. | `StudentResultsReportCard` | `GET /api/student/results` | ✅ MOCKED |
| Marks Table | `/student/results` | View a detailed table of Max Marks, Obtained Marks, Grade, and Remarks for every subject. | `StudentResultsReportCard` | `GET /api/student/results` | ✅ MOCKED |
| Print & PDF Actions | `/student/results` | Mock buttons for printing or downloading the report card as a PDF. | `StudentResultsReportCard` | N/A | ✅ MOCKED |

## User Flows & Interactions
### Flow 1: Selecting a Result
1. The system defaults to the most recent result (`data.results[0]`).
2. The user can click a different term in the `StudentResultsTermSelector` sidebar.
3. The main area (`StudentResultsReportCard`) updates to show the selected term's data.

### Flow 2: Viewing the Report Card
1. The Report Card features a highly visual header with decorative icons and functional Print/PDF buttons.
2. Below the header, 4 KPI blocks display critical information. `Status` is color-coded (`text-success` for Pass).
3. The subject marks table clearly delineates Total Max Marks vs Total Obtained Marks in the footer (`<tfoot>`).
4. Teacher's overall remarks are presented in an emphasized, italicized block at the bottom.

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — subfolders used, files < 300 lines.
- [x] Rule 2: Isolation — exclusively in `student/results`.
- [x] Rule 4: Theme Independence — semantic variables used (`bg-success`, `bg-info/5`).
- [x] Rule 9: Loaders/Errors — custom `loading.tsx` and `error.tsx` implemented.
- [x] Rule 13: Feature Map — this file created.
