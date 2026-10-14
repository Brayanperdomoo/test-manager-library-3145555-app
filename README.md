# Manager Library App

React operations interface for librarians and administrators. This repository implements the user workflows defined by the [product specification and API contract](https://github.com/code-sena/test-manager-library-3145555-docs).

## Target stack

- React with TypeScript
- Laravel JSON API at `/api/v1`
- English interface, documentation, and validation messages

## Development status

Implementation is in progress. Build accessible, responsive screens for sign-in, catalog search, members, loans, returns, overdue items, and the admin report. Keep network access behind a small API client and handle loading, empty, and error states consistently.

The assessment emphasizes Spec-Driven Development (SDD): apply the product rules from the Python/.NET reference specs to the required React stack.

## Related repositories

- [Product specification](https://github.com/code-sena/test-manager-library-3145555-docs)
- `test-manager-library-3145555-api` — Laravel backend
- `test-manager-library-3145555-infra` — local containers and PostgreSQL
