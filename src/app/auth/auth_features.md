# Auth Module — Feature Map

## Module Purpose
The Auth module is the central gateway for all authentication and session management in the School ERP platform. It handles multi-role login, token generation, session validation, logout, and token refresh logic. It enforces strict separation of roles (e.g., Student vs Super Admin) and ensures that all protected routes are inaccessible to unauthenticated users.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `login/` | Role selection page and role-specific login pages. | `page.tsx`, `login_mock_data.ts` |
| `logout/` | Endpoints/components for terminating a user session securely. | TBD |
| `refresh/` | Handles silent token refreshing. | TBD |
| `session/` | Endpoints to check current session validity. | TBD |
| `set-cookie/` | Handles secure cookie setting for authenticated users. | TBD |
| `token/` | Endpoints related to token generation or validation. | TBD |
| `exit-ghost-login/` | Mechanism for administrators to exit a ghosted user session. | TBD |
| `auth_api/` | All API wrappers/clients for auth endpoints. | TBD |
| `auth_constants/` | Hardcoded configuration, role definitions, and UI defaults. | TBD |
| `auth_mocks/` | MSW mock handlers and fixtures for auth endpoints. | TBD |
| `auth_tests/` | Unit and component tests for authentication flows. | TBD |
| `auth_types/` | TypeScript interfaces for credentials, tokens, and payloads. | TBD |
| `auth_utils/` | Utility functions for token parsing or auth validation. | TBD |

## Approved External Dependencies
### Application Infrastructure
- `@/lib/api` — global HTTP transport
- `@/lib/logger` — application logging infrastructure

### Business Feature Dependencies
- None

### Role-Level Business Dependencies
- None

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Role Selection | `/auth/login` | Select the role they wish to log in as. | `LoginSelectionPage` | None | ✅ Live |
| Role Login | `/auth/login/[role]` | Enter credentials to log in as a specific role. | `SchoolAdminLogin`, etc. | POST `/api/auth/login` (Mocked) | ✅ Mocked |

## User Flows & Interactions
### Flow 1: Role-Based Login
1. User navigates to `/auth/login` and selects their role (e.g., School Admin).
2. User is directed to `/auth/login/school-admin`.
3. User enters credentials (currently mocked/prefilled).
4. On submit, system calls `handleLogin`.
5. User is redirected to their respective role dashboard (e.g., `/admin/01-dashboard`).

## Data and State Architecture
- **State pattern:** Currently uses React state for loading UI during login.
- **Zustand stores:** None yet.
- **Context providers:** None yet.
- **Local-storage keys:** TBD (Tokens should ideally use HTTP-only cookies).
- **MSW handler location:** `auth_mocks/handlers`
- **MSW fixture location:** `auth_mocks/fixtures`

## API Contract
| Function | Method | Endpoint | Request | Response `data` type |
|---|---|---|---|---|
| `loginUser(dto)` | POST | `/api/auth/login` | `LoginDto` | `AuthResponse` |

## UI Data Requirements
| UI Element | Required Field(s) | API Endpoint | Response Path | Nullable? | Mocked? |
|---|---|---|---|---|---|
| Login Form | `username`, `password` | POST `/api/auth/login` | `data.token` | No | Yes |

## Permissions and Security
- **Required role:** Public (Login page)
- **Sensitive data handling:** Passwords are not echoed, tokens must be secured.

## Edge Cases and AI Warnings
- **Do not store tokens in localStorage:** Use HTTP-only cookies for session tokens.
- **Role isolation:** Ensure the logged-in user can only access their designated dashboard route.

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — module-prefixed subfolders
- [x] Rule 3: Hyper-descriptive naming
- [x] Rule 4: Theme Independence
- [x] Rule 11: Centralized URL Config
- [x] Rule 13: Feature Map complete
