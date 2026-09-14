# Accountant Defaulters — Feature Map

## Module Purpose
The Outstanding/Defaulters module allows accountants to track unpaid fees, categorize them by aging brackets (30, 60, 90+ days), and actively follow up with students or parents. It includes direct actions to log communication notes and simulate sending payment reminders via SMS, Email, or App notifications.

## Directory Structure

| Folder | Responsibility | Key Files |
|---|---|---|
| `accountant_defaulters_components/` | All UI components for aging cards, filters, tables, and modal dialogues. | `AccountantDefaultersMain.tsx`, `AccountantDefaultersAging.tsx`, `AccountantDefaultersFilters.tsx`, `AccountantDefaultersTable.tsx`, `AccountantDefaultersModals.tsx` |
| `accountant_defaulters_store/` | Zustand state to manage filters, active defaulter, and modal popups. | `useAccountantDefaultersStore.ts` |
| `accountant_defaulters_types/` | Data shapes for reminder statuses and follow-up states. | `AccountantDefaultersTypes.ts` |
| `accountant_defaulters_utils/` | Mock payload containing edge cases of defaulter data. | `AccountantDefaultersConstants.ts` |

## Feature Inventory

| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Defaulter List | `/accountant/defaulters` | View table of all students with pending dues | `AccountantDefaultersTable` | Mocked | ✅ Live |
| Outstanding Aging | `/accountant/defaulters` | Click on 1-30, 31-60, 61-90, or 90+ cards to filter table | `AccountantDefaultersAging` | Mocked | ✅ Live |
| Class/Section Filters | `/accountant/defaulters` | Dropdown filters for specific Class and Section | `AccountantDefaultersFilters` | Mocked | ✅ Live |
| Payment Follow-up | `/accountant/defaulters` | Click FileText icon to log a follow-up conversation | `AccountantDefaultersModals` | Mocked | ✅ Live |
| Send Reminder | `/accountant/defaulters` | Click Bell icon to choose SMS/Email and send a reminder | `AccountantDefaultersModals` | Mocked | ✅ Live |

## User Flows & Interactions

### Flow 1: Filter by Aging and Class
1. User clicks the Red `> 90 Days` aging card.
2. The card gets highlighted with a red ring.
3. The table filters to show only students with `overdueDays > 90`.
4. User selects "10th" from Class dropdown -> table filters further.

### Flow 2: Send Payment Reminder
1. User clicks the Bell icon on a student's row.
2. The "Send Payment Reminder" modal appears.
3. User selects "SMS + Email" and clicks "Send Now".
4. Success alert simulates the reminder dispatch.

### Flow 3: Log Follow-up
1. User clicks the FileText icon on a student's row.
2. "Log Follow-up" modal appears showing previous status.
3. User changes New Status to "Promised to Pay" and enters a note.
4. User clicks "Save Log".

## Data and State Architecture

- **State pattern:** Zustand (`useAccountantDefaultersStore`).
- **Active Filtering Logic:** The table maps over `MOCK_DEFAULTERS` and applies complex conditional logic:
  - Text search (Name/ID)
  - Dropdown match (Class, Section)
  - Range matching based on `agingFilter` (e.g., `overdueDays >= 1 && overdueDays <= 30`)

## Edge Cases and Rules Validated

- **Dynamic Styling:** Table `overdueDays` text changes color based on severity (Yellow for <30, Red for >90).
- **Toggle Aging Filters:** Clicking an already active aging card resets the filter to "All".

## Rule Compliance Checklist

- [x] Rule 1: Micro-modularization — subfolders properly isolated.
- [x] Rule 2: Total Role Isolation — uses Accountant routing layout `/accountant/defaulters`.
- [x] Rule 4: Theme Independence — applies semantic tailwind tokens (danger, warning) without ad-hoc hex values.
- [x] Rule 5: Smart State Management — Zustand handles modal orchestration perfectly.
