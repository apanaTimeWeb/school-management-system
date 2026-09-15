# Student Study Material — Feature Map

## Module Purpose
The Student Study Material module (`/student/study-material`) provides an organized repository of resources shared by teachers. Students can browse materials subject-wise and chapter-wise, search by title/description, and view/download PDFs, Documents, Notes, Videos, and Links.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `student_study_material_components/` | Visual layouts, sidebar, list, and viewer modal | `StudentStudyMaterialMain.tsx`, `StudentStudyMaterialSidebar.tsx`, `StudentStudyMaterialList.tsx`, `StudentStudyMaterialViewerModal.tsx` |
| `student_study_material_api/` | Fetches data | `student_study_material_api.ts` |
| `student_study_material_types/` | Data interfaces for materials and subjects | `student_study_material_types.ts` |
| `student_study_material_constants/` | Mock data for testing | `student_study_material_constants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Navigation Sidebar | `/student/study-material` | Select a Subject and subsequently a Chapter to filter materials. | `StudentStudyMaterialSidebar` | `GET /api/student/study-material` | ✅ MOCKED |
| Search functionality | `/student/study-material` | Type in a search box to instantly filter the visible grid by title or description. | `StudentStudyMaterialList` | Client-side filtering | ✅ MOCKED |
| Material Grid | `/student/study-material` | View color-coded cards based on material type (PDF, Video, Link, etc.). | `StudentStudyMaterialList` | `GET /api/student/study-material` | ✅ MOCKED |
| Viewer Modal | `/student/study-material` | Click a material to open a viewer. For videos, shows a simulated player. For links, an external redirect button. For docs, a download button. | `StudentStudyMaterialViewerModal` | N/A | ✅ MOCKED |

## User Flows & Interactions
### Flow 1: Filtering by Subject and Chapter
1. `StudentStudyMaterialSidebar` lists all subjects.
2. The user clicks a subject. The accordion expands to show chapters (`ch_1_1`, etc.) plus an "All Chapters" option.
3. Clicking a chapter filters the `filteredMaterials` array in `StudentStudyMaterialMain`.

### Flow 2: Viewing a Material
1. Clicking a material card opens `StudentStudyMaterialViewerModal`.
2. The modal UI adapts based on `mat.type`:
   - `Video`: Shows a cinematic black player background with a "Play" overlay.
   - `Link`: Shows a redirect icon and a prominent button to open in a new tab.
   - `PDF`/`Document`: Shows file size and a prominent "Download File" button.

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — subfolders used, files < 300 lines.
- [x] Rule 2: Isolation — exclusively in `student/study-material`.
- [x] Rule 4: Theme Independence — semantic variables used (`bg-popover`, `text-info`).
- [x] Rule 9: Loaders/Errors — custom `loading.tsx` and `error.tsx` implemented.
- [x] Rule 13: Feature Map — this file created.
- [x] Rule 29: Motion Accessibility — `motion-safe:animate-[slideIn_0.3s_ease-out]` used for Modal.
