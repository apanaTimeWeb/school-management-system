# 05. Attendance Management (Principal) — Feature Map

## Module Purpose
The Attendance Management module provides the Principal with a 360-degree view of daily attendance across the school for both Students and Staff. It surfaces smart alerts (e.g., mass absences, habitual latecomers) and acts as an approval center for attendance correction requests submitted by teachers.

## Directory Structure
| Folder | Responsibility |
|---|---|
| `attendance_components/` | Core UI components: Main dashboard orchestrator, Overview Tab, Students Tab, Staff Tab, Requests Tab, and the interactive Correction Modal. |
| `attendance_api/` | Simulated API calls fetching mock attendance numbers, staff logs, and correction requests. |
| `attendance_types/` | Zod schemas and TypeScript interfaces for the diverse attendance data models. |
| `attendance_constants/` | Mock data acting as the backend single-source-of-truth. |
| `attendance_store/` | Zustand state managing active tabs and the Correction Modal's visibility/state. |

## Feature Inventory
| Feature | Component | Description |
|---|---|---|
| **Tabbed Dashboard** | `PrincipalAttendanceMain.tsx` | High-level orchestrator switching between the 4 main modules (Overview, Students, Staff, Requests). |
| **Daily Summary & Alerts** | `PrincipalAttendanceOverviewTab.tsx`| Renders KPI blocks for overall student and staff percentages (Present/Absent/Late). Includes a Smart Alerts section for actionable anomalies. |
| **Student Attendance** | `PrincipalAttendanceStudentsTab.tsx`| Class-wise and Section-wise breakdown of attendance data with visual flags (e.g. red percentage for < 80%). |
| **Staff Attendance** | `PrincipalAttendanceStaffTab.tsx` | Teacher-wise daily logs showing Check-in times and statuses (Present/Late/Absent). |
| **Correction Requests** | `PrincipalAttendanceRequestsTab.tsx` | Lists requests from teachers asking to modify an attendance record post-submission (with reasons). |
| **Correction Approval** | `PrincipalAttendanceCorrectionModal.tsx`| Interactive modal allowing the Principal to review a correction request and finalize it by clicking **Approve** or **Reject**, complete with a loading/success state. |

## Data and State Architecture
- **State Pattern**: Zustand (`usePrincipalAttendanceStore.ts`) handles Tab switching and the Correction Modal state, preventing prop-drilling.
- **Component Limitations**: Splitting the dashboard into 4 independent Tab components ensures strict compliance with the sub-300 line ceiling rule.

## AI Instructions & Theming Notes
- **Responsiveness**: Mobile and Laptop responsiveness is guaranteed by wrapping tables in `<div className="overflow-x-auto">` and using `grid-cols-1 md:grid-cols-2` for layout grids.
- **Colorful Premium UI**: All status badges, trend icons (`TrendingUp`, `TrendingDown`), and action buttons (`Eye`, `Approve/Reject`) utilize the core 5-color palette. For instance, the Approve button uses `bg-success/10 text-success hover:bg-success hover:text-white`.
- **Zero Build Errors**: Verified via explicit `npm run build`.
