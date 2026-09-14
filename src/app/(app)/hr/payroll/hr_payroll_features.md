# Admin Payroll Data Module — Feature Map

## Module Purpose
The Payroll module (Permission Based) handles the monthly salary cycle. It allows authorized HR/Admin staff to view salary structures, verify components (Allowances vs Deductions), mark payroll as Processed or On Hold, and conditionally generate PDF Payslips.

## Directory Structure
| Folder | Responsibility |
|---|---|
| `/admin/hr_payroll/` | Core interface for processing salaries and tracking payroll status for a given period (e.g. August 2024). |

## Feature Inventory
| Feature | Location | Status |
|---|---|---|
| **Payroll Pipeline Table** | Primary Tab (`HrPayrollList`) | ✅ INTERACTIVE |
| **Salary Structure Breakdown** | Deep Modal (`HrPayrollDetailModal`) | ✅ IMPLEMENTED |
| **Earnings & Deductions** | Inside Deep Modal | ✅ IMPLEMENTED (Color coded calculations) |
| **Payroll Processing Action** | Inside Deep Modal | ✅ INTERACTIVE (Triggers state update) |
| **Payslip Generation** | Inside Deep Modal | ✅ INTERACTIVE (Unlocks upon Processing) |
| **Payroll Reports Tab** | Second Tab (`HrPayrollReports`) | ✅ MOCKED UI |

## User Flows & Interactions
### Flow 1: Reviewing Salary Structure
1. Admin navigates to `/admin/hr_payroll`.
2. A table shows all employees, their gross salary, net payout, and current status for "August 2024".
3. Clicking on an employee (e.g., *Priya Sharma*) opens a deep Modal.
4. **Interaction (Breakdown):** The left side of the modal beautifully details the Basic Salary, positive Earnings (+ ₹X), and negative Deductions (- ₹X, highlighted in red), resulting in a massive Green **Net Payout** figure at the bottom.

### Flow 2: Processing Payroll & Payslip
1. In the right panel of the modal, there is a **Payroll Action** block.
2. If the status is "Pending", the Admin sees a bright primary button: **"Process Payroll"**.
3. At the bottom, the "View PDF Payslip" button is locked/disabled because payroll hasn't run.
4. **Interaction Check (Process State Change):** The Admin clicks **"Process Payroll"**.
   - An alert confirms success.
   - The button instantly transforms into a green success state ("Payroll Processed").
   - **Crucial Unlock:** The disabled Payslip button at the bottom *instantly* unlocks, turning blue (`bg-info/10`) and becoming clickable!
5. Closing the modal reveals that the main table row has automatically updated its badge to a Green "Processed".

## Strict Rules Verification Check
- **Rule 4 (No Raw Variables):** Strictly mapped standard Tailwind colors (`text-success`, `bg-danger/10`, `border-primary`). Zero `[var(...)]` CSS variables were used.
- **Rule 6 (Hooks Isolation):** `useHrPayroll` houses all the logic for updating specific salary records and unlocking the payslip flag, keeping the modal JSX completely pure.
- **Rule 29 (Motion-Safe):** Tab switches, modal zoom-ins, and button state unlocks all utilize `motion-safe:animate-in`, `transition-all`, and `fade-in` for a deeply premium interactive experience.

