# Accountant Income & Receipts — Feature Map

## Module Purpose
The Income module tracks all inbound money (Admissions, Tuition, Transport, Library Fines, Miscellaneous). It provides a unified ledger for the accountant to record, filter, and track realized vs pending income (like cheques waiting for clearance).

## Directory Structure

| Folder | Responsibility | Key Files |
|---|---|---|
| `accountant_income_components/` | UI logic for recording income, applying multi-filters, and timeline view. | `AccountantIncomeMain.tsx`, `AccountantIncomeMetrics.tsx`, `AccountantIncomeFilters.tsx`, `AccountantIncomeTable.tsx`, `AccountantIncomeModals.tsx` |
| `accountant_income_store/` | Zustand state orchestrating modal popups and filtering logic. | `useAccountantIncomeStore.ts` |
| `accountant_income_types/` | Data shapes mapping standard income categories and clearance statuses. | `AccountantIncomeTypes.ts` |
| `accountant_income_utils/` | Mock payload demonstrating diverse categories and statuses (e.g. Bounced cheque). | `AccountantIncomeConstants.ts` |

## Feature Inventory

| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Income Ledger List | `/accountant/income` | View table of all school income | `AccountantIncomeTable` | Mocked | ✅ Live |
| Category Filters | `/accountant/income` | Filter by Admission, Tuition, Transport, etc. | `AccountantIncomeFilters` | Mocked | ✅ Live |
| KPI Metrics | `/accountant/income` | Track Total booked vs Realized, Bounced limits | `AccountantIncomeMetrics` | Mocked | ✅ Live |
| Record Income | `/accountant/income` | Log new money coming in with Ref numbers | `AccountantIncomeModals` | Mocked | ✅ Live |
| View Receipt Details | `/accountant/income` | Audit clearance status and print receipt mockup | `AccountantIncomeModals` | Mocked | ✅ Live |

## User Flows & Interactions

### Flow 1: Record Miscellaneous Income
1. User clicks the "Record Income" button.
2. A modal appears to enter Source (e.g. "Scrap Vendor"), Category (e.g. "Miscellaneous Income"), Amount, Payment Method, Date, and any Reference ID.
3. User hits "Save Receipt".
4. The system logs it as "Realized" or "Pending Clearance" depending on the payment method (logic would be handled backend, frontend simulates success).

### Flow 2: View Cheque Status Timeline
1. User clicks the "Eye" icon on a "Bounced" or "Pending Clearance" entry in the table.
2. The modal displays top-level context (Source, Date, Amount, Payment Method, TXN ID).
3. The timeline visually shows the realization status (Green tick for Realized, Red X for Bounced, Yellow clock for Pending).

## Rule Compliance Checklist

- [x] Rule 1: Micro-modularization — organized in subfolders.
- [x] Rule 2: Total Role Isolation — limited to logging income.
- [x] Rule 4: Theme Independence — uses strict `primary`, `info`, `danger`, `success`, `warning` colors for statuses.
- [x] Rule 5: Smart State Management — Zustand filters by category and status flawlessly.
