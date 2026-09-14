# Admin Staff Communication Module — Feature Map

## Module Purpose
The Staff Communication module acts as a unified inbox and broadcasting center. It handles all forms of internal alerts (Leave approvals, Meetings, Document Expiry) and integrates with multi-channel delivery options (SMS, Email, WhatsApp, In-App).

## Directory Structure
| Folder | Responsibility |
|---|---|
| `/admin/hr_communication/` | Houses the Unified Inbox, Channel Configuration, and the Broadcast Composer Modal. |

## Feature Inventory
| Feature | Location | Status |
|---|---|---|
| **Unified Inbox List** | Primary Tab (`AdminHrCommInbox`) | ✅ INTERACTIVE |
| **Read / Unread State** | Inside Inbox List | ✅ INTERACTIVE (Pulse animation & click to read) |
| **Category Badges** | Inside Inbox List | ✅ DYNAMIC (Color coded by category) |
| **Channel Config UI** | Second Tab (`AdminHrCommChannels`) | ✅ INTERACTIVE (Toggle switches) |
| **Broadcast Composer Modal**| Deep Modal (`AdminHrCommBroadcastModal`) | ✅ INTERACTIVE |
| **Multi-Channel Selection** | Inside Composer Modal | ✅ INTERACTIVE (Checkbox chips) |

## User Flows & Interactions
### Flow 1: Interacting with the Inbox
1. Admin navigates to `/admin/hr_communication`.
2. The unified inbox shows all notifications. Unread messages have a pulsing primary-colored dot (`animate-pulse`) and bold text.
3. **Interaction (Read State):** Clicking on an unread message instantly marks it as Read. The pulse dot disappears, the background turns neutral, and the text un-bolds.

### Flow 2: Broadcasting a New Message
1. In the Inbox tab, the Admin clicks **"Broadcast Message"**.
2. **Interaction (Deep Form):** A modal opens. Admin selects a category (e.g., "Meeting Notification") and writes the subject/message.
3. **Interaction (Channel Chips):** Admin can click on the Channel Chips (In-App, Email, SMS, WhatsApp) to toggle them. When toggled ON, they light up in primary color.
4. Admin clicks **"Broadcast Now"**. The modal closes, an alert fires, and the new message instantly appears at the top of the Inbox list.

### Flow 3: Managing Channels
1. Admin switches to the **"Integrations & Channels"** tab.
2. A grid of connection statuses for external providers (Twilio, SendGrid, Meta) is shown.
3. **Interaction (Toggles):** Admin can click the Tailwind Switch to enable/disable a channel. The status icon dynamically flips between a Green Check circle and a Red Server Crash icon.

## Strict Rules Verification Check
- **Rule 4 (No Raw Variables):** Fully compliant. Category badges and Unread dots strictly use Tailwind tokens like `bg-info/10 text-info` and `bg-primary`.
- **Rule 6 (Hooks Isolation):** `useAdminHrComm` handles all inbox array manipulation, read/unread state toggling, and modal state management.
- **Rule 29 (Motion-Safe):** Unread messages utilize `motion-safe:animate-pulse` for a premium subtle notification effect.
