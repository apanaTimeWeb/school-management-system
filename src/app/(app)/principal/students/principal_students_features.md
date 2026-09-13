# 02. Student Management (Principal) — Feature Map

## Module Purpose
The Student Management module provides the Principal with a comprehensive, read-only view of the entire student body. It enables quick searches, advanced filtering, and a deep-dive 360-degree profile for any selected student. Actions like Transfer, Promotion, and Withdrawal are included in the UI but adhere to RBAC policies.

## Directory Structure
| Folder | Responsibility |
|---|---|
| `students_components/` | All UI components for the list, filters, and modal. |
| `students_components/PrincipalStudentTabs/` | Micro-components containing specific profile tab views (e.g. Academic, Attendance). |
| `students_api/` | Data fetching wrappers simulating network delays. |
| `students_types/` | TypeScript interfaces for all student data models. |
| `students_constants/` | Mock data arrays mapping to the types. |
| `students_store/` | Zustand state management for active filters and modal state. |

## Feature Inventory
| Feature | Component | Description |
|---|---|---|
| **Advanced Filtering** | `PrincipalStudentsFilters.tsx` | Search by Name/Roll, Filter by Class, Section, and Status. Real-time updates via Zustand. |
| **Paginated Registry** | `PrincipalStudentsList.tsx` | Table view of students matching the active filters. |
| **Profile Drawer** | `PrincipalStudentProfileModal.tsx` | Slide-in drawer displaying a student's full 360-degree profile. |
| **Overview Tab** | `ProfileOverviewTab.tsx` | Personal details and Guardian information. |
| **Academics Tab** | `AcademicHistoryTab.tsx` | Term-wise subject scores, grades, and remarks. |
| **Attendance Tab** | `AttendanceTab.tsx` | Month-wise attendance percentage and leave stats. |
| **Discipline Tab** | `DisciplineRecordsTab.tsx` | Confidential log of disciplinary incidents and severities. |
| **Documents Tab** | `DocumentsTab.tsx` | Verified documents (Aadhar, Birth Certificate) with download links. |
| **Lifecycle Tab** | `LifecycleTab.tsx` | Transfer, Promotion, and Withdrawal statuses with RBAC-controlled action buttons. |

## Data and State Architecture
- **Zustand Store (`usePrincipalStudentsStore`)**: Manages `filters`, `selectedStudentId`, `isProfileModalOpen`, and `activeProfileTab`. This allows deep-linking and state preservation across component re-renders.
- **API Simulation**: Uses `delay()` promises in `PrincipalStudentsApi.ts` to mimic real-world async data fetching.

## Permissions and Security (RBAC Notes)
- The module is strictly read-only for general profile data.
- The `LifecycleTab.tsx` includes buttons for "Initiate Transfer", "Request Promotion", and "Mark as Withdrawn". However, these buttons display a `Permission Notice` explaining that execution is subject to backend RBAC validation.
- Discipline records show a prominent confidentiality warning since they are sensitive.

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization (Profile broken into 6 separate tab files to ensure < 300 line limit).
- [x] Rule 2: Total Role Isolation (No cross-role imports).
- [x] Rule 3: Hyper-descriptive naming (`PrincipalStudent...` prefix).
- [x] Rule 4: Theme Independence (Used CSS variables like `--bg-card`, `--text-primary`).
- [x] Rule 5: Smart State Management (Zustand used perfectly for Modal + Filter state).
- [x] Rule 7: Type Isolation.
- [x] Rule 9: Skeleton Loaders and Error Boundaries implemented.
- [x] Rule 13: This Feature Map document is present.
