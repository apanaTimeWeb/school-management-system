# Accountant Global Finance Search — Feature Map

## Module Purpose
The Omni-Search module provides a single, massive search interface to quickly find any financial record. It searches across Students, Receipts, Invoices, and Transactions by querying IDs, Names, References, Dates, or Amounts.

## Directory Structure

| Folder | Responsibility | Key Files |
|---|---|---|
| `accountant_search_components/` | The massive search box, filtering pills, results list, and detailed view modal. | `AccountantSearchMain.tsx`, `AccountantSearchBox.tsx`, `AccountantSearchResults.tsx`, `AccountantSearchModals.tsx` |
| `accountant_search_store/` | Zustand state managing search query and entity filters. | `useAccountantSearchStore.ts` |
| `accountant_search_types/` | Data shapes mapping 'Student', 'Receipt', 'Invoice', 'Transaction'. | `AccountantSearchTypes.ts` |
| `accountant_search_utils/` | Mock payload demonstrating cross-entity search results. | `AccountantSearchConstants.ts` |

## Feature Inventory

| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Omni-Search Bar | `/accountant/global-search` | Type anything (e.g. "Rahul", "REC-901", "50000") to get instant results | `AccountantSearchBox` | Mocked | ✅ Live |
| Entity Filters | `/accountant/global-search` | Click pills (All, Students, Receipts, etc.) to narrow down results | `AccountantSearchBox` | Local State | ✅ Live |
| Results View | `/accountant/global-search` | View a rich list of matching items with context, status, and amount | `AccountantSearchResults` | Mocked | ✅ Live |
| Detailed Modal | `/accountant/global-search` | Click any result to view full details (Date, Ref, Status, Amount) | `AccountantSearchModals` | Mock Data | ✅ Live |

## User Flows & Interactions

### Flow 1: Global Search for a Receipt
1. User navigates to Omni-Search (right below Dashboard).
2. User types "REC-901" in the massive input field.
3. The results immediately filter to show "Receipt: Fee Collection - Sneha Reddy".
4. User clicks the result row.
5. The Record Details modal opens, showing the ₹8,500 amount, "Paid" status, "Online (Razorpay)" reference, and "Transport and Library fees paid" details.

## Data and State Architecture

- **State pattern:** Zustand (`useAccountantSearchStore`).
- **Unified Schema:** The results map different database models to a single `GlobalSearchResult` interface with generic fields like `title`, `details`, and `reference`.

## Rule Compliance Checklist

- [x] Rule 1: Micro-modularization — organized in subfolders.
- [x] Rule 2: Total Role Isolation — strictly limited to the accountant folder.
- [x] Rule 4: Theme Independence — High visual impact search bar using standard `bg-bg-input` and `border-primary`. Status colors (`success`, `warning`, `danger`) dynamically applied.
- [x] Rule 5: Smart State Management — Zustand handles the real-time search filtering logic.
