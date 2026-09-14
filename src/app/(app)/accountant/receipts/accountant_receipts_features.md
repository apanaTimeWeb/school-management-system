# Accountant Receipts — Feature Map

## Module Purpose
The Receipts module enables the accountant to manage the historical ledger of all generated fee receipts. Users can search through the history, preview a fully formatted digital receipt, reprint/download/email receipts, verify the authenticity of a receipt, and void/cancel erroneous receipts (which requires logging).

## Directory Structure

| Folder | Responsibility | Key Files |
|---|---|---|
| `accountant_receipts_components/` | All UI components for layout, search, table, and modal interactions. | `AccountantReceiptsMain.tsx`, `AccountantReceiptsSearch.tsx`, `AccountantReceiptsTable.tsx`, `AccountantReceiptsModals.tsx` |
| `accountant_receipts_store/` | Zustand store for managing modal states, active receipt, and search queries. | `useAccountantReceiptsStore.ts` |
| `accountant_receipts_types/` | Data interfaces for receipt records and statuses. | `AccountantReceiptsTypes.ts` |
| `accountant_receipts_utils/` | Mock data for receipts history and formatting tools. | `AccountantReceiptsConstants.ts` |

## Feature Inventory

| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Receipt History | `/accountant/receipts` | View a paginated table of all generated receipts | `AccountantReceiptsTable` | Mocked | ✅ Live |
| Receipt Search | `/accountant/receipts` | Search by Receipt No. or Student Name in real-time | `AccountantReceiptsSearch` | Mocked | ✅ Live |
| View/Preview | `/accountant/receipts` | Click the Eye icon to view a digital receipt preview | `AccountantReceiptsModals` | Mocked | ✅ Live |
| Reprint / PDF | `/accountant/receipts` | Buttons to Download PDF, Email, or Print the receipt | `AccountantReceiptsModals` | Mocked | ✅ Live |
| Cancel/Void | `/accountant/receipts` | Click "Void Receipt", provide a reason in the warning modal, and void it | `AccountantReceiptsModals` | Mocked | ✅ Live |
| Receipt Verification | `/accountant/receipts` | Click "Verify Receipt" to open a lookup tool for barcode/receipt number scanning | `AccountantReceiptsModals` | Mocked | ✅ Live |

## User Flows & Interactions

### Flow 1: Preview and Action on a Receipt
1. User clicks the Eye (View) icon on a receipt row in the table.
2. `useAccountantReceiptsStore.setSelectedReceipt(receipt)` is called, and `isReceiptModalOpen` set to true.
3. The large Receipt Preview modal appears, displaying a formatted digital invoice.
4. User clicks "Download PDF" -> Triggers simulated success action.

### Flow 2: Voiding a Receipt
1. Inside the Receipt Preview modal (for a 'Valid' receipt), user clicks "Cancel / Void Receipt".
2. `isVoidModalOpen` becomes true. A red warning modal appears asking for a reason.
3. User types a reason and clicks "Confirm Void".
4. Store successfully voids the receipt (simulated via an alert) and closes the modals.

### Flow 3: Verify Receipt
1. User clicks "Verify Receipt" at the top next to the search bar.
2. `isVerifyModalOpen` is set to true.
3. User enters a Receipt Number and clicks "Check System Status".
4. System returns the verification status (simulated via alert).

## Data and State Architecture

- **State pattern:** Zustand (`useAccountantReceiptsStore`).
- **State variables:** `searchQuery`, `selectedReceipt`, `isReceiptModalOpen`, `isVoidModalOpen`, `isVerifyModalOpen`.
- **Search implementation:** The table component actively filters the `MOCK_RECEIPTS_HISTORY` array based on `searchQuery` from the Zustand store.

## Edge Cases and Rules Validated

- **Voided Receipt Styling:** Voided receipts in the table have a strike-through on the payment method and reduced opacity. In the preview, a large watermarked "VOIDED" stamp appears.
- **Void Button Hiding:** The "Cancel / Void Receipt" button is hidden if the receipt is already voided.

## Rule Compliance Checklist

- [x] Rule 1: Micro-modularization — subfolders properly isolated.
- [x] Rule 2: Total Role Isolation — uses Accountant routing layout `/accountant/receipts`.
- [x] Rule 4: Theme Independence — utilizes var(--bg-card) etc via tailwind classes.
- [x] Rule 5: Smart State Management — Zustand handles the multi-step voiding process seamlessly.
- [x] Click Interactions Verified — All buttons trigger appropriate modals/tabs.
