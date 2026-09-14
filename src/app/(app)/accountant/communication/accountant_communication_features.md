# Accountant Communication — Feature Map

## Module Purpose
The Communication module allows the Accountant to trigger financial notifications to students or parents. It includes Fee Reminders, Payment Confirmations, and Overdue Alerts via SMS, Email, or WhatsApp. As per requirements, this module triggers messages but does not manage API provider configurations (which belong to Admin).

## Directory Structure

| Folder | Responsibility | Key Files |
|---|---|---|
| `accountant_communication_components/` | KPI Cards for delivery stats, Log table for sent messages, and the Composer Modal. | `AccountantCommunicationMain.tsx`, `AccountantCommunicationStats.tsx`, `AccountantCommunicationTable.tsx`, `AccountantCommunicationModals.tsx` |
| `accountant_communication_store/` | Zustand state orchestrating modal popups and filtering logic. | `useAccountantCommunicationStore.ts` |
| `accountant_communication_types/` | Data shapes mapping communication types and channels. | `AccountantCommunicationTypes.ts` |
| `accountant_communication_utils/` | Mock payload demonstrating delivery logs and the actual message templates. | `AccountantCommunicationConstants.ts` |

## Feature Inventory

| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Comm Dashboard | `/accountant/communication` | View KPIs (Total Sent, SMS delivered, etc.) | `AccountantCommunicationStats` | Mocked | ✅ Live |
| Action Bar | `/accountant/communication` | Filter by Channel (SMS/Email/WA) and open Composer | `AccountantCommunicationActions` | Local State | ✅ Live |
| Comm Log Table | `/accountant/communication` | View history of sent messages, recipient, and status (Sent/Failed/Pending) | `AccountantCommunicationTable` | Mocked | ✅ Live |
| Compose Modal | `/accountant/communication` | Select Message Type, Target Audience, and Channel to send | `AccountantCommunicationModals` | Mock Alert | ✅ Live |

## User Flows & Interactions

### Flow 1: Send an Overdue Reminder
1. User clicks 'Send Notification'.
2. The Compose Modal opens.
3. User selects "Overdue Reminder" from Message Type.
4. User selects "All Defaulters" as the target audience.
5. User selects "WhatsApp" as the Channel (tile lights up).
6. A live preview of the template ("URGENT: Your fee for {Student_Name} is overdue...") appears at the bottom.
7. User clicks 'Push Notification'.

## Data and State Architecture

- **State pattern:** Zustand (`useAccountantCommunicationStore`).
- **Template Engine (Mock):** The `COMMUNICATION_TEMPLATES` constant maps message types to predefined strings containing variable placeholders (like `{Student_Name}`).

## Rule Compliance Checklist

- [x] Rule 1: Micro-modularization — organized in subfolders.
- [x] Rule 2: Total Role Isolation — strictly limited to triggering messages (No config APIs).
- [x] Rule 4: Theme Independence — Leverages `primary` for global actions, `success` for SMS, `warning` for Email, `info` for WhatsApp.
- [x] Rule 5: Smart State Management — Zustand handles the modal.
