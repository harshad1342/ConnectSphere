# ConnectSphere API Documentation

## Base URL

```
Production: https://your-backend.railway.app/api/v1
Development: http://localhost:8000/api/v1
```

## Authentication

All endpoints (except auth) require JWT token in header:

```bash
Authorization: Bearer {token}
```

Get token from `/auth/login` or `/auth/signup`

## Error Responses

All errors follow this format:

```json
{
  "detail": "Error message",
  "code": "ERROR_CODE",
  "status_code": 400
}
```

## Endpoints

### Authentication

#### Register User
```
POST /auth/signup
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass123",
  "firstName": "John",
  "lastName": "Doe"
}

Response:
{
  "id": "uuid",
  "email": "user@example.com",
  "token": "eyJhbGc...",
  "user": { ... }
}
```

#### Login
```
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass123"
}

Response:
{
  "token": "eyJhbGc...",
  "user": { ... }
}
```

#### Logout
```
POST /auth/logout
Authorization: Bearer {token}

Response:
{
  "message": "Logged out successfully"
}
```

#### Refresh Token
```
POST /auth/refresh
Authorization: Bearer {token}

Response:
{
  "token": "eyJhbGc..."
}
```

### Users

#### Get Current User
```
GET /users/me
Authorization: Bearer {token}

Response:
{
  "id": "uuid",
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "bio": "Travel enthusiast...",
  "age": 28,
  "gender": "male",
  "interests": ["travel", "hiking"],
  "photos": ["url1", "url2"],
  "location": "New York, NY",
  "createdAt": "2024-01-01T00:00:00Z"
}
```

#### Update Profile
```
PUT /users/me
Authorization: Bearer {token}
Content-Type: application/json

{
  "bio": "Updated bio",
  "age": 29,
  "interests": ["travel", "cooking"],
  "location": "Los Angeles, CA"
}

Response: { updated user object }
```

#### Get User by ID
```
GET /users/{userId}
Authorization: Bearer {token}

Response: { user object }
```

#### Delete Account
```
DELETE /users/me
Authorization: Bearer {token}

Response:
{
  "message": "Account deleted successfully"
}
```

### Matching & Discovery

#### Get Recommended Profiles
```
GET /matches/recommendations?limit=10&offset=0
Authorization: Bearer {token}

Response:
{
  "data": [
    {
      "id": "uuid",
      "firstName": "Jane",
      "age": 26,
      "location": "New York, NY",
      "photos": ["url"],
      "matchScore": 0.95,
      "reason": "Shares interests in travel and hiking"
    }
  ],
  "total": 150,
  "hasMore": true
}
```

#### Like/Swipe Profile
```
POST /matches/like
Authorization: Bearer {token}
Content-Type: application/json

{
  "targetUserId": "uuid",
  "liked": true
}

Response:
{
  "liked": true,
  "mutualMatch": true,
  "message": "It's a match!"
}
```

#### Get Matches
```
GET /matches/list?limit=20&offset=0
Authorization: Bearer {token}

Response:
{
  "data": [
    {
      "id": "uuid",
      "users": [{ ... }, { ... }],
      "createdAt": "2024-01-01T00:00:00Z",
      "lastMessage": "Hey! How are you?"
    }
  ],
  "total": 5
}
```

### Messaging

#### Send Message
```
POST /messages/send
Authorization: Bearer {token}
Content-Type: application/json

{
  "matchId": "uuid",
  "content": "Hey! How are you?",
  "attachments": []
}

Response:
{
  "id": "uuid",
  "matchId": "uuid",
  "senderId": "uuid",
  "content": "Hey! How are you?",
  "createdAt": "2024-01-01T12:00:00Z",
  "read": false
}
```

#### Get Chat History
```
GET /messages/{matchId}?limit=50&offset=0
Authorization: Bearer {token}

Response:
{
  "data": [
    {
      "id": "uuid",
      "senderId": "uuid",
      "content": "Hey!",
      "createdAt": "2024-01-01T12:00:00Z",
      "read": true
    }
  ],
  "total": 50
}
```

