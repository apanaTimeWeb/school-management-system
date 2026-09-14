# Accountant Fine Management — Feature Map

## Module Purpose
The Fine Management module tracks dynamically generated late fees based on Super Admin configurations. The accountant can monitor unpaid fines, collect them, or initiate a "Waiver Request" if a parent disputes the fine or provides a valid reason for delay.

## Directory Structure

| Folder | Responsibility | Key Files |
|---|---|---|
| `accountant_fines_components/` | UI logic for fine tracking, waiver requests, and collection workflows. | `AccountantFinesMain.tsx`, `AccountantFinesMetrics.tsx`, `AccountantFinesFilters.tsx`, `AccountantFinesTable.tsx`, `AccountantFinesModals.tsx` |
| `accountant_fines_store/` | Zustand state to manage active modal popups and filtering constraints. | `useAccountantFinesStore.ts` |
| `accountant_fines_types/` | Data shapes mapping fine statuses (Paid, Unpaid, Waived). | `AccountantFinesTypes.ts` |
| `accountant_fines_utils/` | Mock payloads modeling diverse fine conditions (Per Day vs Fixed). | `AccountantFinesConstants.ts` |

## Feature Inventory

| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Fine List | `/accountant/fines` | View table of all fines | `AccountantFinesTable` | Mocked | ✅ Live |
| Fine Calculation | `/accountant/fines` | See if fine is Fixed or Per Day along with amount | `AccountantFinesTable` | Mocked | ✅ Live |
| KPI Metrics | `/accountant/fines` | View Unpaid, Collected, Waived totals | `AccountantFinesMetrics` | Mocked | ✅ Live |
| Fine Collection | `/accountant/fines` | Pay a fine directly from the table | `AccountantFinesModals` | Mocked | ✅ Live |
| Waiver Request | `/accountant/fines` | Ask Principal to waive an unpaid fine | `AccountantFinesModals` | Mocked | ✅ Live |
| Fine History | `/accountant/fines` | View timeline of fine application and resolution | `AccountantFinesModals` | Mocked | ✅ Live |

## User Flows & Interactions

### Flow 1: Collect an Unpaid Fine
1. User finds an "Unpaid" fine and clicks the green `HandCoins` icon.
2. A modal appears showing the total fine due.
3. User selects the Payment Method (e.g. Cash) and clicks "Process Payment".
4. Success alert simulates the payment. The row status would turn to "Paid".

### Flow 2: Request Fine Waiver
1. User clicks the yellow `ShieldOff` icon on an Unpaid fine.
2. A modal opens asking for a "Reason for Waiver".
3. User enters reason (e.g., "Medical emergency") and submits.
4. The status of the fine logically updates to "Waiver Pending" waiting for Principal's approval.

### Flow 3: View Fine History (Paid/Waived)
1. For fines that are no longer actionable (Paid, Waived, Waiver Pending), the row action changes to a generic `History` icon.
2. Clicking it opens a timeline.
3. The timeline shows Step 1: "Fine Applied (Date)".
4. Step 2 shows the resolution: "Fine Paid" (Green Check) or "Waived" / "Waiver Pending" (Yellow/Blue Shield).

## Data and State Architecture

- **State pattern:** Zustand (`useAccountantFinesStore`).
- **Context-Aware Table Actions:** Row actions change dynamically based on `status`. If `Unpaid`, show Collect/Waive. Else, show History.

## Rule Compliance Checklist

- [x] Rule 1: Micro-modularization — subfolders isolated.
- [x] Rule 2: Total Role Isolation — isolated within accountant boundaries.
- [x] Rule 4: Theme Independence — applies semantic tailwind tokens (danger for unpaid, success for paid).
- [x] Rule 5: Smart State Management — Zustand perfectly routes the 3 separate user-flow modals.
