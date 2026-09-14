# Accountant Bank & Transaction Records — Feature Map

## Module Purpose
The Bank Records module serves as the primary interface for managing non-cash collections (Cheques, Bank Transfers/NEFT, UPI). Accountants use this module to track clearance statuses, log bounced cheques with penalty fees, and perform Bank Reconciliation against physical bank statements.

## Directory Structure

| Folder | Responsibility | Key Files |
|---|---|---|
| `accountant_bank_components/` | UI logic for the interactive ledger, metrics, and modals. | `AccountantBankMain.tsx`, `AccountantBankMetrics.tsx`, `AccountantBankFilters.tsx`, `AccountantBankTable.tsx`, `AccountantBankModals.tsx` |
| `accountant_bank_store/` | Zustand state orchestrating modal popups (Update Status, Reconcile). | `useAccountantBankStore.ts` |
| `accountant_bank_types/` | Data shapes mapping transaction types (Cheque, NEFT) and clearance statuses. | `AccountantBankTypes.ts` |
| `accountant_bank_utils/` | Mock payload demonstrating sequential transactions and various statuses. | `AccountantBankConstants.ts` |

## Feature Inventory

| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Bank Records Ledger | `/accountant/bank-records` | View list of bank-related transactions | `AccountantBankTable` | Mocked | ✅ Live |
| KPI Metrics | `/accountant/bank-records` | View Pending/Cleared/Bounced cheques at a glance | `AccountantBankMetrics` | Mocked | ✅ Live |
| Update Status | `/accountant/bank-records` | Mark a cheque as 'Cleared' or 'Bounced' (with Penalty) | `AccountantBankModals` | Mocked | ✅ Live |
| Bank Reconciliation | `/accountant/bank-records` | Match physical statement balance against system | `AccountantBankModals` | Mocked | ✅ Live |

## User Flows & Interactions

### Flow 1: Mark Cheque as Bounced
1. User identifies a "Pending Clearance" cheque in the table and clicks the 'Edit' icon.
2. The modal displays transaction details.
3. User selects "Bounced / Rejected" from the New Status dropdown.
4. An additional input field appears: "Cheque Bounce Penalty Fee (₹)".
5. User enters the penalty (e.g. ₹500) and remarks.
6. Hitting "Mark as Bounced" applies the penalty to the student's ledger (simulated).

### Flow 2: Bank Reconciliation
1. User clicks the "Bank Reconciliation" button in the filter header.
2. A modal displays the System's Calculated Bank Balance (e.g. ₹1,250,000).
3. User enters the balance shown in their physical Bank Statement.
4. The system calculates and displays if it's a Match or a Difference (in Red or Green).
5. User hits "Mark Reconciled" to save the status.

## Data and State Architecture

- **State pattern:** Zustand (`useAccountantBankStore`).
- **Dynamic Action Icons:** In the table, the 'Edit' icon is ONLY available if the transaction is in "Pending Clearance" status. Otherwise, only the "Eye" (View) icon is shown.

## Rule Compliance Checklist

- [x] Rule 1: Micro-modularization — organized in subfolders.
- [x] Rule 2: Total Role Isolation — limited to accountant's bank tracking scope.
- [x] Rule 4: Theme Independence — uses strict `primary`, `info`, `danger`, `success`, `warning` colors for statuses.
- [x] Rule 5: Smart State Management — Zustand handles the 3 complex modals flawlessly.
