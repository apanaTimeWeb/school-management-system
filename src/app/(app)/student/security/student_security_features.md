# Student Security Module — Feature Map

## Module Purpose
The Student Security module (`/student/security`) provides a centralized location for users to manage their account security. It includes password changes, 2FA toggling, active session management, and login history audits.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `student_security_components/` | Visual UI: Tabs, Forms, Tables, Session Cards | `StudentSecurityMain.tsx`, `StudentSecurityPassword.tsx`, `StudentSecurity2FA.tsx`, `StudentSecuritySessions.tsx`, `StudentSecurityHistory.tsx` |
| `student_security_api/` | Mocks fetching and updating security settings | `student_security_api.ts` |
| `student_security_types/` | Data interfaces for sessions and logs | `student_security_types.ts` |
| `student_security_constants/` | Mock data for UI testing | `student_security_constants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Change Password | `/student/security` | Update their password via a form with validation (matching passwords) and a toggle to show/hide the password text. | `StudentSecurityPassword` | `POST /api/student/security/password` | ✅ IMPLEMENTED |
| Two-Factor Auth | `/student/security` | Toggle 2FA on/off. Includes an API mock that simulates the backend enabling/disabling the feature. | `StudentSecurity2FA` | `POST /api/student/security/2fa` | ✅ IMPLEMENTED |
| Active Sessions | `/student/security` | View all active logged-in devices (browser, IP, location). Click "Logout" on specific devices or "Logout All Other Devices". | `StudentSecuritySessions` | `POST /api/student/security/logout` | ✅ IMPLEMENTED |
| Login History | `/student/security` | View a table of recent login attempts, categorized by Success/Failed with device and IP details. | `StudentSecurityHistory` | `GET /api/student/security` | ✅ IMPLEMENTED |

## User Flows & Interactions
### Flow 1: Logging out a specific device
1. The user visits the "Security Settings" tab.
2. Under "Active Sessions", they see "iPhone 13 Pro" which is not their current device.
3. They click the 'Logout' icon next to it.
4. The icon turns into a loading spinner. The `logoutDevice` API is called.
5. On success, the iPhone session is removed from the list, and a success alert is shown.

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — subfolders used, files < 300 lines.
- [x] Rule 2: Isolation — exclusively in `student/security`.
- [x] Rule 4: Theme Independence — semantic variables used (e.g., `bg-success`, `text-danger`).
- [x] Rule 9: Loaders/Errors — custom `loading.tsx` and `error.tsx` implemented.
- [x] Rule 13: Feature Map — this file created.
