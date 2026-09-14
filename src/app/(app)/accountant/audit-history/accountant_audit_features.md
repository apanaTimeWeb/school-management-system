# Accountant Audit & History — Feature Map

## Module Purpose
The Audit & History module is an immutable ledger that tracks every sensitive financial action performed within the system. It records who made the change, what was changed, the previous and new values, and traces the action back to a specific IP address and device. This is crucial for accountability and security in financial operations.

## Directory Structure

| Folder | Responsibility | Key Files |
|---|---|---|
| `accountant_audit_components/` | Stats cards, Filter bar, Audit Log Table, and Detailed View Modal. | `AccountantAuditMain.tsx`, `AccountantAuditStats.tsx`, `AccountantAuditTable.tsx`, `AccountantAuditModals.tsx` |
| `accountant_audit_store/` | Zustand state for search, filters, and modal toggling. | `useAccountantAuditStore.ts` |
| `accountant_audit_types/` | Data shapes mapping specific events like 'Fee Edit', 'Cancellation', 'Waiver'. | `AccountantAuditTypes.ts` |
| `accountant_audit_utils/` | Mock payload containing realistic audit logs with IPs, timestamps, and diffs. | `AccountantAuditConstants.ts` |

## Feature Inventory

| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Audit Dashboard | `/accountant/audit-history` | View KPIs (Total Logs, Cancellations, Modifications, Waivers) | `AccountantAuditStats` | Mocked | ✅ Live |
| Log Filter Bar | `/accountant/audit-history` | Filter logs by Event Type (e.g., Refund, Fine Waiver, Concession) | `AccountantAuditActions` | Local State | ✅ Live |
| Audit Trail Table | `/accountant/audit-history` | Scroll through logs showing Actor, Action, Time, and Amount | `AccountantAuditTable` | Mocked | ✅ Live |
| Detailed Diff View | `/accountant/audit-history` | Click 'Eye' icon to view Old Value vs New Value, Device IP, and specific reasons for changes | `AccountantAuditModals` | Mock Data | ✅ Live |

## User Flows & Interactions

### Flow 1: View Audit Details for a Cancellation
1. User filters the table for "Receipt Cancellation".
2. User clicks the 'Eye' icon next to a log created by the "Super Admin".
3. The Audit Trail Record modal opens.
4. User sees the Actor, IP Address, Transaction ID, and the explicit "Reason / Remarks" (e.g., "Duplicate entry by mistake").
5. User sees the "Diff" highlighting the Old Value ("Valid") and the New Value ("Cancelled").

## Data and State Architecture

- **State pattern:** Zustand (`useAccountantAuditStore`).

## Rule Compliance Checklist

- [x] Rule 1: Micro-modularization — organized in subfolders.
- [x] Rule 2: Total Role Isolation — strictly limited to the accountant folder.
- [x] Rule 4: Theme Independence — Very precise color coding (e.g., `danger` for Cancellations, `success` for Concessions) ensuring quick visual scanning of logs. The "Diff" view uses standard red/green highlights for old/new values.
- [x] Rule 5: Smart State Management — Zustand handles the modal and selected log state cleanly.
