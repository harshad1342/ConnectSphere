# ConnectSphere Database

## Overview

PostgreSQL database schema for ConnectSphere using Supabase.

## Setup

### Using Supabase Dashboard

1. Go to your Supabase project
2. Navigate to SQL Editor
3. Create new query
4. Copy content from `schema.sql`
5. Run query

Alternatively:

```bash
# Using psql
psql -h [your-host] -U postgres -d postgres -f schema.sql
```

## Tables

### Users
Stores user profiles and authentication info.

```sql
SELECT * FROM users WHERE id = '...';
```

### Preferences
User preferences for matching and notifications.

### Matches
Mutual matches between users.

### Likes
One-way likes (tracking swipes).

### Messages
Chat messages between matched users.

### Blocks
Blocked users list.

### Travel Plans
User travel plans and destinations.

### Travel Requests
Requests to join travel plans.

### Notifications
User notifications.

### Verification Codes
Email/phone verification codes.

### Activity Logs
User activity tracking.

## Security

- Row Level Security (RLS) enabled
- Policies restrict data access to authenticated users
- Sensitive data protected by RLS policies

## Indexes

All tables have appropriate indexes for:
- User ID lookups
- Time-based queries
- Status filtering
- Geographic queries

## Backups

Supabase automatically backs up your database daily.

### Manual Backup

```bash
pg_dump -h [host] -U postgres [database] > backup.sql
```

## Monitoring

View in Supabase Dashboard:
- Database health
- Query performance
- Storage usage

## Scaling

Supabase auto-scales PostgreSQL:
- Automatic backups
- Point-in-time recovery
- Read replicas (paid)

## References

- [Supabase Docs](https://supabase.com/docs)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
