# Admin Employee Transfer & Promotion — Feature Map

## Module Purpose
The Transfer & Promotion module manages internal mobility. It handles Department Transfers, Designation Changes, Promotions, Demotions, and Campus Transfers. It provides a formal approval pipeline and historical tracking of all role changes.

## Directory Structure
| Folder | Responsibility |
|---|---|
| `/admin/hr_transfer_promotion/` | The core interface for managing role change requests and viewing transfer history. |

## Feature Inventory
| Feature | Location | Status |
|---|---|---|
| **Initiate Request Modal** | Deep Modal (`AdminHrTransferInitiateModal`) | ✅ INTERACTIVE |
| **Department Transfer** | Request Type Option | ✅ IMPLEMENTED |
| **Designation Change** | Request Type Option | ✅ IMPLEMENTED |
| **Promotion / Demotion** | Request Type Option | ✅ IMPLEMENTED |
| **Branch/Campus Transfer** | Request Type Option | ✅ IMPLEMENTED |
| **Requests Pipeline Table** | Primary Tab (`AdminHrTransferRequests`) | ✅ INTERACTIVE |
| **Approval / Rejection Flow** | Inside Pipeline Table | ✅ INTERACTIVE (Hover actions update state instantly) |
| **Transfer History** | Second Tab (`AdminHrTransferHistory`) | ✅ IMPLEMENTED |

## User Flows & Interactions
### Flow 1: Initiating a Transfer / Promotion
1. Admin navigates to `/admin/hr_transfer_promotion`.
2. Admin clicks the primary **"Initiate Request"** button in the top navigation.
3. **Interaction (Form):** A sleek modal opens. Admin inputs the employee's name, selects the type (e.g. Promotion), and inputs the Current Value (e.g. Teacher) and Proposed Value (e.g. Senior Teacher).
4. **Interaction (Submit):** Clicking "Submit Request" closes the modal, triggers a success alert, and instantly injects the new request at the top of the **Active Requests** pipeline table with a status of "Pending Approval".

### Flow 2: Approving a Request
1. In the **Active Requests** tab, the Admin sees a list of pending transfers.
2. **Interaction (Approval Actions):** When hovering over a row that is "Pending Approval", interactive Green (Approve) and Red (Reject) buttons fade in.
3. Clicking **Approve** instantly changes the request status. The action buttons disappear and are replaced by a solid green "Approved" badge, confirming the effective date and details.

## Strict Rules Verification Check
- **Rule 4 (No Raw Variables):** Strictly mapped standard Tailwind colors (`text-success`, `bg-danger/10`, `border-primary`). Zero `[var(...)]` CSS variables were used.
- **Rule 6 (Hooks Isolation):** `useAdminHrTransfer` houses all the logic for updating row statuses, form submission, and appending mock data.
- **Rule 29 (Motion-Safe):** Hover actions, tab switches, and the initiate modal all utilize `motion-safe:animate-in`, `opacity-0 group-hover:opacity-100`, and `transition-all` for a deeply premium interactive experience.
