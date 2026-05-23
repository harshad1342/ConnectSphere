"""Main application entry point."""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from contextlib import asynccontextmanager

from app.config import get_settings
from app.routes import auth, users, matches, messages, ai, travel

settings = get_settings()


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application lifecycle management."""
    # Startup
    print("🚀 ConnectSphere API starting...")
    print(f"📍 Environment: {settings.ENVIRONMENT}")
    print(f"🔐 Debug mode: {settings.DEBUG}")
    yield
    # Shutdown
    print("🛑 ConnectSphere API shutting down...")


# Create FastAPI app
app = FastAPI(
    title=settings.API_TITLE,
    description=settings.API_DESCRIPTION,
    version="1.0.0",
    lifespan=lifespan,
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Add trusted host middleware
app.add_middleware(
    TrustedHostMiddleware,
    allowed_hosts=[
        "localhost",
        "127.0.0.1",
        "connectsphere.com",
        "*.connectsphere.com",
    ],
)


# Root endpoint
@app.get("/")
async def root():
    """Root endpoint."""
    return {
        "message": "Welcome to ConnectSphere API",
        "version": "1.0.0",
        "docs": "/docs",
        "redoc": "/redoc",
    }


@app.get("/health")
async def health_check():
    """Health check endpoint."""
    return {
        "status": "healthy",
        "service": "ConnectSphere API",
        "environment": settings.ENVIRONMENT,
    }


# Include routers
app.include_router(
    auth.router,
    prefix="/api/v1/auth",
    tags=["Authentication"],
)

app.include_router(
    users.router,
    prefix="/api/v1/users",
    tags=["Users"],
)

app.include_router(
    matches.router,
    prefix="/api/v1/matches",
    tags=["Matches"],
)

app.include_router(
    messages.router,
    prefix="/api/v1/messages",
    tags=["Messages"],
)

app.include_router(
    ai.router,
    prefix="/api/v1/ai",
    tags=["AI & Chatbot"],
)

app.include_router(
    travel.router,
    prefix="/api/v1/travel",
    tags=["Travel"],
)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "app.main:app",
        host=settings.HOST,
        port=settings.PORT,
        reload=settings.DEBUG,
    )
