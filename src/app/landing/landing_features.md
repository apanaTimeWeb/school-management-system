# Landing Module — Feature Map

## Module Purpose
The Landing module serves as the marketing front-door for the School ERP system. It highlights features, modules, and benefits, while providing a clear call-to-action to the `auth` module. It is intended to be fast, SEO-friendly, and completely decoupled from internal dashboards.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `landing_components/` | Reusable React components for landing sections. | `LandingNavbar.tsx`, `LandingHero.tsx`, etc. |
| `landing_api/` | API wrappers for landing features (e.g. contact form). | TBD |
| `landing_mocks/` | MSW mock handlers for any landing API calls. | TBD |
| `landing_schemas/` | Validation schemas for landing forms. | TBD |
| `landing_types/` | TypeScript interfaces for landing props/data. | TBD |
| `landing_utils/` | Utility functions for landing logic. | TBD |

## Approved External Dependencies
### Application Infrastructure
- `@/lib/api` — global HTTP transport (if needed)

### Business Feature Dependencies
- **Auth**: The landing page explicitly routes users to `/auth/login`.

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Landing Page | `/landing` | View marketing materials and navigate to login. | `LandingHero`, `LandingFeatures` | None | ✅ Live |

## Data and State Architecture
- **State pattern:** Minimal local state (React `useState`) for mobile menu if needed.
- **Zustand stores:** None.
- **Context providers:** None.

## UI Data Requirements
| UI Element | Required Field(s) | API Endpoint | Response Path | Nullable? | Mocked? |
|---|---|---|---|---|---|
| Hero Section | Static marketing copy | None | N/A | N/A | N/A |

## Permissions and Security
- **Required role:** Public

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — module-prefixed subfolders
- [x] Rule 3: Hyper-descriptive naming
- [x] Rule 4: Theme Independence
- [x] Rule 11: Centralized URL Config
- [x] Rule 13: Feature Map complete
