# Student Health & Medical — Feature Map

## Module Purpose
The Student Health & Medical module (`/student/health`) provides read-only access to a student's basic health vitals, emergency contacts, past school checkup reports, and general medical notices. 

As per the strict requirements, highly sensitive medical records are either masked or omitted from this generic student-facing UI. A privacy banner is explicitly displayed to inform the user that this view is restricted.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `student_health_components/` | Visual UI: Tabs, Profile, Checkups, Notices | `StudentHealthMain.tsx`, `StudentHealthProfile.tsx`, `StudentHealthCheckups.tsx`, `StudentHealthNotices.tsx` |
| `student_health_api/` | Fetches read-only medical data | `student_health_api.ts` |
| `student_health_types/` | Data interfaces | `student_health_types.ts` |
| `student_health_constants/` | Mock data for testing | `student_health_constants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Restricted View Banner | `/student/health` | Sees a permanent banner explaining that detailed clinical records are kept private. | `StudentHealthMain` | N/A | ✅ IMPLEMENTED |
| Health Profile (Vitals) | `/student/health` | View Blood Group, BMI (calculated status), Height, Weight, Allergies, and Emergency Contacts. | `StudentHealthProfile` | `GET /api/student/health` | ✅ MOCKED |
| Checkup Records | `/student/health` | View history of school checkups. Cards show status (Healthy vs Requires Attention) and specific Vision/Dental remarks. | `StudentHealthCheckups` | `GET /api/student/health` | ✅ MOCKED |
| Medical Notices | `/student/health` | Read school-wide health advisories (e.g. Vaccination drives). Urgent notices get a red pulsing dot. | `StudentHealthNotices` | `GET /api/student/health` | ✅ MOCKED |

## User Flows & Interactions
### Flow 1: Viewing BMI Status
1. The user navigates to the Health Profile tab.
2. The UI checks the `bmi` value from the API.
3. If the BMI is between 18.5 and 24.9, the UI explicitly colors the metric Green (`text-success`) and tags it "Healthy". Otherwise, it tags it "Needs Attention" in Orange.

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — subfolders used, files < 300 lines.
- [x] Rule 2: Isolation — exclusively in `student/health`.
- [x] Rule 4: Theme Independence — semantic variables used (`bg-success`, `text-info`, `text-danger`).
- [x] Rule 9: Loaders/Errors — custom `loading.tsx` and `error.tsx` implemented.
- [x] Rule 13: Feature Map — this file created.
- [x] User Requirement: "Sensitive medical records को restricted रखना चाहिए" -> Implemented by adding a Privacy Banner and only exposing non-sensitive fields (Vitals, simple checkup remarks) instead of deep clinical data.
