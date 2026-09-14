# Admin Onboarding Module — Feature Map

## Module Purpose
The Onboarding module ensures a smooth transition for new hires. It tracks the progress of Document Verification, Joining Checklists, and provides the final RBAC (Role-Based Access Control) step to generate a permanent Employee ID and grant System Access.

## Directory Structure
| Folder | Responsibility |
|---|---|
| `/admin/hr_onboarding/` | The core interface for listing onboarding candidates and processing them via a deep modal. |

## Feature Inventory
| Feature | Location | Status |
|---|---|---|
| **New Employee List** | `AdminHrOnboardingList` | ✅ INTERACTIVE |
| **Onboarding Status Progress Bar** | Inside List Table | ✅ INTERACTIVE (Auto-calculates) |
| **Joining Checklist** | Inside `AdminHrOnboardingDetailModal` | ✅ INTERACTIVE |
| **Document Verification** | Inside `AdminHrOnboardingDetailModal` | ✅ INTERACTIVE |
| **System Access Request (RBAC)** | Inside `AdminHrOnboardingDetailModal` | ✅ INTERACTIVE |
| **Employee ID Generation** | Inside `AdminHrOnboardingDetailModal` | ✅ INTERACTIVE (Triggered on Access Grant) |

## User Flows & Interactions
### Flow 1: Tracking Onboarding Progress
1. Admin opens `/admin/hr_onboarding`.
2. A list of candidates appears. A dynamic green **Progress Bar** (e.g., 50%) visually indicates how many documents and checklist items are completed.
3. Clicking on a row opens the deep `OnboardingDetailModal`.

### Flow 2: Completing Checklist & Docs
1. Inside the modal, the Admin sees 3 columns: Checklist, Documents, System Access.
2. **Interaction (Checklist):** Clicking any checklist item instantly toggles it. The UI strikes through the text and changes the circle icon to a solid Green Check (`bg-success/10`).
3. **Interaction (Verification):** Under documents, clicking "Verify" on an uploaded document toggles it to a green "Verified" state.
4. *Note: As items are checked off, closing the modal will reveal the progress bar in the list has automatically updated.*

### Flow 3: RBAC System Access & ID Generation
1. In the third column (highlighted in gold/primary color), there is a control for System Access.
2. As per the user requirement: *"User account create karne ka final control RBAC ke anusar Admin/Super Admin ke paas rah sakta hai"*. 
3. The Admin clicks the **"Grant System Access"** button.
4. **Interaction:** An alert confirms account creation. The UI instantly updates: The button turns into a green success message, and the temporary ID is replaced with a newly generated permanent **Final Employee ID** (e.g. `EMP-2024-812`).

## Strict Rules Verification Check
- **Rule 4 (No Raw Variables):** Strictly Tailwind colors used (`text-success`, `bg-warning/10`, `border-primary`).
- **Rule 6 (Hooks Isolation):** `useAdminHrOnboarding` houses all the complex state mapping required to deeply update a specific checklist item or document inside a specific candidate object.
- **Rule 29 (Motion-Safe):** Modals, hovers, and progress bars utilize standard `transition-all` and `motion-safe` rules for premium fluidity.
