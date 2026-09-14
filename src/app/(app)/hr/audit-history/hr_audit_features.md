# Hr Audit Module — Feature Map

## Module Purpose
The Audit & History module securely logs the 10 sensitive actions specified in the checklist (Employee Created/Updated, Salary changes, Terminations, etc.). It features a powerful "Diff Viewer" to prove transparency by showing exactly what changed, who changed it, and when.

## Directory Structure
| Folder | Responsibility |
|---|---|
| `/admin/hr_audit/` | Houses the Filter Bar, the Master Secure Log Table, and the Deep Diff Viewer Modal. |

## Feature Inventory
| Feature | Location | Status |
|---|---|---|
| **Secure Log Table** | `HrAuditList` | ✅ IMPLEMENTED |
| **Search by Target / Admin** | `HrAuditFilters` | ✅ IMPLEMENTED |
| **Filter by Action Type (10 Items)** | `HrAuditFilters` | ✅ IMPLEMENTED |
| **Filter by Date Range** | `HrAuditFilters` | ✅ IMPLEMENTED |
| **Action Color Badges** | Inside Table | ✅ IMPLEMENTED (Red for Salary/Exit, Green/Blue for others) |
| **Deep Diff Viewer Modal**| `HrAuditDiffModal` | ✅ INTERACTIVE |
| **Before / After JSON Diffs** | Inside Diff Modal | ✅ IMPLEMENTED |

## User Flows & Interactions
### Flow 1: Identifying Sensitive Actions
1. Admin navigates to `/admin/hr_audit`.
2. The master log is presented chronologically.
3. The Admin can instantly spot highly sensitive actions (like "Salary Data Changed" or "Exit") because their badges are explicitly styled with `bg-danger/10 text-danger`. Regular actions (like "Leave Approved") are styled with `bg-info/10 text-info`.
4. The Admin changes the "Action Type" dropdown to "Salary Data Changed". The table debounces and updates to show only salary changes.

### Flow 2: Inspecting the Diff
1. Admin clicks **"Inspect Diff"** on a "Salary Data Changed" row.
2. **Interaction (Diff Modal):** A wide modal opens.
3. The top section shows critical Metadata: Exact Timestamp, IP Address of the user who made the change, the Performer's name/email, and the Target Employee's name/ID.
4. The bottom section shows a developer-style **State Change Diff**. It clearly displays:
   - `- Before (bg-danger/5): ₹ 45,000`
   - `+ After (bg-success/5): ₹ 52,000`
5. This fulfills the absolute requirement of tracking exactly what a sensitive action entails.

## Strict Rules Verification Check
- **Rule 4 (No Raw Variables):** Fully compliant. Status badges use standard Tailwind color opacities (`bg-danger/10 text-danger`). The diff viewer uses `bg-danger/5` for deletions and `bg-success/5` for additions.
- **Rule 6 (Hooks Isolation):** `useHrAudit` manages the filter states, debounced API simulated call, and modal states cleanly away from the UI.

