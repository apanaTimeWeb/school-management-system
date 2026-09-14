# Accountant Collect Fee — Feature Map

## Module Purpose
The Fee Collection module allows accountants to process payments for students directly. It guides the user through selecting a student (which pulls their pending dues), configuring the payment terms (Full, Partial, Installment, Advance), specifying the payment mode (Cash, UPI, Card, etc.), and finally generating a success receipt after review.

## Directory Structure

| Folder | Responsibility | Key Files |
|---|---|---|
| `accountant_collect_fee_components/` | All UI components for the layout, search, form, and modals. | `AccountantCollectFeeMain.tsx`, `AccountantCollectFeeStudentSearch.tsx`, `AccountantCollectFeeForm.tsx`, `AccountantCollectFeeSummaryModal.tsx` |
| `accountant_collect_fee_store/` | Zustand store for managing cross-component form state and modal visibility. | `useAccountantCollectFeeStore.ts` |
| `accountant_collect_fee_types/` | Data interfaces for forms and search results. | `AccountantCollectFeeTypes.ts` |
| `accountant_collect_fee_utils/` | Mock data for student search results and currency utilities. | `AccountantCollectFeeConstants.ts` |

## Feature Inventory

| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Student Search | `/accountant/collect-fee` | Search for a student by name/ID to see pending dues | `AccountantCollectFeeStudentSearch` | Mocked | ✅ Live |
| Payment Type Setup | `/accountant/collect-fee` | Choose Full, Partial, Installment, or Advance payment | `AccountantCollectFeeForm` | Mocked | ✅ Live |
| Payment Mode Setup | `/accountant/collect-fee` | Toggle Online/Offline and pick specific method (Cash, UPI, etc.) | `AccountantCollectFeeForm` | Mocked | ✅ Live |
| Other Form Fields | `/accountant/collect-fee` | Pick date, enter Transaction Ref, enter Remarks | `AccountantCollectFeeForm` | Mocked | ✅ Live |
| Review & Collect | `/accountant/collect-fee` | Open review modal showing old vs new balance and confirm | `AccountantCollectFeeSummaryModal` | Mocked | ✅ Live |
| Success & Receipt | `/accountant/collect-fee` | View success popup with Print / Save PDF options | `AccountantCollectFeeSummaryModal` | Mocked | ✅ Live |

## User Flows & Interactions

### Flow 1: Search to Form Enablement
1. User types >2 characters in the search bar.
2. Store selects the first mock match.
3. The right-hand Form becomes enabled (was previously blocked).
4. `amountToCollect` is automatically set to the student's `totalPending`.

### Flow 2: Collect Fee Process
1. User adjusts amount (e.g. changes Full to Partial).
2. User selects Offline > Cash.
3. User clicks "Review & Collect".
4. `isReviewModalOpen` set to true. Review modal shows breakdown.
5. User clicks "Confirm & Collect".
6. `isReviewModalOpen` -> false. 500ms delay. `isSuccessModalOpen` -> true.
7. Success popup appears with Print/Save buttons.

## Data and State Architecture

- **State pattern:** Zustand (`useAccountantCollectFeeStore`) heavily used to share form state between the Search (left), the Form (right), and the Modals (overlay).
- **Zustand store variables:** 
  - `selectedStudent`, `amountToCollect`, `paymentType`, `paymentCategory`, `onlineMethod`, `offlineMethod`
  - `isReviewModalOpen`, `isSuccessModalOpen`

## Edge Cases and Rules Validated

- **Form Disablement:** Form cannot be interacted with until a student is selected.
- **Submit Guard:** "Review & Collect" button is disabled if `amountToCollect` is empty or <= 0.
- **Auto-Sync:** If user manually changes amount from Total Pending to something else, Payment Type auto-switches from 'Full' to 'Partial'.

## Rule Compliance Checklist

- [x] Rule 1: Micro-modularization — subfolders properly isolated.
- [x] Rule 2: Total Role Isolation — uses Accountant routing layout `/accountant/collect-fee`.
- [x] Rule 4: Theme Independence — uses standard tailwind token colors (`bg-card`, `text-success`).
- [x] Rule 5: Smart State Management — Zustand effectively eliminates prop drilling.
- [x] Click Interactions Verified — All buttons trigger the proper next state in the flow.
