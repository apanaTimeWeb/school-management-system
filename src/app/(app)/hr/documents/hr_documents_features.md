# Admin Employee Documents Module — Feature Map

## Module Purpose
The Employee Documents module acts as a secure, structured vault for tracking all employee paperwork (ID proofs, qualifications, contracts, etc.). It helps HR instantly see who is missing documents, verify uploaded files, and proactively catch expiring documents (e.g. contracts or clearance certificates) via alerts.

## Directory Structure
| Folder | Responsibility |
|---|---|
| `/admin/hr_documents/` | The core document interface, featuring the Vault grid, Alerts tab, and Deep Document Modal. |

## Feature Inventory
| Feature | Location | Status |
|---|---|---|
| **Document Vault** | Primary Tab (`HrDocumentsVault`) | ✅ INTERACTIVE |
| **Progress Tracker (Vault)** | Inside Vault Cards | ✅ INTERACTIVE (Auto-calculates Uploaded/Verified) |
| **Document Alerts** | Second Tab (`HrDocumentsAlerts`) | ✅ MOCKED |
| **Alert Badge Counter** | Top Tab Nav | ✅ INTERACTIVE (Shows exact count of alerts) |
| **Document Categories** | Inside Deep Modal | ✅ MOCKED (Categorized dynamically) |
| **Document Verification** | Inside Deep Modal (`HrDocumentsEmployeeModal`) | ✅ INTERACTIVE (Verify/Reject updates state instantly) |

## User Flows & Interactions
### Flow 1: Identifying Missing/Unverified Documents
1. Admin navigates to `/admin/hr_documents`.
2. The grid displays all employees. A dynamic Green/Orange progress bar shows document completion (e.g., 4/5 Verified).
3. If an employee has unverified documents, the progress bar is orange. If 100% complete, it's green.

### Flow 2: Verifying a Document
1. Admin clicks on an employee's card (e.g. *Amit Kumar*).
2. The premium **Document Vault Modal** opens. The modal dynamically groups documents into their categories (ID Proof, Address Proof, Contract, etc.).
3. Under "ID Proof", the Aadhar Card shows a yellow "Pending" badge.
4. **Interaction Check:** The Admin clicks the green **"Verify"** button. The document instantly updates: the badge turns to a green "Verified", and the Verify button disappears. 
5. Closing the modal updates the Vault Card progress bar on the main screen automatically.

### Flow 3: Managing Expiries (Alerts)
1. In the top nav bar, a Red badge next to "Alerts & Expiries" indicates urgent items (e.g., `4`).
2. Clicking the tab switches to the Alerts view.
3. Cards highlight specific documents that are "Expired", "Expiring Soon", or "Missing Critical", color-coded (Red for Expired, Yellow/Orange for Expiring Soon).

## Strict Rules Verification Check
- **Rule 4 (No Raw Variables):** Strictly mapped standard Tailwind colors (`text-danger`, `bg-warning/10`, `border-success/30`).
- **Rule 6 (Hooks Isolation):** `useHrDocuments` handles the complex state logic required to deeply update a specific document's verification status inside a nested employee array, keeping the JSX clean.
- **Rule 29 (Motion-Safe):** All tab switches, hovers, and deep modal popups utilize `motion-safe:animate-in`, `motion-safe:fade-in`, and `motion-safe:zoom-in-95` for an incredibly premium application feel.

