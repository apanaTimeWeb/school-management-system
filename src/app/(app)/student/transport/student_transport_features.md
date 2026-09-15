# Student Transport — Feature Map

## Module Purpose
The Student Transport module (`/student/transport`) provides students and parents with crucial information regarding their school bus route, driver/attendant contact details, pickup/drop timings, and specific transport notifications. If enabled by the school, it also provides a live GPS tracking view.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `student_transport_components/` | Visual UI: Route Details, GPS Map, Notifications | `StudentTransportMain.tsx`, `StudentTransportRouteDetails.tsx`, `StudentTransportGPSMap.tsx`, `StudentTransportNotifications.tsx` |
| `student_transport_api/` | Fetches route, schedule, and live tracking status | `student_transport_api.ts` |
| `student_transport_types/` | Data interfaces | `student_transport_types.ts` |
| `student_transport_constants/` | Mock data for UI testing | `student_transport_constants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Opt-in Check | `/student/transport` | If a student hasn't opted for transport, a clean placeholder is shown instead of empty data. | `StudentTransportMain` | `GET /api/student/transport` | ✅ IMPLEMENTED |
| Route Details | `/student/transport` | View bus number, vehicle type, and click-to-call buttons for Driver and Attendant. | `StudentTransportRouteDetails` | `GET /api/student/transport` | ✅ MOCKED |
| Schedule | `/student/transport` | View assigned stop name, pickup, and drop times. | `StudentTransportRouteDetails` | N/A | ✅ IMPLEMENTED |
| GPS Tracking | `/student/transport` | Only rendered if `gpsEnabled` is true. Simulates a live map with a pulsing bus icon moving on a grid. | `StudentTransportGPSMap` | N/A | ✅ IMPLEMENTED |
| Fee Status | `/student/transport` | Quick view of the monthly transport fee and its Paid/Overdue status. | `StudentTransportRouteDetails` | N/A | ✅ IMPLEMENTED |
| Notifications | `/student/transport` | Read transport-specific updates (e.g., delays, route changes) categorized as Info/Warning/Alert. | `StudentTransportNotifications` | N/A | ✅ IMPLEMENTED |

## User Flows & Interactions
### Flow 1: Live Tracking
1. The user lands on the Transport page.
2. The `StudentTransportMain` checks `data.gpsEnabled`.
3. If true, the `StudentTransportGPSMap` component mounts on the right side (or below on mobile).
4. A CSS-animated pulse effect simulates live GPS pings, while a mockup interface shows ETA and distance to stop.

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — subfolders used, files < 300 lines.
- [x] Rule 2: Isolation — exclusively in `student/transport`.
- [x] Rule 4: Theme Independence — semantic variables used (`bg-success`, `text-danger`, `text-info`).
- [x] Rule 9: Loaders/Errors — custom `loading.tsx` and `error.tsx` implemented.
- [x] Rule 13: Feature Map — this file created.
- [x] User Requirement: "GPS tracking केवल तभी जब school ने enable किया हो" -> Implemented via `gpsEnabled` boolean conditional rendering.
