# Smart University — Frontend

React + TypeScript + Vite + Tailwind. Student, Faculty, HOD and Admin portals for the Smart University backend.

## Run it

```bash
npm install
npm run dev          # http://localhost:5173
```

`.env` ships with `VITE_DEMO_MODE=true`, so every screen works on sample data with no backend.
Demo logins (password `demo1234`): `student@demo.edu`, `faculty@demo.edu`, `hod@demo.edu`, `admin@demo.edu`.

To use the real backend, set `VITE_DEMO_MODE=false` and `VITE_API_URL` (default `http://localhost:8000/api`).
The backend's CORS list already allows `http://localhost:5173`.

## What is built

| Role | Screens |
|---|---|
| Everyone | Sign in, notifications, account and password change |
| Student | Dashboard, attendance (per-subject + "classes you can miss" calculator), permission requests with approval history, learning tracks, jobs with eligibility and skill-match, application pipeline, resume/ATS check, profile |
| Faculty / HOD | Dashboard, mark attendance (bulk), review permission requests (approve / reject / ask for clarification) |
| Admin / Super admin | Overview, users (add staff, deactivate), AI knowledge documents, audit log |

Eligibility and skill-match use the same formulas as `app/ai/career_match.py`. The attendance calculator uses the same formula as `AttendanceService`.

## Connecting to the backend

All URLs live in **`src/lib/endpoints.ts`**. The backend you sent has models, schemas and services but no `main.py` and an empty `app/api/`, so no routes exist yet. Each path in that file is marked *blueprint* (from the Master Blueprint API table) or *proposed* (the model exists but no route is documented). Build the routers to match, or change the paths there.

Response handling (`src/lib/api.ts`) accepts either bare JSON or the `{ success, message, data, meta }` envelope, lists as `[...]` or `{ items: [...] }`, and both `{ message, error_code }` and FastAPI `{ detail }` errors. Access tokens refresh automatically on a 401.

Routes the frontend expects beyond the blueprint (all in `endpoints.ts`):
`GET /students/me`, `PATCH /students/me`, `GET /attendance/me`, `POST /attendance/bulk`, `GET /faculty/me/classes`, `GET /faculty/classes/{subject_id}/students`, `POST /permissions/{id}/approve|reject|clarify`, `POST /jobs/{id}/apply`, `GET /placements/me`, `GET /resumes/me`, `POST /resumes/analyze` (multipart), `GET /admin/overview|users|audit-logs|knowledge`, `PATCH /admin/users/{id}`, `POST /auth/change-password`.

## Not built yet (from the Additional Features PDF)

AI chat/study planner, interview simulator, project mentor, quizzes, campus services, events, alumni, digital credentials, PWA/offline, feature flags. The backend has no AI chat or quiz routes yet, so there is nothing to connect them to.

## Notes

- Route guards only hide pages. Enforce roles and ownership in the backend.
- Tokens are kept in `localStorage`. The blueprint prefers an HttpOnly refresh cookie; move to that when the backend supports it.
- Registration from the sign-up page is student-only. Staff accounts are created from Admin → Users.
