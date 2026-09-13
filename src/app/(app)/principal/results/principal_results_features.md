# 08. Results & Academic Performance (Principal) — Feature Map

## Module Purpose
The Results Management module empowers the Principal to overview the academic performance of the entire school. It includes passing trends, student-level GPA rankings, and a final sign-off phase to review Report Cards before they are published to Parents.

## Directory Structure
| Folder | Responsibility |
|---|---|
| `results_components/` | Core UI containing Main orchestrator, Overview Tab, Performance Tab, Publish Tab, and Report Card Preview Modal. |
| `results_api/` | Simulated API calls fetching mock result trends and report cards. |
| `results_types/` | TypeScript interfaces for the result data structures. |
| `results_constants/` | Mock payload data. |
| `results_store/` | Zustand state managing tabs and modal visibility. |

## Feature Inventory
| Feature | Component | Description |
|---|---|---|
| **Tabbed Dashboard** | `PrincipalResultsMain.tsx` | High-level orchestrator switching between Overview, Student Performance, and Publish & Reports. |
| **Result Overview** | `PrincipalResultsOverviewTab.tsx`| Highlights School Pass Percentage, Evaluated Students count, and Top vs Lowest Performing Classes. |
| **Student Performance**| `PrincipalResultsPerformanceTab.tsx`| Searchable table displaying student ranks, % score, GPA, Grades, and Pass/Fail status. |
| **Result Publish** | `PrincipalResultsPublishTab.tsx`| Table showing drafts of exam results pending publication. |
| **Report Card Review** | `PrincipalResultsReportCardModal.tsx`| Modal to preview a sample student's generated report card. Designed to mimic a real printed report card with white background and standard structure. |

## Data and State Architecture
- **State Pattern**: Zustand (`usePrincipalResultsStore.ts`) handles tab switching and modal triggers to ensure separation of concerns.

## AI Instructions & Theming Notes
- **Colors**: Uses the premium 5-color theme. Examples:
  - "Rank 1" gets a Primary Gold badge, Top 3 gets Info Blue badge.
  - Report Card Preview uses a contrasting white theme (`bg-white text-black`) to represent a printable A4 format.
