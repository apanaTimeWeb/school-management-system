# Accountant Documents — Feature Map

## Module Purpose
The Documents module acts as a central repository for the Accountant to store, organize, and view financial attachments like Bills, Invoices, Payment Proofs, Cheque Images, and Refund Documents.

## Directory Structure

| Folder | Responsibility | Key Files |
|---|---|---|
| `accountant_documents_components/` | Stats cards, Action bar, Document Table, and Modals for Uploading and Viewing files. | `AccountantDocumentsMain.tsx`, `AccountantDocumentsStats.tsx`, `AccountantDocumentsTable.tsx`, `AccountantDocumentsModals.tsx` |
| `accountant_documents_store/` | Zustand state orchestrating modal popups (Upload and View) and search/category filters. | `useAccountantDocumentsStore.ts` |
| `accountant_documents_types/` | Data shapes mapping file categories and document structures. | `AccountantDocumentsTypes.ts` |
| `accountant_documents_utils/` | Mock payload demonstrating the file system. | `AccountantDocumentsConstants.ts` |

## Feature Inventory

| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Storage Dashboard | `/accountant/documents` | View KPIs (Total Storage, File Counts) | `AccountantDocumentsStats` | Mocked | ✅ Live |
| File Action Bar | `/accountant/documents` | Filter by File Category and open Upload modal | `AccountantDocumentsActions` | Local State | ✅ Live |
| Document Explorer | `/accountant/documents` | View list of files with format icons, reference IDs, and action buttons | `AccountantDocumentsTable` | Mocked | ✅ Live |
| Upload & View Modals | `/accountant/documents` | Simulate file upload (Drag & Drop) or preview a selected file | `AccountantDocumentsModals` | Mock Alert | ✅ Live |

## User Flows & Interactions

### Flow 1: Upload a new Bill
1. User clicks 'Upload Document'.
2. The Upload Modal opens with a Drag & Drop zone.
3. User selects "Bills" from Category and adds tags "Utility, March".
4. User clicks 'Upload File'.

### Flow 2: Preview a Document
1. User clicks on the file name "Cheque_Rahul_HDFC.jpg" in the table (or the eye icon).
2. The View Modal opens, simulating an image viewer.
3. User can click "Download" or close the viewer.

## Data and State Architecture

- **State pattern:** Zustand (`useAccountantDocumentsStore`).

## Rule Compliance Checklist

- [x] Rule 1: Micro-modularization — organized in subfolders.
- [x] Rule 2: Total Role Isolation — strictly limited to the accountant folder.
- [x] Rule 4: Theme Independence — Leverages `primary` for global actions, and uses color-coded format icons (`danger` for PDF, `info` for Images, `success` for Excel).
- [x] Rule 5: Smart State Management — Zustand handles the modal and selected file state cleanly.
