# Accountant Student Fees — Feature Map

## Module Purpose
The Student Fees module allows accountants to search for any student and view their comprehensive financial profile. It handles assigned fee structures, tracks paid and pending installments, lists any applied discounts or fines, and provides a full transaction history. Importantly, it includes interactive modals to directly perform actions (collect fees, add fines, grant concessions) against that student's ledger.

## Directory Structure

| Folder | Responsibility | Key Files |
|---|---|---|
| `accountant_student_fees_components/` | Renders the student list and profile tabs/modals | `AccountantStudentFeesListMain.tsx`, `AccountantStudentFeeProfileMain.tsx`, `AccountantStudentFeePayments.tsx`, `AccountantStudentFeeModals.tsx` |
| `accountant_student_fees_store/` | Zustand store for managing tabs and modal visibility | `useAccountantStudentFeesStore.ts` |
| `accountant_student_fees_types/` | Data interfaces for student fee profiles | `AccountantStudentFeesTypes.ts` |
| `accountant_student_fees_utils/` | Mock data for lists, fees, history, and formatting | `AccountantStudentFeesConstants.ts` |

## Feature Inventory

| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Search Students | `/accountant/student-fees` | View searchable list of students with total paid/pending | `AccountantStudentFeesListMain` | Mocked | ✅ Live |
| View Profile Header | `/accountant/student-fees/[id]` | See student details and aggregated financial stats | `AccountantStudentFeeHeader` | Mocked | ✅ Live |
| Fee Structure | `/accountant/student-fees/[id]` | View all assigned fee heads (term-wise, one-time) | `AccountantStudentFeeStructure` | Mocked | ✅ Live |
| Payments & Pending | `/accountant/student-fees/[id]` | See paid installments, pending dues, and overdue amounts | `AccountantStudentFeePayments` | Mocked | ✅ Live |
| Discounts | `/accountant/student-fees/[id]` | See applied scholarships and concessions | `AccountantStudentFeeDiscounts` | Mocked | ✅ Live |
| Fines | `/accountant/student-fees/[id]` | See applied late fees or library fines | `AccountantStudentFeeFines` | Mocked | ✅ Live |
| Transaction History | `/accountant/student-fees/[id]` | View chronological table of all past transactions | `AccountantStudentFeeHistory` | Mocked | ✅ Live |
| Collect Fee | `/accountant/student-fees/[id]` | Click "Collect Now" to open modal and record payment | `AccountantStudentFeeModals` | Mocked | ✅ Live |

## User Flows & Interactions

### Flow 1: Search and Select Student
1. User types in search box or clicks a row in `AccountantStudentFeesListMain`.
2. Router navigates to `/accountant/student-fees/[studentId]`.
3. `AccountantStudentFeeProfileMain` reads `studentId` from URL params and mounts the profile.

### Flow 2: Collect Fee Action
1. In the Payments tab, user clicks "Collect Now".
2. `useAccountantStudentFeesStore.setCollectFeeModalOpen(true)` is fired.
3. `AccountantStudentFeeModals` displays the Collect Fee modal via Portal/Overlay.
4. User selects UPI, enters amount, clicks "Confirm Payment" -> simulated `alert()` confirms success.

## Component Responsibility Map

| Component File | Responsibility |
|---|---|
| `AccountantStudentFeesListMain.tsx` | Searchable data table for all students. |
| `AccountantStudentFeeProfileMain.tsx`| Root component for `[id]/page.tsx`, renders header and active tab. |
| `AccountantStudentFeeHeader.tsx` | Fixed top header showing student photo and total stats. |
| `AccountantStudentFeeStructure.tsx` | Table of assigned fees (Tab 1). |
| `AccountantStudentFeePayments.tsx` | Dual-card layout for pending/overdue vs paid (Tab 2). |
| `AccountantStudentFeeDiscounts.tsx` | Table of concessions (Tab 3). |
| `AccountantStudentFeeFines.tsx` | Table of fines (Tab 4). |
| `AccountantStudentFeeHistory.tsx` | Table of past payments (Tab 5). |
| `AccountantStudentFeeModals.tsx` | Hidden absolute/fixed positioned modals for user actions. |

## Rule Compliance Checklist

- [x] Rule 1: Micro-modularization — module-prefixed subfolders (`accountant_student_fees_...`)
- [x] Rule 2: Total Role Isolation — uses Accountant routing layout `/accountant/student-fees`
- [x] Rule 4: Theme Independence — strictly uses standard tailwind token colors (`bg-card`, `bg-bg-page`)
- [x] Rule 5: Smart State Management — Zustand handles modal popups and tabs perfectly without prop drilling.
- [x] Click Interactions Verified — All buttons trigger appropriate modals/tabs.
