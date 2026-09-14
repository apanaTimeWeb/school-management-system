# Accountant Financial Reports — Feature Map

## Module Purpose
The Financial Reports module is a central hub for generating and exporting analytics across 16 different criteria requested by the user. It covers everything from Daily Collections to Expense logs and Bank Reconciliations.

## Directory Structure

| Folder | Responsibility | Key Files |
|---|---|---|
| `accountant_reports_components/` | UI grid for all 16 reports and the generation/preview modals. | `AccountantReportsMain.tsx`, `AccountantReportsGrid.tsx`, `AccountantReportsModals.tsx` |
| `accountant_reports_store/` | Zustand state orchestrating modal flow (Config -> Preview). | `useAccountantReportsStore.ts` |
| `accountant_reports_types/` | Data shapes mapping Report Categories and Definitions. | `AccountantReportsTypes.ts` |
| `accountant_reports_utils/` | Mock payload containing the 16 requested reports mapping. | `AccountantReportsConstants.ts` |

## Feature Inventory

| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Reports Grid | `/accountant/financial-reports` | Browse 16 report types categorized cleanly | `AccountantReportsGrid` | Mocked | ✅ Live |
| Category Filtering | `/accountant/financial-reports` | Filter grid by 'Collection', 'Dues', 'Banking' | `AccountantReportsGrid` | Mocked | ✅ Live |
| Parameter Selection | `/accountant/financial-reports` | Click a card to open a modal and select Date Ranges & Export Format | `AccountantReportsModals` | Mocked | ✅ Live |
| Report Preview | `/accountant/financial-reports` | View the generated report data in a formal table | `AccountantReportsModals` | Mocked | ✅ Live |

## User Flows & Interactions

### Flow 1: Generate a Report
1. User clicks "Daily Collection" on the grid.
2. The "Report Parameters" modal opens.
3. User selects a Date Range and export format (PDF/Excel/CSV).
4. User clicks "Generate Report".
5. The Config modal closes, and a large "Preview" modal opens showing the data in a tabular format, along with Grand Totals.
6. User can click "Download" or "Print" from the Preview modal.

## Data and State Architecture

- **State pattern:** Zustand (`useAccountantReportsStore`).
- **Modal Chaining:** The module handles a flow where `isGeneratorModalOpen` handles parameter selection, which upon submit triggers `isPreviewModalOpen`.

## Rule Compliance Checklist

- [x] Rule 1: Micro-modularization — organized in subfolders.
- [x] Rule 2: Total Role Isolation — strictly limited to the Accountant role.
- [x] Rule 4: Theme Independence — High contrast interactive grid with distinct icons.
- [x] Rule 5: Smart State Management — Zustand handles the modal chaining natively.
