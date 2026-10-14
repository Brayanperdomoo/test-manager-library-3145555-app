# Manager Library App

Responsive React and TypeScript workspace for library staff. The interface uses the Laravel JSON API through a same-origin `/api/v1` proxy.

## Run locally

```powershell
cd client
npm ci
npm run dev
```

Set `VITE_API_URL` only when the API is hosted at a different origin. The app provides sign-in, book search, member registration and search, loan history, item returns, overdue items, and the most-borrowed report. Admin-only catalog actions are enforced by the API.

## Build and deploy

`client/Dockerfile` creates a static production bundle and serves it with Nginx. The Nginx configuration forwards `/api/` to the internal API service and supports browser routes. From the infrastructure repository, run `docker compose up --build`.

All app copy, code, and documentation are in English. The product rules and API behavior come from the [specification](https://github.com/code-sena/test-manager-library-3145555-docs).
