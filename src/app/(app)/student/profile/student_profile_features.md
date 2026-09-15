# Student Profile — Feature Map

## Module Purpose
The Student Profile module (`/student/profile`) displays comprehensive personal, academic, and contact information for the currently authenticated student. In compliance with security requirements, all sensitive data (DOB, Contacts, Address, Parents) is strictly read-only and explicitly marked as such. It also generates a downloadable digital ID card.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `student_profile_components/` | Visual layout of the profile (Header, Academics, Personal, ID Card) | `StudentProfileMain.tsx`, `StudentProfileHeader.tsx`, `StudentProfileAcademicDetails.tsx`, `StudentProfilePersonalDetails.tsx`, `StudentProfileIdCard.tsx` |
| `student_profile_api/` | Fetches full profile data | `student_profile_api.ts` |
| `student_profile_types/` | Data interfaces ensuring strict type safety | `student_profile_types.ts` |
| `student_profile_constants/` | Hardcoded fallback mock data for offline/dev viewing | `student_profile_constants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Profile Header | `/student/profile` | View photo, name, active status, download ID | `StudentProfileHeader` | `GET /api/student/profile` | ✅ MOCKED |
| Academic Details | `/student/profile` | View read-only Class, Section, Roll No, Admission No, House | `StudentProfileAcademicDetails` | `GET /api/student/profile` | ✅ MOCKED |
| Personal Details | `/student/profile` | View read-only DOB, Gender, Blood Group, Contact, Parents | `StudentProfilePersonalDetails` | `GET /api/student/profile` | ✅ MOCKED |
| Digital ID Card | `/student/profile` | View a graphical representation of the ID Card | `StudentProfileIdCard` | `GET /api/student/profile` | ✅ MOCKED |

## User Flows & Interactions
### Flow 1: View Sensitive Data
1. Navigate to `/student/profile`.
2. Observe the "Read Only" red badges clearly indicating that this information is locked.
3. User sees parents' details, exact DOB, and full address. None of these fields are editable to ensure data integrity per user request.

### Flow 2: View/Download Digital ID Card
1. The right column displays a stylized ID card.
2. The card features a gradient background (`bg-gradient-to-b from-primary to-primary-hover`) giving it a physical card feel.
3. Hovering the card applies a 3D-like scale effect (`hover:scale-105`).
4. Clicking "Download ID" in the top header triggers a print/download action (currently mocked).

## Data and State Architecture
- **State pattern:** `useState` in `StudentProfileMain.tsx`.
- **Read-Only Enforced:** No form elements (`<input>`, `<select>`) exist anywhere in the component tree. All data is rendered inside `<span>` tags.

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — subfolders used, files < 150 lines.
- [x] Rule 2: Isolation — exclusively in `student/profile`.
- [x] Rule 4: Theme Independence — semantic variables (`bg-card`, `bg-page`, `text-primary`).
- [x] Rule 9: Loaders/Errors — `loading.tsx` uses animated shimmering skeletons.
- [x] Rule 13: Feature Map — this file created.
- [x] Rule 29: Motion Accessibility — `motion-safe:transition-transform` used on ID Card.
- [x] Rule Explicit (from prompt): "Sensitive information ko read-only rakha jayega" — Enforced with visual locks and labels.
