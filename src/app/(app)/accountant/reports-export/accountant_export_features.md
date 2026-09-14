# Accountant Reports Export — Feature Map

## Module Purpose
The Reports Export module acts as an advanced Data Export Hub. It allows the Accountant to construct highly specific queries using multiple filter vectors (Date, Class, Fee Type, Payment Method) and export the resulting datasets in various formats securely.

## Directory Structure

| Folder | Responsibility | Key Files |
|---|---|---|
| `accountant_export_components/` | The split UI: A complex builder form on the left, action buttons on the right, and an audit log table below. | `AccountantExportMain.tsx`, `AccountantExportBuilder.tsx`, `AccountantExportActions.tsx`, `AccountantExportHistory.tsx` |
| `accountant_export_store/` | Zustand state holding all the multi-select filter arrays and date strings. | `useAccountantExportStore.ts` |
| `accountant_export_types/` | Types for the Export History logs. | `AccountantExportTypes.ts` |
| `accountant_export_utils/` | Static lists for Classes, Fee Types, and Payment Methods. Mock History log. | `AccountantExportConstants.ts` |

## Feature Inventory

| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Filter Builder | `/accountant/reports-export` | Multi-select dates, classes, fees, methods | `AccountantExportBuilder` | Local State | ✅ Live |
| Export Actions | `/accountant/reports-export` | Click large buttons to export as PDF, Excel, CSV, or Print | `AccountantExportActions` | Mock Alert | ✅ Live |
| Audit Log (History) | `/accountant/reports-export` | View past exports, their status (Processing/Ready) and download them | `AccountantExportHistory` | Mocked | ✅ Live |

## User Flows & Interactions

### Flow 1: Build & Export Data
1. User navigates to Reports Export.
2. User selects "Start Date" and "End Date".
3. User selects specific classes (e.g. Class 10, Class 12). Selected classes get highlighted in primary color with a checkbox icon.
4. User selects "Tuition Fee" (highlights green).
5. User selects "Online" (highlights yellow).
6. User clicks the massive "Export as Excel" button on the right panel.
7. An alert simulates the system acknowledging the request with the specific payload of filters.

## Data and State Architecture

- **State pattern:** Zustand (`useAccountantExportStore`).
- **Array Toggles:** The store uses clean array manipulation to toggle values in `selectedClasses`, `selectedFeeTypes`, and `selectedMethods`.

## Rule Compliance Checklist

- [x] Rule 1: Micro-modularization — organized in subfolders.
- [x] Rule 2: Total Role Isolation — strictly limited to the Accountant role.
- [x] Rule 4: Theme Independence — Leverages specific semantic colors (`success` for Excel, `danger` for PDF, `primary` for CSV) to make the action panel visually striking and intuitive.
- [x] Rule 5: Smart State Management — Zustand handles the complex multi-selects perfectly.
