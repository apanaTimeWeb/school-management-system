# Hr Reports Module — Feature Map

## Module Purpose
The HR Reports module is a centralized analytics hub that fulfills all 15 report types requested in the checklist. It provides a beautiful grid of report cards, categorized logically, and a deep interactive viewer to configure filters and generate tabular data.

## Directory Structure
| Folder | Responsibility |
|---|---|
| `/admin/hr_reports/` | Contains the Report Cards grid, the RBAC toggler, and the dynamic Viewer Modal. |

## Feature Inventory
| Feature | Location | Status |
|---|---|---|
| **15 Report Types Grid** | Main Dashboard (`HrReportCards`) | ✅ IMPLEMENTED |
| **Category Grouping** | Inside Cards Component | ✅ VISUAL (Demographics, Lifecycle, etc.) |
| **RBAC Security Toggle** | Main Dashboard (`HrReportsMain`) | ✅ INTERACTIVE |
| **Deep Viewer Modal**| Modal Component (`HrReportViewerModal`) | ✅ INTERACTIVE |
| **Dynamic Table Columns** | Inside Viewer Modal | ✅ DYNAMIC (Based on report type) |
| **Generation Loading State** | Inside Viewer Modal | ✅ VISUAL (`animate-spin`) |

## User Flows & Interactions
### Flow 1: Interacting with RBAC (Payroll Report)
1. Admin navigates to `/admin/hr_reports`.
2. By default, the `Payment & Payroll Authority` toggle at the top is OFF.
3. If Admin clicks on the **Payroll Report** card (under Performance & Pay), an access denied `alert()` fires.
4. **Interaction:** Admin toggles the RBAC switch to ON. The lock icon on the Payroll card instantly turns into a green Unlock icon.
5. Clicking the Payroll card now successfully opens the viewer modal.

### Flow 2: Generating a Report
1. Admin clicks on any report card (e.g., **Document Expiry Report**).
2. The Deep Viewer Modal opens. The table area shows a placeholder: "Ready to Generate".
3. Admin adjusts the From/To Date and Department filters.
4. **Interaction:** Admin clicks **"Run Report"**.
5. The button shows a spinning loader and says "Generating...". A large spinner also appears over the table area.
6. After a simulated network delay (800ms), the data populates. The table headers dynamically adapt to the report type (e.g. showing "Document Type" and "Expiry Date" specifically for the Expiry report).

## Strict Rules Verification Check
- **Rule 4 (No Raw Variables):** Fully compliant. Card backgrounds use `bg-primary/5 hover:bg-primary/10`, and category icons are styled strictly with Tailwind text colors (`text-info`, `text-warning`).
- **Rule 6 (Hooks Isolation):** `useHrReports` cleanly separates the filter state, loading state, and the RBAC `hasPaymentAuthority` state away from the JSX.

