# ConnectSphere - Complete Platform Setup

AI-powered dating, hookup, and travel platform with mobile and web apps.

## 🚀 Project Status

✅ **Backend** - FastAPI with Supabase
✅ **Frontend** - React + Tailwind CSS (Dark Romantic Theme)
✅ **Mobile** - React Native with Expo
✅ **Database** - PostgreSQL Schema
✅ **Documentation** - Complete guides
⏳ **Next Steps** - Configure and Deploy

## 📁 What's Included

### Backend (`/backend`)
- FastAPI application
- Authentication (JWT + Supabase Auth)
- User matching algorithm
- Real-time messaging (WebSocket)
- AI/Chatbot integration
- Travel companion matching
- API endpoints with full documentation

### Frontend (`/frontend`)
- React 18 with TypeScript
- Tailwind CSS dark romantic theme
- Responsive design
- Pages: Home, Auth, Discover, Matches, Chat, Profile, Travel
- Real-time chat UI
- Dark mode by default

### Mobile (`/mobile`)
- React Native with Expo
- Same features as web
- iOS/Android support
- Dark theme
- Native navigation

### Database (`/database`)
- PostgreSQL schema
- 10+ tables with relationships
- Row-level security
- Indexes for performance
- Ready for Supabase

### Documentation (`/docs`)
- Setup guide
- API documentation  
- Deployment guide
- Architecture overview

## ⚡ Quick Start (Development)

### Prerequisites
- Node.js 16+
- Python 3.9+
- Git
- Free accounts:
  - Supabase (database)
  - Vercel (frontend hosting)
  - Railway (backend hosting)
  - OpenAI (for AI features)

### 1. Setup Database

```bash
# Go to https://supabase.com
# Create free project
# Copy credentials
# Run database/schema.sql in SQL Editor
```

### 2. Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env with Supabase credentials
python -m uvicorn app.main:app --reload
```

Backend: http://localhost:8000
API Docs: http://localhost:8000/docs

### 3. Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env.local
# Edit .env.local with API URL
npm run dev
```

Frontend: http://localhost:5173

### 4. Mobile Setup

```bash
cd mobile
npm install
cp .env.example .env
npm start
# Scan QR code with Expo Go app
```

## 📊 Architecture

```
┌─────────────────────────────────────────┐
│          Frontend (React)               │
│      + Mobile (React Native)            │
└────────────────────┬────────────────────┘
                     │ HTTP/WebSocket
┌────────────────────▼────────────────────┐
│        Backend (FastAPI)                │
│   - Auth, Matching, Messaging, AI       │
└────────────────────┬────────────────────┘
                     │ SQL
┌────────────────────▼────────────────────┐
│   Database (PostgreSQL via Supabase)    │
│   - Users, Matches, Messages, Travel    │
└─────────────────────────────────────────┘
```

## 🔑 Key Features

### Authentication
- Email/password signup
- JWT tokens
- Session management
- Password reset
- Email verification

### Matching
- AI-powered recommendations
- Compatibility scoring
- Interest-based matching
- Location-based filtering
- Swipe/like system

### Messaging
- Real-time chat (WebSocket)
- Message history
- Read receipts
- Typing indicators
- Message attachments

### AI Features
- Chat suggestions
- Profile analysis
- Intelligent openers
- Compatibility analysis

### Travel
- Travel plan creation
- Find travel companions
- Travel requests
- Destination filtering

## 🎨 Design Highlights

- **Dark Romantic Theme**: Purple, pink, rose gradients on dark background
- **Responsive**: Mobile-first design
- **Accessibility**: WCAG compliance
- **Animations**: Smooth transitions with Framer Motion
- **Glass Effect**: Modern glassmorphism design

## 🚢 Deployment

### Frontend (Vercel)
```bash
cd frontend
npm run build
# Deploy to Vercel
vercel
```

### Backend (Railway)
```bash
cd backend
git push origin main
# Auto-deploys from GitHub
```

### Mobile
```bash
cd mobile
exp build:ios
exp build:android
```

See `docs/DEPLOYMENT.md` for detailed instructions.

## 💰 Cost Breakdown

| Service | Free Tier | Cost |
|---------|-----------|-------|
| Supabase | 500MB DB | Free to start |
| Vercel | 100GB BW | Free tier |
| Railway | $5 credits | $0-20/mo |
| OpenAI | Pay-per-use | ~$5-50/mo |
| Domain | - | ~$12/year |
| **Total** | **Free to start** | **~$50-100/mo** |

## 📚 Documentation

- [Setup Guide](docs/SETUP.md)
- [API Documentation](docs/API.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
- [Backend README](backend/README.md)
- [Frontend README](frontend/README.md)
- [Mobile README](mobile/README.md)

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m 'Add feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Open pull request

## 🐛 Troubleshooting

### Backend Issues
- Check `.env` file exists and has correct credentials
- Verify Supabase project is active
- Run `pip install -r requirements.txt` again

### Frontend Issues
- Clear node_modules: `rm -rf node_modules && npm install`
- Check port 5173 is available
- Verify `.env.local` has correct API URL

### Mobile Issues
- Update Expo: `npm install -g expo-cli@latest`
- Clear cache: `exp start --clear`
- Check Node version: `node --version`

## 📞 Support

- GitHub Issues: Report bugs
- Discussions: Ask questions
- Docs: See documentation folder

## 📄 License

MIT License - See LICENSE file

## 🎉 Getting Started Checklist

- [ ] Create Supabase account
- [ ] Create Railway account
- [ ] Create Vercel account  
- [ ] Clone repository
- [ ] Setup backend
- [ ] Setup frontend
- [ ] Setup mobile
- [ ] Configure environment variables
- [ ] Test locally
- [ ] Deploy to production

---

**Built with ❤️ for connecting people**

[GitHub](https://github.com/harshad1342/ConnectSphere) | [Live Demo](https://connectsphere.vercel.app)
