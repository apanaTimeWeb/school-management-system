# Accountant Cash Management — Feature Map

## Module Purpose
The Cash Management (Cash Book) module serves as a daily ledger for physical cash flows. It tracks Opening Cash, today's Collections (Inflow), today's Expenses (Outflow), and maintains a running Balance. It provides vital features for Cash Handover, Cash Closing Verification, and Printing a Daily Summary.

## Directory Structure

| Folder | Responsibility | Key Files |
|---|---|---|
| `accountant_cashbook_components/` | UI grid for the ledger table and interactive modals. | `AccountantCashbookMain.tsx`, `AccountantCashbookMetrics.tsx`, `AccountantCashbookActions.tsx`, `AccountantCashbookTable.tsx`, `AccountantCashbookModals.tsx` |
| `accountant_cashbook_store/` | Zustand state orchestrating modal popups (Closing, Handover). | `useAccountantCashbookStore.ts` |
| `accountant_cashbook_types/` | Data shapes mapping transaction types (Opening, Collection, Expense, Handover). | `AccountantCashbookTypes.ts` |
| `accountant_cashbook_utils/` | Mock payload demonstrating sequential transactions and balance. | `AccountantCashbookConstants.ts` |

## Feature Inventory

| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Cash Ledger Table | `/accountant/cashbook` | View chronological list of cash transactions | `AccountantCashbookTable` | Mocked | ✅ Live |
| KPI Metrics | `/accountant/cashbook` | View Opening, Inflow, Outflow, and Balance at a glance | `AccountantCashbookMetrics` | Mocked | ✅ Live |
| Cash Handover | `/accountant/cashbook` | Record physical handover to a bank/manager | `AccountantCashbookModals` | Mocked | ✅ Live |
| Close Register | `/accountant/cashbook` | Verify physical vs system cash and close day | `AccountantCashbookModals` | Mocked | ✅ Live |
| Daily Summary | `/accountant/cashbook` | Print summary with signature blocks | `AccountantCashbookModals` | Mocked | ✅ Live |

## User Flows & Interactions

### Flow 1: Close Register
1. User clicks the "Close Register" action button.
2. The modal displays the System Calculated Balance.
3. User manually counts the cash drawer and enters the physical amount.
4. The system calculates and displays the difference (Match / Difference).
5. User hits "Confirm & Close" to lock the day.

### Flow 2: Print Daily Summary
1. User clicks the "Daily Summary" action button.
2. A formal receipt-like modal appears summarizing opening, inflow, outflow, and net balance.
3. Signature blocks are presented for Accountant and Principal.
4. The "Print" button initiates the browser print dialog.

## Data and State Architecture

- **State pattern:** Zustand (`useAccountantCashbookStore`).
- **Data Modeling:** Transactions affect the running balance. Outflows are styled `text-danger`, Inflows `text-success`.

## Rule Compliance Checklist

- [x] Rule 1: Micro-modularization — organized in subfolders.
- [x] Rule 2: Total Role Isolation — limited to accountant's physical cash management scope.
- [x] Rule 4: Theme Independence — uses strict `primary`, `info`, `danger`, `success` colors for statuses and transactions.
- [x] Rule 5: Smart State Management — Zustand handles the 3 complex modals flawlessly.
