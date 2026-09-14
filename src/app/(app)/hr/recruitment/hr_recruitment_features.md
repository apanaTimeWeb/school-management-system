# Admin Recruitment Module — Feature Map

## Module Purpose
The Recruitment module handles the entire hiring lifecycle for the school. It tracks active **Job Positions** (vacancies) and manages **Candidate Applications** through a structured pipeline (Applied -> Shortlisted -> Interview Scheduled -> Interviewed -> Selected/Rejected -> Joined).

## Directory Structure
| Folder | Responsibility |
|---|---|
| `/admin/hr_recruitment/` | The core interface featuring a tab switcher (`HrRecruitmentTabs`) leading to 2 distinct views: Jobs & Applications. |

## Feature Inventory
| Feature | Location | Status |
|---|---|---|
| **Job Positions** | Primary Tab | ✅ MOCKED |
| **Vacancies View** | Inside Jobs Tab (Cards) | ✅ MOCKED |
| **Job Applications** | Second Tab | ✅ INTERACTIVE |
| **Candidate Profile** | Deep Modal (`HrRecruitmentCandidateModal`) | ✅ INTERACTIVE |
| **Resume/Documents** | Inside Candidate Modal | ✅ MOCKED |
| **Pipeline Actions** | Inside Candidate Modal (Bottom Right Panel) | ✅ INTERACTIVE (State mutations) |
| **Recruitment History** | Inside Candidate Modal (Timeline) | ✅ INTERACTIVE (Auto-updates) |

## User Flows & Interactions
### Flow 1: Reviewing Job Vacancies
1. Admin opens `/admin/hr_recruitment`.
2. The "Job Positions" tab loads by default.
3. Beautiful, hoverable cards display the Job Title, Location, and a visual tracker of "Vacancies" vs "Filled".
4. Green/Red/Yellow badges instantly denote if a position is Open, Closed, or On Hold.

### Flow 2: Moving a Candidate Through the Pipeline
1. Admin switches to the "Job Applications" tab.
2. The table shows candidates. Hovering over a row makes the avatar pop (`scale-110`) and highlights the row.
3. Admin clicks "Review" on an 'Applied' candidate.
4. **Interaction Check 1 (Deep Modal):** A premium screen-centered modal opens. It displays the Candidate's details, an Interview section, and a Recruitment History timeline.
5. **Interaction Check 2 (Pipeline Progression):** In the bottom right action panel, the Admin sees a blue "Shortlist Candidate" button. Clicking it instantly:
   - Updates the Pipeline state to 'Shortlisted'.
   - Adds a new entry to the Recruitment History Timeline right before your eyes.
   - Replaces the action button with a purple "Schedule Interview" button.
6. Admin clicks "Schedule Interview", enters a date, and the pipeline progresses again. This continues through Selected -> Joined.

## Strict Rules Verification Check
- **Rule 4 (No Raw Variables):** Coloring strictly utilizes exact Tailwind mapped colors (`bg-primary`, `bg-info/10`, `text-purple-500`, `border-success`). No `[var(...)]` tokens exist.
- **Rule 6 (Hooks Isolation):** `useHrRecruitment` isolates the complex optimistic UI updates for the candidate pipeline state, keeping JSX purely presentational.
- **Rule 29 (Motion-Safe):** All tab switches, avatar hovers, and deep modal popups utilize `motion-safe:animate-in`, `motion-safe:fade-in`, and `motion-safe:zoom-in-95` for an incredibly premium application feel.

