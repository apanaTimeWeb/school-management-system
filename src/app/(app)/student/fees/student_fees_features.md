# Student Fees Management — Feature Map

## Module Purpose
The Student Fees Management module (`/student/fees`) provides students/parents with a comprehensive overview of their financial obligations. It displays top-level KPIs (Total, Paid, Pending), a detailed breakdown of fee installments (including fines/concessions), and a history of past transactions with mock options for payment and receipt downloading.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `student_fees_components/` | Visual layouts for summaries, installments, history, and payment | `StudentFeesMain.tsx`, `StudentFeesSummaryBlocks.tsx`, `StudentFeesInstallments.tsx`, `StudentFeesHistory.tsx`, `StudentFeesPaymentModal.tsx` |
| `student_fees_api/` | Fetches data | `student_fees_api.ts` |
| `student_fees_types/` | Data interfaces | `student_fees_types.ts` |
| `student_fees_constants/` | Mock data for UI testing | `student_fees_constants.ts` |
| `student_fees_utils/` | Helpers like currency formatting | `student_fees_utils.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Summary KPIs | `/student/fees` | View Total Fee, Paid, Pending, and Next Due Date at a glance. | `StudentFeesSummaryBlocks` | `GET /api/student/fees` | ✅ MOCKED |
| Fee Installments | `/student/fees` | See a list of quarters/installments showing base fee, fines, and discounts to arrive at a Net Amount. | `StudentFeesInstallments` | `GET /api/student/fees` | ✅ MOCKED |
| Payment History | `/student/fees` | View past successful/failed transactions and download receipts. | `StudentFeesHistory` | `GET /api/student/fees` | ✅ MOCKED |
| Online Payment | `/student/fees` | Click "Pay Now" on unpaid dues to open a secure mock checkout popup. | `StudentFeesPaymentModal` | N/A | ✅ IMPLEMENTED |
| INR Formatting | Global | See amounts correctly formatted in Indian Rupees (e.g. ₹ 1,20,000). | `student_fees_utils.ts` | N/A | ✅ IMPLEMENTED |

## User Flows & Interactions
### Flow 1: Paying a Fee
1. The user identifies an "Unpaid" or "Overdue" row in `StudentFeesInstallments`.
2. They click the primary "Pay Now" button on that row.
3. The `StudentFeesPaymentModal` mounts, providing a summary breakdown of the exact amount being paid.
4. The user clicks "Pay Securely". A simulated 2-second processing spinner appears to mock a payment gateway delay.
5. On success, an alert is shown, and the modal closes. (In a real app, the API would refetch and the row would turn green/Paid).

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — subfolders used, files < 300 lines.
- [x] Rule 2: Isolation — exclusively in `student/fees`.
- [x] Rule 4: Theme Independence — semantic variables used (`bg-success/10`, `text-danger`).
- [x] Rule 9: Loaders/Errors — custom `loading.tsx` and `error.tsx` implemented.
- [x] Rule 13: Feature Map — this file created.
- [x] Special: Read-Only rule — Student cannot modify any amounts; amounts are strictly fed from the API/mock constants.
