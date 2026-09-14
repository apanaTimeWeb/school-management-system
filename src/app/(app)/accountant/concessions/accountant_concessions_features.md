# Accountant Fee Concession — Feature Map

## Module Purpose
The Fee Concession module allows the accountant to submit, track, and review various types of fee waivers (Scholarships, Discounts, Staff Concessions). It includes a workflow where the accountant initiates a request, which is then routed to the Principal/Admin for final approval. The module provides a detailed timeline for tracking the history and status of every request.

## Directory Structure

| Folder | Responsibility | Key Files |
|---|---|---|
| `accountant_concessions_components/` | All UI components for tracking requests, filters, tables, and modal workflows. | `AccountantConcessionsMain.tsx`, `AccountantConcessionsMetrics.tsx`, `AccountantConcessionsFilters.tsx`, `AccountantConcessionsTable.tsx`, `AccountantConcessionsModals.tsx` |
| `accountant_concessions_store/` | Zustand state to manage filters, active request, and modal toggles. | `useAccountantConcessionsStore.ts` |
| `accountant_concessions_types/` | Data shapes for concession types and statuses. | `AccountantConcessionsTypes.ts` |
| `accountant_concessions_utils/` | Mock payload containing diverse concession histories. | `AccountantConcessionsConstants.ts` |

## Feature Inventory

| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Concession Requests | `/accountant/concessions` | View a table of all concession requests | `AccountantConcessionsTable` | Mocked | ✅ Live |
| Type Filters | `/accountant/concessions` | Filter by Scholarship, Discount, Staff Concession | `AccountantConcessionsFilters` | Mocked | ✅ Live |
| Status Filters | `/accountant/concessions` | Filter by Approved, Pending Approval, Rejected | `AccountantConcessionsFilters` | Mocked | ✅ Live |
| KPI Metrics | `/accountant/concessions` | View Total value of Approved, Pending, Rejected | `AccountantConcessionsMetrics` | Mocked | ✅ Live |
| Create New Request | `/accountant/concessions` | Open modal to submit a new concession for approval | `AccountantConcessionsModals` | Mocked | ✅ Live |
| Concession History | `/accountant/concessions` | View detailed timeline of request -> approval/rejection | `AccountantConcessionsModals` | Mocked | ✅ Live |

## User Flows & Interactions

### Flow 1: Create a New Concession Request
1. User clicks the "New Request" button.
2. A modal appears. User searches/selects a student.
3. User selects the Concession Type (e.g., "Discount") and enters an Amount.
4. User enters a Reason/Justification for the Principal to review.
5. User clicks "Submit Request". An alert confirms submission and routes it to "Pending Approval".

### Flow 2: View Concession History / Details
1. User clicks the "FileText" icon (or anywhere on the row) for a specific request.
2. A detailed modal opens showing Student Info, Type, and Amount.
3. A visual **Approval Timeline** is displayed:
   - Step 1: Shows who created the request and when.
   - Step 2: Shows the final status (Approved/Rejected/Pending) along with Reviewer Remarks (if any).
4. User can close the timeline when done.

## Data and State Architecture

- **State pattern:** Zustand (`useAccountantConcessionsStore`).
- **Visual Status Engine:** The timeline in the Details modal dynamically renders icons, colors (green for approved, red for rejected, yellow for pending), and dynamic text based on the `status` string in the mock data.

## Edge Cases and Rules Validated

- **Role Transparency:** The UI explicitly tells the accountant that new requests are routed to the Principal/Admin for final approval, maintaining structural integrity (Rule 2).
- **Theme Integrity:** Uses explicit semantic tags (`text-[#38BDF8] bg-[#0C4A6E]` etc.) for Scholarship vs Discount badges to make the UI pop without breaking standard Tailwind configs (Rule 4).

## Rule Compliance Checklist

- [x] Rule 1: Micro-modularization — subfolders properly isolated.
- [x] Rule 2: Total Role Isolation — uses Accountant routing layout `/accountant/concessions` and respects role limits (Accountant requests, Principal approves).
- [x] Rule 4: Theme Independence — applies semantic tailwind tokens.
- [x] Rule 5: Smart State Management — Zustand handles modal orchestration perfectly.
