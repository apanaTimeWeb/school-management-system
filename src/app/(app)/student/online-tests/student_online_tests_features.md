# Student Online Tests — Feature Map

## Module Purpose
The Student Online Tests module (`/student/online-tests`) is a mini-application that allows students to view pending assessments, take timed quizzes in a distraction-free UI, and view their immediate results and past attempt history.

## Directory Structure
| Folder | Responsibility | Key Files |
|---|---|---|
| `student_online_tests_components/` | State router, Dashboard, Test Runner, Result Modal | `StudentOnlineTestsMain.tsx`, `StudentOnlineTestsDashboard.tsx`, `StudentActiveTestRunner.tsx`, `StudentTestResultModal.tsx` |
| `student_online_tests_api/` | Fetches test list and questions | `student_online_tests_api.ts` |
| `student_online_tests_types/` | Data interfaces for Tests, Questions, and History | `student_online_tests_types.ts` |
| `student_online_tests_constants/` | Mock questions and test data | `student_online_tests_constants.ts` |

## Feature Inventory
| Feature | Route | What the User Can Do | Key Components | Main API Calls | Status |
|---|---|---|---|---|---|
| Dashboard View | `/student/online-tests` | See grid of available tests and list of past attempts. | `StudentOnlineTestsDashboard` | `GET /api/student/online-tests` | ✅ MOCKED |
| Start Test | `/student/online-tests` | Click "Start Test Now" to mount the Test Runner over the dashboard. | `StudentOnlineTestsMain` | Client State transition | ✅ IMPLEMENTED |
| Test Runner | `/student/online-tests` | Read questions, select options, track time with a countdown timer, and navigate via Next/Prev or Question Grid. | `StudentActiveTestRunner` | N/A | ✅ IMPLEMENTED |
| Result Modal | `/student/online-tests` | See Pass/Fail status, percentage, and score immediately after clicking Submit or auto-submit on timeout. | `StudentTestResultModal` | N/A | ✅ IMPLEMENTED |

## User Flows & Interactions
### Flow 1: Taking a Test
1. The user clicks "Start Test Now" on a card in the `StudentOnlineTestsDashboard`.
2. The `StudentOnlineTestsMain` state changes `activeTest` from `null` to the test object.
3. The `StudentActiveTestRunner` mounts (full screen absolute overlay).
4. The user selects options. The right sidebar shows a "Question Map" (Attempted vs Not Attempted).
5. The top bar shows a countdown timer. If it reaches 0, the test auto-submits.
6. The user clicks "Submit Test". A mock calculation grades the test instantly.
7. The runner unmounts, and the `StudentTestResultModal` displays showing a Trophy (Pass) or Frown (Fail).

## Rule Compliance Checklist
- [x] Rule 1: Micro-modularization — subfolders used, files < 300 lines.
- [x] Rule 2: Isolation — exclusively in `student/online-tests`.
- [x] Rule 4: Theme Independence — semantic variables used (`bg-success`, `text-danger`).
- [x] Rule 9: Loaders/Errors — custom `loading.tsx` and `error.tsx` implemented.
- [x] Rule 13: Feature Map — this file created.
- [x] Rule 29: Motion Accessibility — `motion-safe:animate-[fadeIn_0.3s_ease-out]` used for Runner and Modal.
