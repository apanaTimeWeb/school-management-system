# Admin Appointments & Letters Module — Feature Map

## Module Purpose
The Appointments & Letters module allows the HR/Admin to generate official paperwork for staff and teachers. It provides a library of pre-configured templates (Appointment, Experience, Relieving, Salary, Joining) that can be autofilled with employee details, previewed live, and saved/downloaded.

## Directory Structure
| Folder | Responsibility |
|---|---|
| `/admin/hr_letters/` | The core interface for selecting templates, generating letters via a live preview modal, and reviewing the history. |

## Feature Inventory
| Feature | Location | Status |
|---|---|---|
| **Templates Grid** | Primary Tab (`HrLettersTemplates`) | ✅ INTERACTIVE |
| **Letter Generator Modal** | Deep Modal (`HrLettersGeneratorModal`) | ✅ INTERACTIVE |
| **Live Template Autofill** | Inside Deep Modal | ✅ INTERACTIVE (Real-time replacement of `[Employee_Name]`) |
| **PDF Generation Action** | Inside Deep Modal | ✅ MOCKED UI (Buttons exist) |
| **Print Action** | Inside Deep Modal | ✅ MOCKED UI (Buttons exist) |
| **Letter History Table** | Second Tab (`HrLettersHistory`) | ✅ INTERACTIVE |
| **Save to History Action** | Inside Deep Modal | ✅ INTERACTIVE (Creates mock history record instantly) |

## User Flows & Interactions
### Flow 1: Generating a New Letter
1. Admin navigates to `/admin/hr_letters`. The default tab is the **Templates Grid**.
2. Cards display different letter types. Admin clicks the primary **"Generate Letter"** button on the "Experience Certificate" card.
3. **Interaction (Generator Modal):** A massive modal opens. The layout is split into two panels:
   - **Left Panel (Controls):** Search and select an employee. 
   - **Right Panel (Live Preview):** A beautifully styled serif document view. 
4. **Interaction (Live Preview):** When the Admin selects an employee (e.g. *Amit Kumar*), the Live Preview on the right instantly updates, replacing `[Employee_Name]` with the actual selected name.

### Flow 2: Saving and Reviewing History
1. Once the preview looks good, the Admin clicks **"Save to History"**.
2. **Interaction (State Update):** An alert confirms the action. The modal closes, and the app instantly switches to the **"Generated History"** tab. 
3. The newly generated letter now appears at the absolute top of the history list, showing the date, the employee, and the reference number. From there, the Admin can click the "Download PDF" or "Print" buttons.

## Strict Rules Verification Check
- **Rule 4 (No Raw Variables):** Strictly mapped standard Tailwind colors (`text-primary`, `bg-info/10`, `border-success/20`). Zero `[var(...)]` CSS variables were used.
- **Rule 6 (Hooks Isolation):** `useHrLetters` holds the logic for creating the new generated history record and switching tabs dynamically, keeping `HrLettersGeneratorModal` focused on UI.
- **Rule 29 (Motion-Safe):** All tab switches, hovers, and the massive generator modal utilize `motion-safe:animate-in`, `motion-safe:fade-in`, and `motion-safe:zoom-in-95` for an incredibly premium application feel.

