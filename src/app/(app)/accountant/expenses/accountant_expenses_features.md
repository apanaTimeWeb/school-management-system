# Accountant Expenses Management — Feature Map

## Module Purpose
The Expense Management module empowers the accountant to record school outflows (Electricity, Utilities, Maintenance, etc.). Every new expense request flows through an approval cycle (Pending Approval -> Approved -> Paid). Receipts/Bills can be attached.

## Directory Structure

| Folder | Responsibility | Key Files |
|---|---|---|
| `accountant_expenses_components/` | UI logic for expense creation, filtering, and timeline audit. | `AccountantExpensesMain.tsx`, `AccountantExpensesMetrics.tsx`, `AccountantExpensesFilters.tsx`, `AccountantExpensesTable.tsx`, `AccountantExpensesModals.tsx` |
| `accountant_expenses_store/` | Zustand state orchestrating modal popups (Create/View) and multi-filters. | `useAccountantExpensesStore.ts` |
| `accountant_expenses_types/` | Data shapes mapping standard expense records. | `AccountantExpensesTypes.ts` |
| `accountant_expenses_utils/` | Mock payload demonstrating diverse categories and statuses. | `AccountantExpensesConstants.ts` |

## Feature Inventory

| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Expense List | `/accountant/expenses` | View table of all school expenses | `AccountantExpensesTable` | Mocked | ✅ Live |
| Category Filters | `/accountant/expenses` | Filter out Utilities, Salaries, Maintenance | `AccountantExpensesFilters` | Mocked | ✅ Live |
| KPI Metrics | `/accountant/expenses` | Track YTD Expenses, Approved Unpaid limits | `AccountantExpensesMetrics` | Mocked | ✅ Live |
| Add New Expense | `/accountant/expenses` | Input details, upload bill | `AccountantExpensesModals` | Mocked | ✅ Live |
| Expense History | `/accountant/expenses` | Audit approval timestamps and view attached invoice | `AccountantExpensesModals` | Mocked | ✅ Live |

## User Flows & Interactions

### Flow 1: Log a New Expense
1. User clicks the "New Expense" button.
2. A comprehensive modal appears with Vendor, Amount, Category, Date, Bill Ref, and an Attachment drag-drop zone.
3. User fills it out and hits "Submit for Approval".
4. The expense is lodged with `Pending Approval` status.

### Flow 2: Review Expense Approval Timeline
1. User clicks the "Eye" icon on an existing expense in the table.
2. The modal displays top-level context (Vendor, Date, Amount, Payment Method, Bill Ref).
3. If an attachment exists, a clickable "View Invoice" link appears.
4. The timeline visually tracks when the expense was logged, when it was approved by the Principal, and when the payment was ultimately marked as Paid.

## Data and State Architecture

- **State pattern:** Zustand (`useAccountantExpensesStore`).
- **File Handling UI:** The "Upload Attachment" area visually simulates file dropping without real backend IO.

## Rule Compliance Checklist

- [x] Rule 1: Micro-modularization — subfolders perfectly organized.
- [x] Rule 2: Total Role Isolation — limited to logging expenses, waiting for Admin approval.
- [x] Rule 4: Theme Independence — uses strict `primary`, `info`, `danger`, `success` mapping.
- [x] Rule 5: Smart State Management — Zustand filters by category and status flawlessly.
