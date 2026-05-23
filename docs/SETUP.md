# ConnectSphere - Complete Setup Guide

## Prerequisites

### Required Software
1. **Git** - Version control
2. **Node.js** - v16 or higher (for frontend & mobile)
3. **Python** - v3.9 or higher (for backend)
4. **npm** or **yarn** - Package managers
5. **PostgreSQL** - For local development (optional, we use Supabase)

### Online Accounts (Free)
1. **GitHub** - https://github.com
2. **Supabase** - https://supabase.com (free tier)
3. **Vercel** - https://vercel.com (free tier)
4. **Railway** or **Render** - For backend hosting

## Step 1: Clone Repository

```bash
git clone https://github.com/harshad1342/ConnectSphere.git
cd ConnectSphere
```

## Step 2: Setup Supabase (Database)

### Create Supabase Project

1. Go to https://supabase.com
2. Sign up with GitHub (easier)
3. Create new project
4. Wait for database initialization (2-3 minutes)
5. Get your credentials:
   - **Project URL**: Supabase Dashboard → Settings → API
   - **Anon Key**: Same location
   - **Service Role Key**: Same location

### Initialize Database Schema

```bash
# Run migrations
cd database
psql -h [your-supabase-host] -U postgres -d postgres -f schema.sql
```

Or use Supabase Dashboard → SQL Editor → Paste content from `database/schema.sql`

## Step 3: Backend Setup

### Create Virtual Environment

```bash
cd backend

# On macOS/Linux
python3 -m venv venv
source venv/bin/activate

# On Windows
python -m venv venv
venv\Scripts\activate
```

### Install Dependencies

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

### Configure Environment

```bash
cp .env.example .env
```

Edit `.env` with your values:

```env
# Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# JWT
SECRET_KEY=your-secret-key-generate-with-openssl
ALGORITHM=HS256

# AI/Chatbot
OPENAI_API_KEY=sk-your-key-here  # From https://platform.openai.com

# Server
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173
DEBUG=True
```

### Run Backend

```bash
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Backend runs at: http://localhost:8000
API Docs: http://localhost:8000/docs

## Step 4: Frontend Setup

### Install Dependencies

```bash
cd frontend
npm install
```

### Configure Environment

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
VITE_API_URL=http://localhost:8000
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Run Frontend

```bash
npm run dev
```

Frontend runs at: http://localhost:5173 (Vite)

## Step 5: Mobile Setup

### Install Dependencies

```bash
cd mobile
npm install
```

### Configure Environment

```bash
cp .env.example .env
```

Edit `.env`:

```env
EXPO_PUBLIC_API_URL=http://localhost:8000
EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### Run Mobile

#### Option A: Expo Go (Easiest)

```bash
npm start
# Scan QR code with Expo Go app
```

#### Option B: iOS Simulator

```bash
npm run ios
```

#### Option C: Android Emulator

```bash
npm run android
```

## Generating Secret Key

```bash
# macOS/Linux
openssl rand -hex 32

# Windows (PowerShell)
[System.Convert]::ToHexString([System.Security.Cryptography.RandomNumberGenerator]::GetBytes(32))
```

## Testing Setup

### Backend Tests

```bash
cd backend
pytest -v
pytest --cov=app  # With coverage
```

### Frontend Tests

```bash
cd frontend
npm test
npm test -- --coverage
```

## Troubleshooting

### Backend Issues

**Error: ModuleNotFoundError**
```bash
# Ensure virtual environment is activated
source venv/bin/activate
pip install -r requirements.txt
```

**Error: Connection to Supabase failed**
- Check `.env` file has correct credentials
- Verify Supabase project is active
- Check network connection

### Frontend Issues

**Error: npm ERR! code ERESOLVE**
```bash
npm install --legacy-peer-deps
```

**Port 5173 already in use**
```bash
npm run dev -- --port 3000
```

### Mobile Issues

**Error: Expo not found**
```bash
npm install -g expo-cli
```

**QR code not scanning**
- Ensure phone is on same WiFi
- Check firewall isn't blocking port 19000

## Useful Commands

### Backend
```bash
# Format code
black app/

# Lint
flake8 app/
pylint app/

# Type checking
mypy app/
```

### Frontend
```bash
# Format code
npm run format

# Lint
npm run lint

# Build
npm run build
```

## Next Steps

1. ✅ Complete this setup
2. 📚 Read API documentation
3. 🔐 Implement authentication
4. 🎨 Customize UI/theme
5. 🚀 Deploy to production

See `DEPLOYMENT.md` for production setup.
