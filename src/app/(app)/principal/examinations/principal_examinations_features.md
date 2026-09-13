# 07. Examinations Management (Principal) — Feature Map

## Module Purpose
The Examination Management module provides the Principal with high-level oversight of all school examinations. It manages exam calendars, serves as the final approval layer for teachers' marks submissions, and monitors the progress of non-theory assessments like Practicals and Internal Assessments.

## Directory Structure
| Folder | Responsibility |
|---|---|
| `examinations_components/` | Core UI containing Main orchestrator, Calendar Tab, Approval Tab, Internals Tab, and Approval Modal. |
| `examinations_api/` | Simulated API calls fetching mock exam groups and marks approvals. |
| `examinations_types/` | Zod schemas and TypeScript interfaces for the examination data structures. |
| `examinations_constants/` | Mock payload data. |
| `examinations_store/` | Zustand state managing tabs and modal visibility. |

## Feature Inventory
| Feature | Component | Description |
|---|---|---|
| **Tabbed Dashboard** | `PrincipalExaminationsMain.tsx` | High-level orchestrator switching between Exam Calendar, Marks Approval, and Internals. |
| **Exam Calendar & Groups** | `PrincipalExaminationsCalendarTab.tsx`| Grid of cards displaying Term-wise exam groups (e.g., Mid Terms, Unit Tests), their target classes, dates, and status (Upcoming/Ongoing/Completed). |
| **Marks Verification & Approval**| `PrincipalExaminationsApprovalTab.tsx`| Lists batches of marks submitted by teachers for verification. Shows Average and Highest scores per subject. |
| **Approve Marks Modal** | `PrincipalExaminationsApproveModal.tsx` | Interactive modal to verify marks details and click **Approve & Publish** or **Reject & Reassign** with loading/success animations. |
| **Internals & Practicals** | `PrincipalExaminationsInternalsTab.tsx`| Tracks the status of non-theory exams (e.g., "Not Started", "Marks Entered", "Finalized") to ensure they are completed before final report cards are generated. |

## Data and State Architecture
- **State Pattern**: Zustand (`usePrincipalExaminationsStore.ts`) handles tab switching and modal triggers to ensure separation of concerns and avoid prop-drilling.
- **Component Lines Limitations**: Logic is strictly divided into individual tab files to stay under the 300-line limit per file.

## AI Instructions & Theming Notes
- **Colors**: Strictly uses the premium 5-color theme. Examples:
  - "Upcoming" exams are `warning` colored, "Ongoing" are `info` colored, and "Completed" are `success` colored.
  - Action buttons utilize robust hover states (e.g., `bg-primary/10 border-primary/30 text-primary hover:bg-primary hover:text-black`).
- **Responsiveness**: `<table className="w-full text-left border-collapse min-w-[900px]">` wrapped in `<div className="overflow-x-auto">` ensures flawless horizontal scrolling on mobile screens without destroying the cell layout.
