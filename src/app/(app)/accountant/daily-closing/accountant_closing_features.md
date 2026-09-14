# Accountant Daily Closing (EOD) — Feature Map

## Module Purpose
The Daily Closing module provides a high-level executive summary of the day's financial activity. It aggregates data from Cash Management (Physical Cash), Online Payments, Bank Records (Cheques/NEFT), Expenses, and Refunds to calculate a Net Settlement figure. The Accountant uses this page to lock the day's ledger and send a verified summary to the Principal.

## Directory Structure

| Folder | Responsibility | Key Files |
|---|---|---|
| `accountant_closing_components/` | UI logic for the summary layout, history table, and EOD modals. | `AccountantClosingMain.tsx`, `AccountantClosingSummary.tsx`, `AccountantClosingHistory.tsx`, `AccountantClosingModals.tsx` |
| `accountant_closing_store/` | Zustand state orchestrating modal popups (Confirm EOD, View Details). | `useAccountantClosingStore.ts` |
| `accountant_closing_types/` | Data shapes mapping aggregated totals (Gross, Net, Deductions). | `AccountantClosingTypes.ts` |
| `accountant_closing_utils/` | Mock payload demonstrating a closing history and today's summary. | `AccountantClosingConstants.ts` |

## Feature Inventory

| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| EOD Aggregation Dashboard | `/accountant/daily-closing` | View Cash + Online + Bank totals vs Refunds + Expenses | `AccountantClosingSummary` | Mocked | ✅ Live |
| Confirm & Close Day | `/accountant/daily-closing` | Lock the ledger with a checkbox confirmation | `AccountantClosingModals` | Mocked | ✅ Live |
| Closing History Table | `/accountant/daily-closing` | View past EOD summaries and check if Principal verified them | `AccountantClosingHistory` | Mocked | ✅ Live |
| EOD Print Report | `/accountant/daily-closing` | View detailed breakdown of a past day and Print it | `AccountantClosingModals` | Mocked | ✅ Live |

## User Flows & Interactions

### Flow 1: End of Day (EOD) Closing
1. User reviews the "Today's Settlement" block (Gross Collection, Total Deductions, Net Settlement, and final EOD System Balance).
2. User clicks the "Confirm & Close EOD" button.
3. A modal appears requiring an explicit Checkbox agreement (`I confirm that all Cash, Online, and Bank collections...`).
4. Optionally, the user can type in notes for the Principal.
5. User clicks "Close & Lock Day". The system disables further modifications for that date.

### Flow 2: View History
1. User searches for a specific date in the History Table (e.g. `2024-04-16`).
2. User clicks the 'Eye' icon on a past record.
3. A detailed breakdown modal opens, showing Opening Balance, + Collections, - Deductions, and final Closing Balance.
4. User clicks "Print Report" to get a physical copy.

## Data and State Architecture

- **State pattern:** Zustand (`useAccountantClosingStore`).
- **Mathematical Integrity:** `Gross Collection = Cash + Online + Bank`. `Net Settlement = Gross Collection - (Refunds + Expenses)`. `Closing Balance = Opening Balance + Net Settlement`. These are visually enforced in the UI.

## Rule Compliance Checklist

- [x] Rule 1: Micro-modularization — organized in subfolders.
- [x] Rule 2: Total Role Isolation — limited to accountant's daily settlement duties.
- [x] Rule 4: Theme Independence — utilizes `success` for inflows, `danger` for outflows, and `primary`/`info` for net totals.
- [x] Rule 5: Smart State Management — Zustand handles the confirm and history modals seamlessly.
