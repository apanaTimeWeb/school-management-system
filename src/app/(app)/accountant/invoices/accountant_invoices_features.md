# Accountant Invoices — Feature Map

## Module Purpose
The Invoices module enables the Accountant to generate requests for payment to students/parents. This is distinct from Receipts (which are proof of payment). Invoices track outstanding dues, provide a formal PDF, and support tax (GST) calculations.

## Directory Structure

| Folder | Responsibility | Key Files |
|---|---|---|
| `accountant_invoices_components/` | UI grid for the table, analytics, and modals. | `AccountantInvoicesMain.tsx`, `AccountantInvoicesMetrics.tsx`, `AccountantInvoicesActions.tsx`, `AccountantInvoicesTable.tsx`, `AccountantInvoicesModals.tsx` |
| `accountant_invoices_store/` | Zustand state orchestrating modal popups (Generate, View) and filtering. | `useAccountantInvoicesStore.ts` |
| `accountant_invoices_types/` | Data shapes mapping Invoice records, Fee line items, and statuses. | `AccountantInvoicesTypes.ts` |
| `accountant_invoices_utils/` | Mock payload demonstrating paid, unpaid, and overdue invoices. | `AccountantInvoicesConstants.ts` |

## Feature Inventory

| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Invoices Table | `/accountant/invoices` | View all generated invoices | `AccountantInvoicesTable` | Mocked | ✅ Live |
| KPI Metrics | `/accountant/invoices` | View Total Billed, Collected, Pending, Overdue totals | `AccountantInvoicesMetrics` | Mocked | ✅ Live |
| Generate Invoice | `/accountant/invoices` | Add line items, set due dates, add tax, generate | `AccountantInvoicesModals` | Mocked | ✅ Live |
| View/Print Invoice | `/accountant/invoices` | View formal A4 style invoice, Print, or Download PDF | `AccountantInvoicesModals` | Mocked | ✅ Live |

## User Flows & Interactions

### Flow 1: Generate Invoice
1. User clicks "Generate Invoice".
2. Modal opens. User types Student ID, selects Due Date.
3. User adds one or multiple "Fee Particulars" (e.g., Tuition Fee = ₹15,000, Transport = ₹2,000).
4. User optionally adds a Tax % (e.g. 5%).
5. System auto-calculates Subtotal and Total Amount.
6. User clicks "Generate & Save" to create the unpaid invoice.

### Flow 2: View and Print Invoice
1. User clicks the 'Eye' icon on any record in the table.
2. A large, beautifully formatted modal opens, resembling a physical paper invoice (white background, crisp borders).
3. The invoice shows School Details, Bill To Details, Line Items, Totals, and Status (Paid/Unpaid).
4. User clicks "Print" or "Download PDF".

## Data and State Architecture

- **State pattern:** Zustand (`useAccountantInvoicesStore`).
- **Dynamic Line Items:** The Generate modal maintains a local array state for fee items, allowing the user to add/remove rows dynamically before submission.
- **Math Logic:** `Subtotal = sum(items)`, `Tax = Subtotal * (Tax% / 100)`, `Total = Subtotal + Tax`.

## Rule Compliance Checklist

- [x] Rule 1: Micro-modularization — organized in subfolders.
- [x] Rule 2: Total Role Isolation — strictly limited to the Accountant role.
- [x] Rule 4: Theme Independence — PDF view explicitly overrides dark theme to look like white paper, while the main dashboard adheres to the global theme colors.
- [x] Rule 5: Smart State Management — Zustand handles modals gracefully.
