# Admin ID Cards Generator Module — Feature Map

## Module Purpose
The ID Cards module provides a sleek interface to visually generate and print official School/Gym ID cards for Employees, Teachers, and Staff. It supports single-card previewing as well as a bulk-generation carousel for massive print runs.

## Directory Structure
| Folder | Responsibility |
|---|---|
| `/admin/hr_id_cards/` | Core interface for filtering staff, rendering physical card previews, and triggering print logic. |

## Feature Inventory
| Feature | Location | Status |
|---|---|---|
| **Employee List with Checkboxes** | Main View (`AdminHrIdCardsList`) | ✅ INTERACTIVE |
| **Bulk Selection Toggle** | Table Header | ✅ INTERACTIVE |
| **Bulk Generate Button** | Top Action Bar | ✅ DYNAMIC (Disables if none selected) |
| **Physical Card UI Renderer**| Component (`AdminHrIdCardVisual`) | ✅ IMPLEMENTED (CSS heavily styled) |
| **Role Based Colors** | Inside Card Renderer | ✅ DYNAMIC (Gold for Teacher, Blue for Staff, etc.) |
| **QR Code & Photo Placeholder**| Inside Card Renderer | ✅ MOCKED |
| **Preview Carousel Modal** | Deep Modal (`AdminHrIdCardsPreviewModal`) | ✅ INTERACTIVE |
| **Print Action** | Inside Modal | ✅ INTERACTIVE (Updates state to "Printed") |

## User Flows & Interactions
### Flow 1: Visualizing a Single ID Card
1. Admin navigates to `/admin/hr_id_cards`.
2. Admin sees a list of staff. Under the "Action" column, the Admin clicks **"Preview Card"** for a specific teacher.
3. **Interaction (Deep Rendering):** A modal opens containing the highly realistic `AdminHrIdCardVisual`. The top banner is dynamically colored (e.g., Gold for Teachers, Red for Admins). It displays the EMP ID, Name, Photo placeholder, Blood Group, and a QR Code.

### Flow 2: Bulk Generation (The Carousel)
1. In the main list, the Admin checks the boxes next to 3 different employees.
2. The Admin clicks the **"Bulk Generate (3)"** button at the top.
3. **Interaction (Carousel):** The modal opens showing the first ID card. There are circular **Chevron buttons** (Left/Right) allowing the Admin to slide through the preview of all 3 generated cards before printing.

### Flow 3: Printing
1. While in the preview modal, the Admin clicks **"Send X Cards to Printer"**.
2. **State Logic:** An alert confirms the print job. The modal closes, and the main table instantly updates those specific 3 employees from a Yellow "Not Printed" badge to a Green "Printed" badge. The checkboxes are automatically cleared.

## Strict Rules Verification Check
- **Rule 4 (No Raw Variables):** Strictly mapped standard Tailwind colors. The ID Card itself uses specific standard colors to look realistic (`text-gray-900`, `bg-primary`, `bg-danger`), avoiding raw hex variables.
- **Rule 6 (Hooks Isolation):** `useAdminHrIdCards` safely handles the array manipulation for checkboxes (`selectedIds`), tracking the print status, and controlling the modal carousel array.
- **Rule 29 (Motion-Safe):** The modal uses `motion-safe:zoom-in-95` to make the realistic ID card pop onto the screen with a premium feel.
