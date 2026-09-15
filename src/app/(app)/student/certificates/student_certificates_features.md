# Student Certificates & Documents — Feature Map

## Module Purpose
The Student Certificates module (`/student/certificates`) provides a self-service portal for students and parents to download officially generated school certificates (e.g., Bonafide, Study Certificate) and to submit requests for new ones.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `student_certificates_components/` | Visual UI: Tabs, Grid of Certificates, Request Form & Status Table | `StudentCertificatesMain.tsx`, `StudentCertificatesList.tsx`, `StudentCertificatesRequest.tsx` |
| `student_certificates_api/` | Fetches certificates and handles mock requests | `student_certificates_api.ts` |
| `student_certificates_types/` | Data interfaces | `student_certificates_types.ts` |
| `student_certificates_constants/` | Mock data for testing | `student_certificates_constants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| My Certificates | `/student/certificates` | View a grid of generated certificates. Cards feature a rich gradient header, QR verification badge, and a "Download PDF" button. | `StudentCertificatesList` | `GET /api/student/certificates` | ✅ MOCKED |
| Request Certificate | `/student/certificates` | Fill out a form selecting the Certificate Type (Bonafide, Character, TC, etc.) and Reason to apply for a new document. | `StudentCertificatesRequest` | `POST /api/student/certificates/request` | ✅ IMPLEMENTED |
| Request Status | `/student/certificates` | View a table of past requests showing the current status (Pending, In Process, Generated, Rejected) and official remarks. | `StudentCertificatesRequest` | `GET /api/student/certificates` | ✅ MOCKED |
| Dynamic Status Badges | `/student/certificates` | Status badges are color-coded (Green for Generated, Orange for Pending, Red for Rejected, Blue with a spinner for In Process). | `StudentCertificatesRequest` | N/A | ✅ IMPLEMENTED |

## User Flows & Interactions
### Flow 1: Requesting a Bonafide Certificate
1. The user switches to the "Request Certificate" tab.
2. They select "Bonafide Certificate" from the dropdown and type "For opening a bank account" in the reason field.
3. They click "Submit Request". The button enters a loading state (`isSubmitting === true`).
4. The mock API resolves after 1 second.
5. The form resets, an alert confirms submission, and the new request appears instantly at the top of the "Past Requests Status" table with a "Pending" badge.

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — subfolders used, files < 300 lines.
- [x] Rule 2: Isolation — exclusively in `student/certificates`.
- [x] Rule 4: Theme Independence — semantic variables used (`bg-primary`, `text-success`).
- [x] Rule 9: Loaders/Errors — custom `loading.tsx` and `error.tsx` implemented.
- [x] Rule 13: Feature Map — this file created.
