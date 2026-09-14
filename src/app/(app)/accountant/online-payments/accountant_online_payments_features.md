# Accountant Online Payments — Feature Map

## Module Purpose
The Online Payments module allows the accountant to monitor, filter, and reconcile transactions originating from the digital payment gateways (like Razorpay, Stripe, or bank portals). It supports investigating failed payments, handling manual reconciliation mismatches, and initiating refunds for successful payments directly from the dashboard.

## Directory Structure

| Folder | Responsibility | Key Files |
|---|---|---|
| `accountant_online_payments_components/` | All UI elements including metrics, filters, data table, and interactive modals. | `AccountantOnlinePaymentsMain.tsx`, `AccountantOnlinePaymentsMetrics.tsx`, `AccountantOnlinePaymentsFilters.tsx`, `AccountantOnlinePaymentsTable.tsx`, `AccountantOnlinePaymentModals.tsx` |
| `accountant_online_payments_store/` | Zustand state to manage filters, active transaction, and modal state. | `useAccountantOnlinePaymentsStore.ts` |
| `accountant_online_payments_types/` | Data shapes for gateway transactions and statuses. | `AccountantOnlinePaymentsTypes.ts` |
| `accountant_online_payments_utils/` | Mock payload containing diverse transaction states. | `AccountantOnlinePaymentsConstants.ts` |

## Feature Inventory

| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Payment Transactions | `/accountant/online-payments` | View table of all gateway transactions | `AccountantOnlinePaymentsTable` | Mocked | ✅ Live |
| KPI Metrics | `/accountant/online-payments` | View total volume, success, failed, and refund summaries | `AccountantOnlinePaymentsMetrics` | Mocked | ✅ Live |
| Status Filters | `/accountant/online-payments` | Filter by Successful, Failed, Pending, Cancelled, Refunded | `AccountantOnlinePaymentsFilters` | Mocked | ✅ Live |
| Reconcile Filter | `/accountant/online-payments` | Filter by Reconciled, Mismatch, or Pending Recon | `AccountantOnlinePaymentsFilters` | Mocked | ✅ Live |
| Transaction Details | `/accountant/online-payments` | Click the Eye icon (or row) to view full gateway payload data | `AccountantOnlinePaymentModals` | Mocked | ✅ Live |
| Manual Reconcile | `/accountant/online-payments` | Click "Mark Reconciled" for mismatched or pending transactions | `AccountantOnlinePaymentModals` | Mocked | ✅ Live |
| Process Refund | `/accountant/online-payments` | Click "Process Refund", provide a reason, and initiate refund | `AccountantOnlinePaymentModals` | Mocked | ✅ Live |

## User Flows & Interactions

### Flow 1: Identify and Reconcile a Mismatch
1. User filters "Reconciliation" dropdown to "Mismatch".
2. Table shows transactions with discrepancies.
3. User clicks the transaction row to open the details modal.
4. User clicks the "Mark Reconciled" button (visible only if not already reconciled).
5. System simulates action with success alert.

### Flow 2: Process a Refund
1. User clicks on a 'Successful' transaction.
2. In the modal, a "Process Refund" button appears at the bottom left.
3. User clicks it; a new confirmation modal appears requiring a "Reason for Refund".
4. "Initiate Refund" button is disabled until the user types a reason.
5. User clicks "Initiate Refund", system simulates the refund request.

## Data and State Architecture

- **State pattern:** Zustand (`useAccountantOnlinePaymentsStore`).
- **Active Filtering:** The table actively evaluates three conditions in `AccountantOnlinePaymentsTable.tsx` against the Zustand state (`searchQuery`, `statusFilter`, `reconFilter`).

## Edge Cases and Rules Validated

- **Dynamic Modal Actions:** The "Process Refund" button only renders if `status === 'Successful'`. The "Mark Reconciled" button only renders if `reconciliationStatus !== 'Reconciled'`.
- **Row Clickability:** Users can click anywhere on the row to open details, enhancing UX.

## Rule Compliance Checklist

- [x] Rule 1: Micro-modularization — subfolders properly isolated.
- [x] Rule 2: Total Role Isolation — uses Accountant routing layout `/accountant/online-payments`.
- [x] Rule 4: Theme Independence — utilizes semantic tailwind colors for statuses (`text-success`, `text-danger`).
- [x] Rule 5: Smart State Management — Zustand handles nested modals efficiently.
