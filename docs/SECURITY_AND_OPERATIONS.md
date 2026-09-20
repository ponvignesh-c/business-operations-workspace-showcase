# Security and Operations Model

## Production-oriented controls implemented in the private system

- Authenticated API access; business records are not exposed to anonymous users.
- Role-aware user model with admin, manager, and staff access boundaries.
- Admin-only user management, audit access/retention controls, and data export.
- Password-change workflow requiring confirmation of the current password.
- Session expiry configured through an inactivity timeout.
- Audit logging for significant creates, updates, confirmations, and exports.
- Draft/confirm transaction model that avoids accidental stock mutations.
- Database-backed transactional stock service with locking for inventory correctness.

## Data protection choices

- Application settings and database credentials are read from environment variables.
- Local secrets, database files, and backups are excluded from Git.
- Business exports intentionally exclude passwords and session data.
- Document support is link-based in the current private build; controlled uploaded-file storage is a future deployment enhancement.

## Accurate deployment status

The private system is production-minded and runs reliably as a local Docker deployment. Before making any version internet-facing, the following hardening is still required:

1. Deploy behind a production WSGI/ASGI server and HTTPS reverse proxy.
2. Use managed secrets and hardened production database credentials.
3. Set up encrypted, scheduled PostgreSQL backups and restore testing.
4. Configure transactional email for password recovery and optional two-factor authentication.
5. Add CI, automated regression tests, monitoring, and alerting.

This separation is deliberate: local business continuity is supported now, while public-cloud exposure waits for the required operational controls.
