# Accountant Refund Management — Feature Map

## Module Purpose
The Refund Management module allows the accountant to initiate, track, and process refunds. A refund is typically requested by the accountant, sent to the Admin/Principal for approval, and upon approval, the accountant logs the actual payout (transaction reference) to mark the refund as "Processed".

## Directory Structure

| Folder | Responsibility | Key Files |
|---|---|---|
| `accountant_refunds_components/` | UI logic for tracking requests, processing payments, and timeline view. | `AccountantRefundsMain.tsx`, `AccountantRefundsMetrics.tsx`, `AccountantRefundsFilters.tsx`, `AccountantRefundsTable.tsx`, `AccountantRefundsModals.tsx` |
| `accountant_refunds_store/` | Zustand state to manage filters, active request, and 3 distinct modal popups. | `useAccountantRefundsStore.ts` |
| `accountant_refunds_types/` | Data shapes for refund eligibility and lifecycle statuses. | `AccountantRefundsTypes.ts` |
| `accountant_refunds_utils/` | Mock payload mapping out different stages of the refund lifecycle. | `AccountantRefundsConstants.ts` |

## Feature Inventory

| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Refund Requests List | `/accountant/refunds` | View table of all requested refunds | `AccountantRefundsTable` | Mocked | ✅ Live |
| Refund Eligibility | `/accountant/refunds` | Visually check if request is Eligible or Not Eligible | `AccountantRefundsTable` | Mocked | ✅ Live |
| Process Refund Action | `/accountant/refunds` | Post-approval, enter payment UTR to finalize the refund | `AccountantRefundsModals` | Mocked | ✅ Live |
| Initiate Request | `/accountant/refunds` | Form to ask Principal/Admin for a refund | `AccountantRefundsModals` | Mocked | ✅ Live |
| Tracking Timeline | `/accountant/refunds` | View approval audit trail and payout dates | `AccountantRefundsModals` | Mocked | ✅ Live |
| Status Filters | `/accountant/refunds` | Filter table by Pending, Approved, Processed, Rejected | `AccountantRefundsFilters` | Mocked | ✅ Live |

## User Flows & Interactions

### Flow 1: Initiate a New Refund
1. User clicks the "Initiate Refund" button.
2. User fills in student details, amount, and reason (e.g., "Excess Payment").
3. Submitting sends it to `Pending Approval` (Simulated).

### Flow 2: Process an Approved Refund
1. User finds a request with status `Approved`. The table shows a distinct "Process" button with a Credit Card icon instead of the Eye icon.
2. Clicking "Process" opens a specific Payment Modal.
3. User enters Payment Method and UTR/Transaction Reference.
4. Clicking "Mark as Processed" finalizes the refund lifecycle.

### Flow 3: View Rejected/Pending History
1. User clicks the Eye icon on a `Rejected` request.
2. A vertical timeline appears showing when it was requested, and when the Principal rejected it along with the rejection remarks.

## Data and State Architecture

- **State pattern:** Zustand (`useAccountantRefundsStore`).
- **Conditional Rendering:** Modal logic is strictly separated. Depending on whether the request is "Approved" vs any other state, the row action dynamically changes. 

## Edge Cases and Rules Validated

- **Action State Guard:** A refund cannot be "Processed" unless it is "Approved".
- **Visual Clarity:** "Approved" means pending processing. "Processed" means money has left the bank. The UI handles this distinction perfectly with `info` (Blue) vs `success` (Green) color coding.

## Rule Compliance Checklist

- [x] Rule 1: Micro-modularization — subfolders properly isolated.
- [x] Rule 2: Total Role Isolation — isolated within accountant boundaries.
- [x] Rule 4: Theme Independence — applies semantic tailwind tokens (info, success, danger, warning).
- [x] Rule 5: Smart State Management — Zustand handles the 3 independent modals effectively.
