# Admin HR Search Module — Feature Map

## Module Purpose
The Advanced Search & Filters module provides a robust, multi-parameter search hub to query the master employee directory. It implements all 10 filter parameters specified in the checklist and provides deep profile previews for the results.

## Directory Structure
| Folder | Responsibility |
|---|---|
| `/admin/hr_search/` | Contains the massive Filter grid, the responsive Search Results table, and the Profile Preview Modal. |

## Feature Inventory
| Feature | Location | Status |
|---|---|---|
| **Multi-Parameter Search Hub** | `AdminHrSearchFilters` | ✅ INTERACTIVE |
| **Search by Name / ID** | Inside Filters Grid | ✅ IMPLEMENTED |
| **Search by Dept / Designation** | Inside Filters Grid | ✅ IMPLEMENTED |
| **Search by Emp Type / Status** | Inside Filters Grid | ✅ IMPLEMENTED |
| **Search by Date Range** | Inside Filters Grid | ✅ IMPLEMENTED (Join From / Join To) |
| **Search by Qual / Location / Docs** | Inside Filters Grid | ✅ IMPLEMENTED |
| **Debounced Search Results Table** | `AdminHrSearchResults` | ✅ IMPLEMENTED |
| **Deep Profile Summary Modal**| `AdminHrSearchProfileModal` | ✅ INTERACTIVE |

## User Flows & Interactions
### Flow 1: Advanced Filtering
1. Admin navigates to `/admin/hr_search`.
2. A massive filter grid is presented at the top.
3. As the Admin types a keyword or changes any dropdown (e.g., changes Department to "Science"), a debounce timer triggers.
4. **Interaction (Loading State):** A semi-transparent overlay with a loading spinner instantly covers the results table, indicating the search is processing.
5. The table updates with the filtered mock database results, and the top counter updates (e.g., "3 found").
6. Admin clicks "Clear All" to instantly reset all 10 filters.

### Flow 2: Viewing Employee Profile
1. From the filtered results, the Admin clicks the **"View"** button on a specific employee row.
2. **Interaction (Profile Modal):** A deep modal opens featuring a sleek UI design. It includes a gradient header, an overlapping circular avatar, and a clean grid layout detailing their Employment, Contact, and Qualification details.

## Strict Rules Verification Check
- **Rule 4 (No Raw Variables):** Fully compliant. Status badges use `bg-success/10 text-success`, `bg-warning/10 text-warning`. The modal header uses `bg-gradient-to-r from-primary/80 to-primary`.
- **Rule 6 (Hooks Isolation):** `useAdminHrSearch` manages all 10 filter states in a single object, handles the debounce logic `setTimeout`, and manages the modal state, keeping the UI completely declarative.