#### Mark Message as Read
```
PUT /messages/{messageId}/read
Authorization: Bearer {token}

Response:
{
  "read": true,
  "readAt": "2024-01-01T12:05:00Z"
}
```

### AI Chatbot

#### Get Chat Suggestions
```
POST /ai/suggestions
Authorization: Bearer {token}
Content-Type: application/json

{
  "targetUserId": "uuid",
  "context": "ice breaker"
}

Response:
{
  "suggestions": [
    "I noticed you love hiking. What's your favorite trail?",
    "Are you planning any trips soon?",
    "I see you're interested in photography!"
  ]
}
```

#### AI Conversation
```
POST /ai/chat
Authorization: Bearer {token}
Content-Type: application/json

{
  "message": "Help me write a good opener",
  "context": "mutual interests in travel"
}

Response:
{
  "response": "Here's a great opener: 'I see you love traveling! What's the best place you've visited?'",
  "suggestions": []
}
```

### Travel Plans

#### Create Travel Plan
```
POST /travel/plans
Authorization: Bearer {token}
Content-Type: application/json

{
  "destination": "Paris, France",
  "startDate": "2024-06-01",
  "endDate": "2024-06-15",
  "budget": 2000,
  "interests": ["museums", "dining", "hiking"],
  "description": "Summer vacation"
}

Response:
{
  "id": "uuid",
  "userId": "uuid",
  "destination": "Paris, France",
  "createdAt": "2024-01-01T00:00:00Z"
}
```

#### Find Travel Companions
```
GET /travel/companions?destination=Paris&limit=10
Authorization: Bearer {token}

Response:
{
  "data": [
    {
      "id": "uuid",
      "firstName": "Sophie",
      "destination": "Paris, France",
      "interests": ["museums", "dining"],
      "matchScore": 0.92
    }
  ]
}
```

### Preferences

#### Get Preferences
```
GET /preferences
Authorization: Bearer {token}

Response:
{
  "ageRange": [18, 35],
  "distance": 50,
  "interests": ["travel", "hiking"],
  "relationshipGoal": "dating",
  "notificationSettings": { ... }
}
```

#### Update Preferences
```
PUT /preferences
Authorization: Bearer {token}
Content-Type: application/json

{
  "ageRange": [20, 40],
  "distance": 100,
  "relationshipGoal": "hookup"
}

Response: { updated preferences }
```

## WebSocket (Real-time)

### Connect
```
ws://localhost:8000/ws/{userId}?token={token}
```

### Events

**Message received:**
```json
{
  "type": "message",
  "data": { ... }
}
```

**User typing:**
```json
{
  "type": "typing",
  "userId": "uuid",
  "matchId": "uuid"
}
```

**Match notification:**
```json
{
  "type": "match",
  "data": { ... }
}
```

## Rate Limiting

- 100 requests per minute per user
- 1000 requests per hour per user

Headers:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1640000000
```

## Pagination

All list endpoints support:
- `limit`: Number of items (default: 20, max: 100)
- `offset`: Number of items to skip (default: 0)

## Status Codes

| Code | Meaning |
|------|----------|
| 200 | OK |
| 201 | Created |
| 204 | No Content |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict |
| 429 | Too Many Requests |
| 500 | Server Error |

## Testing

### Using cURL

```bash
# Register
curl -X POST http://localhost:8000/api/v1/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "pass"}'

# Login
curl -X POST http://localhost:8000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "pass"}'

# Get profile (replace TOKEN)
curl -H "Authorization: Bearer TOKEN" \
  http://localhost:8000/api/v1/users/me
```

### Using Postman

1. Import collection from `postman_collection.json`
2. Set `base_url` variable
3. Set `token` variable after login
4. Run requests

## OpenAPI Docs

Automatic API documentation available at:
- Swagger UI: `/docs`
- ReDoc: `/redoc`
- OpenAPI Schema: `/openapi.json`

---

**API v1 - Last Updated: January 2024**
