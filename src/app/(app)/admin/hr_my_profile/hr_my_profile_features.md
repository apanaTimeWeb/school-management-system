# Admin HR My Profile Module — Feature Map

## Module Purpose
The My Profile module provides self-service capabilities for the Admin/HR user. It handles personal information updates, password changes, 2FA (Two-Factor Authentication) security setup, and monitoring of active sessions and login history.

## Directory Structure
| Folder | Responsibility |
|---|---|
| `/admin/hr_my_profile/` | Contains the vertical tab navigator and individual components for Profile, Security, and Sessions. |

## Feature Inventory
| Feature | Location | Status |
|---|---|---|
| **Vertical Tabbed Layout** | `AdminHrMyProfileMain` | ✅ IMPLEMENTED |
| **Personal Profile Form** | `AdminHrProfileTab` | ✅ IMPLEMENTED |
| **Change Password** | `AdminHrSecurityTab` | ✅ IMPLEMENTED |
| **2FA Setup & Toggle** | `AdminHrSecurityTab` | ✅ INTERACTIVE |
| **2FA QR Modal** | `AdminHr2faModal` | ✅ IMPLEMENTED |
| **Active Sessions Tracker** | `AdminHrSessionsTab` | ✅ IMPLEMENTED |
| **Login History Table** | `AdminHrSessionsTab` | ✅ IMPLEMENTED |

## User Flows & Interactions
### Flow 1: Updating Personal Profile
1. Admin navigates to `/admin/hr_my_profile`.
2. By default, the `Personal Profile` tab is active.
3. Admin edits their Full Name or Bio and clicks **"Save Changes"**.
4. **Interaction:** An alert confirms the save, and the avatar circle (which shows the first letter of the name if no image is uploaded) instantly updates if the name was changed.

### Flow 2: Enabling Two-Factor Authentication (2FA)
1. Admin switches to the **"Security Settings"** tab.
2. The 2FA section shows a warning box indicating 2FA is currently OFF.
3. Admin clicks **"Enable 2FA"**.
4. **Interaction (QR Modal):** A sleek modal opens showing a mock QR code, a manual setup key, and an input for a 6-digit code.
5. Admin types a 6-digit code. The "Verify & Enable" button, previously disabled, becomes clickable.
6. **Interaction (State Update):** Admin clicks Verify. The modal closes, the button on the page switches to red "Disable 2FA", and the warning box changes to a green success box confirming the account is protected.

### Flow 3: Managing Sessions
1. Admin switches to the **"Sessions & History"** tab.
2. The Active Sessions list shows which device is the "Current Session" (highlighted in primary color without a revoke button) vs other logged-in devices (which have red "Revoke" buttons).
3. The Login History table logs past attempts, with failed attempts highlighted in red badges.

## Strict Rules Verification Check
- **Rule 4 (No Raw Variables):** Fully compliant. Layout uses strict Tailwind grid/flex. 2FA states use `text-success` and `bg-success/5` vs `warning`/`danger` tokens.
- **Rule 6 (Hooks Isolation):** `useAdminHrMyProfile` manages the tab switching, profile state fetching, and the 2FA toggle logic.
