# Accountant Payment Methods — Feature Map

## Module Purpose
The Payment Methods module acts as a Configuration and Analytics dashboard. The accountant can view which payment methods (Cash, UPI, Cheque, Online Gateway) are active, monitor YTD collections for each, and update integration/display details (like bank account numbers or UPI IDs shown on receipts).

## Directory Structure

| Folder | Responsibility | Key Files |
|---|---|---|
| `accountant_methods_components/` | UI grid for displaying methods and modals for configuration. | `AccountantMethodsMain.tsx`, `AccountantMethodsMetrics.tsx`, `AccountantMethodsHeader.tsx`, `AccountantMethodsGrid.tsx`, `AccountantMethodsModals.tsx` |
| `accountant_methods_store/` | Zustand state orchestrating modal popups and search filters. | `useAccountantMethodsStore.ts` |
| `accountant_methods_types/` | Data shapes mapping method states (Active, Inactive, Under Maintenance). | `AccountantMethodsTypes.ts` |
| `accountant_methods_utils/` | Mock payload demonstrating diverse payment channels and their config details. | `AccountantMethodsConstants.ts` |

## Feature Inventory

| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Payment Methods Grid | `/accountant/payment-methods` | View cards for Cash, UPI, Card, Bank, Cheque, Gateway | `AccountantMethodsGrid` | Mocked | ✅ Live |
| KPI Metrics | `/accountant/payment-methods` | Track Online vs Offline Total Collections YTD | `AccountantMethodsMetrics` | Mocked | ✅ Live |
| Configure Settings | `/accountant/payment-methods` | Enable/Disable a method and update its instructions | `AccountantMethodsModals` | Mocked | ✅ Live |
| Search Filters | `/accountant/payment-methods` | Search for a specific method | `AccountantMethodsHeader` | Mocked | ✅ Live |

## User Flows & Interactions

### Flow 1: Update Bank Transfer Details
1. User finds the "Bank Transfer" card in the grid.
2. Clicks "Configure Settings".
3. A modal opens showing the current status (Active).
4. User updates the "Configuration Details / Instructions" textarea (e.g., updating IFSC code).
5. Clicking "Save Configuration" commits the change. (A banner warns that changes reflect immediately on parent portals).

## Data and State Architecture

- **State pattern:** Zustand (`useAccountantMethodsStore`).
- **Dynamic Icons:** The Grid component explicitly maps specific `lucide-react` icons (Banknote, Smartphone, Landmark) based on the method name to provide a highly visual dashboard.

## Rule Compliance Checklist

- [x] Rule 1: Micro-modularization — organized in subfolders.
- [x] Rule 2: Total Role Isolation — limited to accountant's payment configuration scope.
- [x] Rule 4: Theme Independence — uses strict `primary`, `info`, `warning`, `success` colors for statuses and icons.
- [x] Rule 5: Smart State Management — Zustand handles the edit modal perfectly.
