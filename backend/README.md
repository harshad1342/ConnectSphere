# ConnectSphere Backend

## Overview

FastAPI-based backend for ConnectSphere dating and travel platform.

## Quick Start

### Prerequisites

- Python 3.9+
- pip or conda
- PostgreSQL (via Supabase)

### Installation

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Setup environment
cp .env.example .env
# Edit .env with your credentials

# Run server
python -m uvicorn app.main:app --reload
```

Server runs at: http://localhost:8000

API Documentation:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Project Structure

```
app/
├── main.py              # Application entry point
├── config.py            # Configuration settings
├── models/              # SQLAlchemy models
├── routes/              # API endpoints
│   ├── auth.py
│   ├── users.py
│   ├── matches.py
│   ├── messages.py
│   ├── ai.py
│   └── travel.py
├── schemas/             # Pydantic schemas
├── services/            # Business logic
│   ├── auth_service.py
│   ├── matching_service.py
│   └── ai_service.py
├── ai_chatbot/          # AI features
└── utils/               # Helper functions
```

## API Endpoints

### Authentication
- `POST /api/v1/auth/signup` - Register new user
- `POST /api/v1/auth/login` - Login user
- `POST /api/v1/auth/logout` - Logout user
- `POST /api/v1/auth/refresh` - Refresh token

### Users
- `GET /api/v1/users/me` - Get current user
- `PUT /api/v1/users/me` - Update profile
- `GET /api/v1/users/{id}` - Get user profile
- `DELETE /api/v1/users/me` - Delete account

### Matches
- `GET /api/v1/matches/recommendations` - Get recommendations
- `POST /api/v1/matches/like` - Like/swipe profile
- `GET /api/v1/matches/list` - Get matches

### Messages
- `POST /api/v1/messages/send` - Send message
- `GET /api/v1/messages/{match_id}` - Get chat history
- `WS /api/v1/messages/ws/{user_id}` - WebSocket for real-time chat

### AI & Chatbot
- `POST /api/v1/ai/suggestions` - Get chat suggestions
- `POST /api/v1/ai/chat` - AI chatbot
- `POST /api/v1/ai/analyze-compatibility` - Analyze compatibility

### Travel
- `POST /api/v1/travel/plans` - Create travel plan
- `GET /api/v1/travel/companions` - Find travel companions
- `POST /api/v1/travel/companions/{id}/request` - Request to join plan

## Testing

```bash
# Run all tests
pytest

# Run with coverage
pytest --cov=app

# Run specific test file
pytest tests/test_auth.py
```

## Code Quality

```bash
# Format code
black app/

# Lint code
flake8 app/
pylint app/

# Type checking
mypy app/
```

## Environment Variables

See `.env.example` for all available variables.

## Database

Using Supabase (PostgreSQL):

```bash
# Run migrations
cd database
psql -h [host] -U postgres -d postgres -f schema.sql
```

## Deployment

See `../docs/DEPLOYMENT.md` for production deployment.

## Features

✅ User authentication (JWT + Supabase Auth)
✅ Profile management
✅ Matching algorithm
✅ Real-time messaging (WebSocket)
✅ AI-powered suggestions
✅ Travel companion matching
✅ Rate limiting
✅ CORS support

## Technologies

- FastAPI
- SQLAlchemy
- Pydantic
- PostgreSQL (Supabase)
- OpenAI API
- JWT Authentication

## Contributing

1. Create feature branch
2. Make changes
3. Run tests
4. Submit PR

## License

MIT
