# ConnectSphere 🌍

**AI-Powered Dating, Hookup & Travel Platform with Dark Romantic UI**

A full-stack application connecting people for dating, relationships, hookups, and travel adventures. Features AI-powered matching, intelligent chatbots, and real-time messaging.

## 🌟 Features

- 🤖 **AI-Powered Matching** - Smart recommendations using NLP
- 💬 **AI Chatbot** - Intelligent conversation assistant
- 📱 **Mobile App** - React Native for iOS/Android
- 🌐 **Web Platform** - Modern React frontend
- 🔐 **Secure Authentication** - JWT + Supabase Auth
- 🗄️ **Database** - Supabase (PostgreSQL)
- 🎨 **Dark Romantic UI** - Premium dark theme design
- ⚡ **Real-time Features** - Live chat, notifications
- 🚀 **Free Deployment** - Ready for Vercel, Railway, Render

## 📁 Project Structure

```
ConnectSphere/
├── backend/                 # FastAPI Python backend
│   ├── app/
│   │   ├── main.py
│   │   ├── config.py
│   │   ├── models/
│   │   ├── routes/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── utils/
│   │   └── ai_chatbot/
│   ├── requirements.txt
│   ├── .env.example
│   └── README.md
├── frontend/                # React + Tailwind CSS
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── styles/
│   │   └── App.tsx
│   ├── package.json
│   ├── tailwind.config.js
│   └── README.md
├── mobile/                  # React Native
│   ├── src/
│   │   ├── screens/
│   │   ├── components/
│   │   ├── navigation/
│   │   ├── services/
│   │   └── App.tsx
│   ├── package.json
│   └── README.md
├── database/                # Supabase Schema
│   ├── migrations/
│   ├── schema.sql
│   └── README.md
└── docs/                    # Documentation
    ├── API.md
    ├── DEPLOYMENT.md
    └── SETUP.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- Python 3.9+
- Git
- Supabase account (free tier available)

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env with your Supabase credentials
python -m uvicorn app.main:app --reload
```

### Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env.local
# Edit .env.local with your API endpoint
npm run dev
```

### Mobile Setup

```bash
cd mobile
npm install
npm start
```

## 🔧 Tech Stack

### Backend
- **FastAPI** - Modern Python web framework
- **Supabase** - PostgreSQL + Auth
- **SQLAlchemy** - ORM
- **Pydantic** - Data validation
- **JWT** - Authentication
- **OpenAI/Hugging Face** - AI/NLP

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **Redux** - State management
- **Framer Motion** - Animations

### Mobile
- **React Native** - Cross-platform
- **Expo** - Development platform
- **React Navigation** - Routing
- **NativeWind** - Tailwind for RN

### Database
- **PostgreSQL** (via Supabase)
- **Realtime subscriptions**
- **Row-level security**

## 🔐 Authentication Flow

1. User signs up via Supabase Auth
2. Backend validates JWT tokens
3. Secure routes protected with middlewares
4. Real-time sync with Supabase

## 🤖 AI/Chatbot Features

- Intent recognition
- Entity extraction
- Conversational matching
- Travel recommendations
- Personality-based suggestions

## 📝 Environment Variables

See `.env.example` files in each directory.

## 🚀 Deployment

### Frontend
- **Vercel** (recommended, free tier)
- **Netlify** (free tier)

### Backend
- **Railway** (free tier, $5/month after)
- **Render** (free tier)
- **Heroku** (paid, but reliable)

### Database
- **Supabase** (free tier with 500MB)

See `docs/DEPLOYMENT.md` for detailed instructions.

## 📚 Documentation

- [API Documentation](docs/API.md)
- [Setup Guide](docs/SETUP.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
- [AI/Chatbot Guide](backend/app/ai_chatbot/README.md)

## 🛠️ Development

### Running Tests

```bash
# Backend
cd backend
pytest

# Frontend
cd frontend
npm test
```

### Code Quality

```bash
# Backend
black .
flake8
pylint app/

# Frontend
npm run lint
npm run format
```

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -am 'Add feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Submit pull request

## 📄 License

MIT License - see LICENSE file

## 🆘 Support

- GitHub Issues: [Report bugs](https://github.com/harshad1342/ConnectSphere/issues)
- Documentation: See `/docs` folder
- Email: your-email@example.com

## 🎯 Roadmap

- [ ] Advanced AI matching algorithm
- [ ] Video chat integration
- [ ] Payment integration (Stripe)
- [ ] Instagram/social media linking
- [ ] Push notifications
- [ ] Analytics dashboard
- [ ] Admin panel
- [ ] Moderation tools

---

**Built with ❤️ for connecting people**
