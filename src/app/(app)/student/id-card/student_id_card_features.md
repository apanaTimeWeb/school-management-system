# Student ID Card — Feature Map

## Module Purpose
The Student ID Card module (`/student/id-card`) generates a digital, printable identity card for the student. It displays all vital information (Name, Photo, Class, Admission No, DOB, Blood Group, Contact) and features a scannable barcode mock for campus access verification.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `student_id_card_components/` | Visual UI: Container, ID Card Display | `StudentIdCardMain.tsx`, `StudentIdCardDisplay.tsx` |
| `student_id_card_api/` | Fetches student details | `student_id_card_api.ts` |
| `student_id_card_types/` | Data interfaces | `student_id_card_types.ts` |
| `student_id_card_constants/` | Mock data for UI testing | `student_id_card_constants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Digital ID View | `/student/id-card` | View a high-fidelity rendering of the school ID card, complete with branding, photo, and barcode. | `StudentIdCardDisplay` | `GET /api/student/id-card` | ✅ IMPLEMENTED |
| Print Functionality | `/student/id-card` | Click "Print" to trigger the browser's native print dialog. Page UI is hidden during print via CSS `print:hidden`. | `StudentIdCardDisplay` | N/A | ✅ IMPLEMENTED |
| Download Functionality | `/student/id-card` | Click "Download" (mocked via alert indicating html2canvas/PDF generator integration). | `StudentIdCardDisplay` | N/A | ✅ MOCKED |

## User Flows & Interactions
### Flow 1: Printing the ID Card
1. The user navigates to the ID Card module.
2. The card is rendered centrally on the screen.
3. The user clicks "Print Card".
4. `window.print()` is triggered.
5. Due to the `print:hidden` Tailwind classes on the header and action buttons, the physical printout contains *only* the ID card element.

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — subfolders used, files < 300 lines.
- [x] Rule 2: Isolation — exclusively in `student/id-card`.
- [x] Rule 4: Theme Independence — card uses fixed colors (white background, navy blue header) to simulate physical print standards, while external buttons use global theme tokens (`bg-primary`, `bg-page`).
- [x] Rule 9: Loaders/Errors — custom `loading.tsx` and `error.tsx` implemented.
- [x] Rule 13: Feature Map — this file created.
