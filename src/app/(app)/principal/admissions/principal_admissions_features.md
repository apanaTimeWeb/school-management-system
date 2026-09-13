# 03. Admissions (Principal) — Feature Map

## Module Purpose
The Admissions module empowers the Principal to oversee and govern the entire student enrollment lifecycle. It enables the Principal to track overall admission funnel metrics (Enquiries → Applications → Interveiws → Selections), review individual 360-degree applicant profiles, evaluate interview and test scores, and make final authorization decisions (Approve, Reject, or Waitlist). This module is critical for maintaining intake quality and executing the school's enrollment policy.

## Directory Structure
| Folder | Responsibility |
|---|---|
| `admissions_components/` | Core UI components: Main dashboard, Filter bar, KPI Stats, and the central paginated List view. |
| `admissions_components/PrincipalAdmissionsTabs/` | Micro-components rendering the deep-dive Profile Modal tabs (Overview, Documents, Assessment, Decision). |
| `admissions_api/` | Simulated API calls and delay wrappers fetching mock admission data. |
| `admissions_types/` | Zod schemas and TypeScript interfaces for the Admission data models. |
| `admissions_constants/` | Centralized mock arrays acting as the backend single-source-of-truth. |
| `admissions_store/` | Zustand logic managing the active modal, selected application ID, and filter states to prevent prop drilling. |

## Feature Inventory
| Feature | Component | Description |
|---|---|---|
| **KPI Dashboard** | `PrincipalAdmissionsStatsCards.tsx` | High-level metrics showing Total Enquiries, Pending Reviews, Interviews, and Selections. |
| **Pipeline Filters** | `PrincipalAdmissionsFilters.tsx` | Search by Name/ID and Filter by specific funnel stage (e.g., 'Document Verification', 'Waitlisted'). |
| **Applicant Registry** | `PrincipalAdmissionsList.tsx` | Paginated data table of applicants matching active filters with dynamic stage color-coding. |
| **360° Review Drawer** | `PrincipalApplicationReviewModal.tsx` | A slide-in drawer showing the complete applicant profile, divided into 4 granular tabs. |
| **Overview Tab** | `AdmissionsOverviewTab.tsx` | Displays previous school details, current stage, and parent contact information. |
| **Documents Tab** | `AdmissionsDocumentsTab.tsx` | Interactive checklist to verify or reject uploaded proofs (Birth Certificate, Aadhar). |
| **Assessment Tab** | `AdmissionsAssessmentTab.tsx` | Interface to record or edit Admission Test scores and Interview remarks. |
| **Decision Authority** | `AdmissionsDecisionTab.tsx` | The final authority panel (Approve, Waitlist, Reject) guarded by a Principal Authorization notice. |

## Data and State Architecture
- **State Pattern**: Zustand (`usePrincipalAdmissionsStore.ts`) handles the UI interaction state (modal visibility, active tabs, filter criteria).
- **Network Simulation**: The `PrincipalAdmissionsApi.ts` implements a 600ms network delay to mimic real-world async fetching, allowing `loading.tsx` skeletons to render naturally.
- **Component Limitations**: Adheres strictly to the sub-300 line ceiling rule. Complex layouts (like the Decision Tab) are extracted entirely out of the main Modal file to maintain absolute AI-friendly modularity.

## Loading, Empty, and Error States
| Section | Loading State | Empty State | Error State |
|---|---|---|---|
| **Full Page** | `loading.tsx` provides a full-bleed skeleton mimicking the KPI cards and Table layout. | N/A | `error.tsx` provides a localized, themed error boundary with a reset button. |
| **Data Table** | The table body pulses with grey rectangles when filters are changed. | `PrincipalAdmissionsList` renders a "No applications found" fallback. | Handled by route-level error boundary. |
| **Profile Drawer** | Modal content displays a circular skeleton (avatar) and block skeletons until the specific profile data resolves. | N/A | "Failed to load application profile" text string inside the drawer body. |

## Edge Cases and AI Warnings
- **Role Isolation Breach Risk**: Ensure this folder ONLY handles Principal-facing logic. Do NOT import Admin or Parent admission components here.
- **Form State Overwrites**: In `AdmissionsDecisionTab.tsx`, the `isSaving` simulated delay must fully resolve before closing the modal or emitting success toasts to prevent UI race conditions.
- **Strict Color Mapping**: Stage badges use strict Tailwind utility classes (`bg-success/20 text-success`). Do not introduce arbitrary hex colors when modifying stage states.
- **Prop Drilling**: Do not pass the `selectedApplicationId` down through the tree manually. Always pull it directly from `usePrincipalAdmissionsStore` in the child component that needs it.
