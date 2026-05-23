# ConnectSphere - Deployment Guide

## Overview

This guide covers deploying all components to free/affordable hosting platforms.

## 1. Frontend Deployment (Vercel)

### Prerequisites
- Frontend code ready
- GitHub account
- Vercel account (free)

### Deploy to Vercel

#### Option A: Using GitHub (Recommended)

1. Push frontend to GitHub
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. Go to https://vercel.com
3. Click "New Project"
4. Select your GitHub repository
5. Configure:
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Start Command**: `npm run preview`

6. Add Environment Variables:
   ```
   VITE_API_URL=https://your-backend-url.com
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

7. Click "Deploy"

#### Option B: Using CLI

```bash
cd frontend
npm install -g vercel
vercel login
vercel
```

### Frontend URL
Your app will be available at: `https://your-project.vercel.app`

## 2. Backend Deployment (Railway)

### Prerequisites
- Backend code ready
- Railway account (free tier: $5/month credits)
- GitHub account

### Deploy to Railway

1. Go to https://railway.app
2. Login with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Authorize and select `ConnectSphere`
6. Configure:
   - **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
   - **Python Version**: `3.9`

7. Add Environment Variables in Railway Dashboard:
   ```
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   SECRET_KEY=your-secret-key
   ALGORITHM=HS256
   OPENAI_API_KEY=sk-your-key
   ALLOWED_ORIGINS=https://your-frontend.vercel.app,https://your-domain.com
   DEBUG=False
   ```

8. Railway automatically deploys on git push

### Backend URL
Find your URL in Railway Dashboard under "Deployments"
Format: `https://your-app-name.up.railway.app`

## 3. Backend Deployment (Render - Alternative)

If Railway doesn't work for you:

1. Go to https://render.com
2. Sign up with GitHub
3. Create "New Web Service"
4. Connect GitHub repository
5. Configure:
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
   - **Environment**: Python 3.9

6. Add same environment variables as above
7. Deploy

## 4. Database (Supabase - Already Done)

Supabase is already hosting your PostgreSQL database.

### Backup Data

```bash
# In Supabase Dashboard:
# Settings → Backups
# Enable weekly automated backups
```

## 5. Custom Domain Setup

### For Vercel (Frontend)

1. Go to Vercel Dashboard → Project Settings → Domains
2. Add your custom domain
3. Update DNS records:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### For Railway (Backend)

1. Go to Railway Dashboard → Project
2. Click "Domains"
3. Add custom domain
4. Update DNS records as instructed

## 6. SSL/HTTPS

- ✅ Vercel: Automatic
- ✅ Railway: Automatic
- ✅ Supabase: Automatic

No additional setup needed!

## 7. CI/CD Pipeline

### GitHub Actions (Automatic)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Set up Python
        uses: actions/setup-python@v2
        with:
          python-version: 3.9
      
      - name: Install dependencies
        run: |
          cd backend
          pip install -r requirements.txt
      
      - name: Run tests
        run: |
          cd backend
          pytest
      
      - name: Set up Node
        uses: actions/setup-node@v2
        with:
          node-version: 16
      
      - name: Test frontend
        run: |
          cd frontend
          npm install
          npm test
```

## 8. Monitoring & Logs

### Railway Logs
```
Dashboard → Project → Logs
```

### Vercel Logs
```
Dashboard → Project → Deployments → View Log
```

### Supabase Logs
```
Dashboard → Logs
```

## 9. Performance Optimization

### Frontend
```bash
cd frontend
npm run build
# Check bundle size
npm install -g source-map-explorer
source-map-explorer 'dist/**/*.js'
```

### Backend
- Use PostgreSQL connection pooling
- Enable caching
- Optimize database queries

## 10. Security Checklist

- [ ] All secrets in environment variables (never in code)
- [ ] HTTPS enabled
- [ ] CORS properly configured
- [ ] Database backups enabled
- [ ] Rate limiting configured
- [ ] API keys rotated regularly
- [ ] Monitoring enabled
- [ ] Error logging configured

## 11. Cost Breakdown

| Service | Free Tier | Monthly Cost |
|---------|-----------|---------------|
| Vercel | 100 GB bandwidth | $20 (Pro, optional) |
| Railway | $5 credits | $5-20/month |
| Supabase | 500 MB database | $25/month (when needed) |
| OpenAI API | Pay per use | ~$5-50/month |
| **Total** | **Free to start** | **~$30-95/month** |

## 12. Troubleshooting

### Deployment Failed

**Check logs in deployment dashboard**

```bash
# Check if requirements are correct
cd backend
pip install -r requirements.txt --dry-run
```

### API not responding

1. Check backend is deployed
2. Verify environment variables
3. Check Supabase is active
4. Review logs for errors

### CORS errors

```python
# In backend/app/config.py
ALLOWED_ORIGINS = [
    "https://your-vercel-domain.com",
    "https://your-custom-domain.com",
]
```

## 13. Post-Deployment

1. Test all features
2. Monitor error logs
3. Check performance metrics
4. Set up alerts
5. Plan scaling strategy

## Quick Deploy Command

```bash
# Deploy everything
./deploy.sh  # (if available in repo)

# Or manually:
cd frontend && npm run build && npm run deploy
cd ../backend && git push origin main
# Automatic deployment via GitHub Actions
```

## Support

- Vercel Docs: https://vercel.com/docs
- Railway Docs: https://docs.railway.app
- Render Docs: https://render.com/docs
- Supabase Docs: https://supabase.com/docs

---

**Your app is now live and accessible to the world! 🚀**
