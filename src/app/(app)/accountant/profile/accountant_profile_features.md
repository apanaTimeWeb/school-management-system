# Accountant My Profile & Security — Feature Map

## Module Purpose
The Profile module allows the accountant to manage their personal details, configure security settings (Password, 2FA), and monitor active sessions and login history for maximum account security.

## Directory Structure

| Folder | Responsibility | Key Files |
|---|---|---|
| `accountant_profile_components/` | Contains the top-level Main wrapper, Tabs navigation, and individual tab contents (Details, Security, History). | `AccountantProfileMain.tsx`, `AccountantProfileTabs.tsx`, `AccountantProfileDetails.tsx`, `AccountantProfileSecurity.tsx`, `AccountantProfileHistory.tsx` |
| `accountant_profile_store/` | Zustand state managing active tab and 2FA toggle. | `useAccountantProfileStore.ts` |
| `accountant_profile_types/` | Data shapes mapping user profile details, login history, and active sessions. | `AccountantProfileTypes.ts` |
| `accountant_profile_utils/` | Mock payload demonstrating realistic session/history data. | `AccountantProfileConstants.ts` |

## Feature Inventory

| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Tab Navigation | `/accountant/profile` | Switch between Personal Details, Security, and History | `AccountantProfileTabs` | Local State | ✅ Live |
| Personal Details | `/accountant/profile` | Update Name, Email, Phone, and view Role / Date of Joining | `AccountantProfileDetails` | Mocked Save | ✅ Live |
| Security Settings | `/accountant/profile` | Update password and toggle 2FA configuration | `AccountantProfileSecurity` | Mock Alert | ✅ Live |
| Session Management| `/accountant/profile` | View Active Sessions (Browser/IP) and Revoke unauthorized sessions | `AccountantProfileHistory` | Mock Action | ✅ Live |
| Login History | `/accountant/profile` | View recent login attempts, Location, IP, and Status (Success/Failed) | `AccountantProfileHistory` | Mock Data | ✅ Live |

## User Flows & Interactions

### Flow 1: Enable 2FA
1. User clicks the "Security & 2FA" tab.
2. User toggles the 2FA switch.
3. The UI smoothly transitions the toggle and reveals a new section explaining 2FA and offering a button to "Configure Authenticator App".

### Flow 2: Revoke a Session
1. User clicks the "Login History" tab.
2. In the "Active Sessions" card, the user sees a "MacBook Pro" logged in from another IP.
3. User clicks the Red "Revoke" button to forcefully log out that device.

## Data and State Architecture

- **State pattern:** Zustand (`useAccountantProfileStore`) for keeping the active tab persistent and handling the 2FA toggle state instantly across components.

## Rule Compliance Checklist

- [x] Rule 1: Micro-modularization — organized in subfolders.
- [x] Rule 2: Total Role Isolation — strictly limited to the accountant folder.
- [x] Rule 4: Theme Independence — Very clean UI. Profile picture uses a soft rounded image. Statuses in login history use `success` and `danger`. Action buttons match the brand's `primary` aesthetic.
- [x] Rule 5: Smart State Management — Zustand handles the tab switching locally, creating a SPA feel.
