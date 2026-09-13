# 11. Discipline Management (Principal) — Feature Map

## Module Purpose
The Discipline Management module helps the Principal track and manage all rule violations, behavioral incidents, and counselling records for both students and staff. It enables taking disciplinary actions and tracking parent meetings.

## Directory Structure
| Folder | Responsibility |
|---|---|
| `discipline_components/` | Core UI containing Main orchestrator, Incidents Tab, Counselling Tab, and Action Modal. |
| `discipline_api/` | Simulated API calls fetching discipline data. |
| `discipline_types/` | TypeScript interfaces for the discipline records. |
| `discipline_constants/` | Mock payload data. |
| `discipline_store/` | Zustand state managing tabs and action modal visibility. |

## Feature Inventory
| Feature | Component | Description |
|---|---|---|
| **Tabbed Dashboard** | `PrincipalDisciplineMain.tsx` | Switches between Incidents and Counselling tracking. |
| **Incidents & Actions** | `PrincipalDisciplineIncidentsTab.tsx`| Table listing student and staff incidents, severity, type, and status. Action button opens modal. |
| **Counselling & Meetings** | `PrincipalDisciplineCounsellingTab.tsx`| Table listing students/staff in counselling, the discussed issues, parent meeting status (Scheduled/Completed), and follow-up dates. |
| **Disciplinary Action Modal** | `PrincipalDisciplineActionModal.tsx`| Detail view for an incident where the principal can add remarks/actions (e.g., Warning Issued, Suspended) and save them. |

## AI Instructions & Theming Notes
- **Colors**: Uses the premium 5-color theme. Examples:
  - Critical severity = Red Danger badge.
  - High severity = Amber Warning badge.
  - Parent Meeting Completed = Green Success badge.
  - Table is fully responsive (horizontal scrolling enforced on mobile).
