# Admin Employee Assets Module — Feature Map

## Module Purpose
The Employee Assets module tracks all physical inventory (Laptops, Uniforms, Keys, Equipment, ID Cards) assigned to staff members. It manages the lifecycle from "Assigned" to "Returned", "Damaged", or "Lost".

## Directory Structure
| Folder | Responsibility |
|---|---|
| `/admin/hr_assets/` | Houses the master list for active assets and a history tab for past records, alongside the deep modal for status updates. |

## Feature Inventory
| Feature | Location | Status |
|---|---|---|
| **Active Assets Tracker** | Primary Tab (`AdminHrAssetsList`) | ✅ IMPLEMENTED |
| **Asset History Tracker** | Secondary Tab (`AdminHrAssetsList`) | ✅ IMPLEMENTED |
| **Asset Status Badges** | Inside Table | ✅ DYNAMIC (Assigned, Returned, Damaged, Lost) |
| **Asset Allocation Editor**| Deep Modal (`AdminHrAssetModal`) | ✅ INTERACTIVE |
| **Lifecycle Dates Logic** | Inside Modal | ✅ IMPLEMENTED (Issue, Return Due, Actual Return) |

## User Flows & Interactions
### Flow 1: Assigning a New Asset
1. Admin navigates to `/admin/hr_assets`.
2. Admin clicks **"Assign New Asset"**.
3. **Interaction (Deep Form):** A modal opens allowing the Admin to enter Employee details and select an Asset Category (Laptop, ID Card, Uniform, etc.).
4. The status is locked to "Assigned" by default for new creations.

### Flow 2: Returning / Updating an Asset Status
1. Admin clicks **"Update / Return"** on an actively assigned laptop.
2. The modal opens in Edit Mode.
3. **Interaction (Status Logic):** The Admin changes the status dropdown from `Assigned` to `Returned` (or `Damaged`).
4. **Interaction (Auto-fill Date):** The system automatically populates the `Actual Date (Returned/Lost/Damaged)` field with today's date (if it was previously empty) and displays the red date picker UI block.
5. Admin clicks **"Save Asset Details"**.
6. **Interaction (State Lift):** The asset is removed from the "Active Asset Allocation" tab and is now permanently logged under the "Asset Tracking History" tab.

### Flow 3: Viewing History (Read-Only Mode)
1. Admin switches to the **"Asset Tracking History"** tab.
2. Admin clicks **"View Details"** on a past record.
3. **Interaction (Read-Only):** The modal opens, but all inputs are `disabled`. A small `Read Only History` badge appears at the top. The Admin can only read the past notes but cannot edit the historical record.

## Strict Rules Verification Check
- **Rule 4 (No Raw Variables):** Strictly mapped standard Tailwind colors. Status badges use `bg-info/10 text-info`, `bg-warning/10 text-warning`, etc.
- **Rule 6 (Hooks Isolation):** `useAdminHrAssets` handles the array filtering. Instead of duplicating the List component for History and Active, the same `AdminHrAssetsList` is reused and simply fed filtered data from the hook based on `activeTab`.
