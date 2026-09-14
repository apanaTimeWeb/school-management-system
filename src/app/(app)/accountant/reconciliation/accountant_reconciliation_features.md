# Accountant Reconciliation — Feature Map

## Module Purpose
The Reconciliation module allows the Accountant to match transactions recorded in the School ERP with external sources (Payment Gateway, Bank Statements, and Physical Cash Counts). It highlights missing entries, unmatched amounts (variances), and duplicates, offering tools to resolve discrepancies.

## Directory Structure

| Folder | Responsibility | Key Files |
|---|---|---|
| `accountant_reconciliation_components/` | UI grid for the interactive table, KPI metrics, and resolution modals. | `AccountantReconMain.tsx`, `AccountantReconTabs.tsx`, `AccountantReconMetrics.tsx`, `AccountantReconTable.tsx`, `AccountantReconModals.tsx` |
| `accountant_reconciliation_store/` | Zustand state orchestrating modal popups and filtering logic. | `useAccountantReconStore.ts` |
| `accountant_reconciliation_types/` | Data shapes mapping transaction categories and statuses. | `AccountantReconTypes.ts` |
| `accountant_reconciliation_utils/` | Mock payload demonstrating matched, unmatched, and duplicate transactions. | `AccountantReconConstants.ts` |

## Feature Inventory

| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Recon Dashboard | `/accountant/reconciliation` | View counts of matched, unmatched, duplicate TXNs | `AccountantReconMetrics` | Mocked | ✅ Live |
| Category Tabs | `/accountant/reconciliation` | Filter list by All, Gateway, Bank, Cash | `AccountantReconTabs` | Mocked | ✅ Live |
| Discrepancy Table | `/accountant/reconciliation` | Compare ERP Amount vs Source Amount side-by-side | `AccountantReconTable` | Mocked | ✅ Live |
| Match TXN | `/accountant/reconciliation` | Approve a perfectly matching transaction | `AccountantReconModals` | Mocked | ✅ Live |
| Resolve Discrepancy | `/accountant/reconciliation` | Handle unmatched amounts via Gateway Fee / ERP Adjustments | `AccountantReconModals` | Mocked | ✅ Live |

## User Flows & Interactions

### Flow 1: Match a Pending Transaction
1. The table highlights transactions where Variance is 0.
2. User clicks 'Resolve' on a pending match.
3. The "Match Details" modal opens, confirming exact amounts on both sides.
4. User clicks "Mark as Matched".
5. Status changes to "Matched" with a green checkmark icon.

### Flow 2: Resolve a Discrepancy (e.g. Gateway Fee)
1. User clicks 'Resolve' on an Unmatched transaction (e.g. ERP expects ₹25,000 but Source got ₹24,500 due to a payment gateway fee).
2. The "Resolve Discrepancy" modal highlights the ₹-500 variance in red.
3. User selects a "Resolution Action" from the dropdown (e.g., "Mark Variance as Gateway Fee").
4. User types Audit Remarks ("Razorpay 2% deduction").
5. User clicks "Resolve & Match".

## Data and State Architecture

- **State pattern:** Zustand (`useAccountantReconStore`).
- **Mathematical Validation:** `Variance = Source Amount - ERP Amount`. 
  - Negative variance means the school received less than expected.
  - Zero variance implies a perfect match.

## Rule Compliance Checklist

- [x] Rule 1: Micro-modularization — organized in subfolders.
- [x] Rule 2: Total Role Isolation — limited to accountant's reconciliation scope.
- [x] Rule 4: Theme Independence — strict styling (`success` for matched/0 variance, `danger` for unmatched/negative variance).
- [x] Rule 5: Smart State Management — Zustand handles the dual modals flawlessly.
