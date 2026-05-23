"""Configuration settings for the application."""

from typing import List
from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    """Application configuration settings."""

    # API
    API_VERSION: str = "v1"
    API_TITLE: str = "ConnectSphere API"
    API_DESCRIPTION: str = "AI-powered dating, hookup, and travel platform"

    # Server
    DEBUG: bool = True
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    ENVIRONMENT: str = "development"

    # CORS
    ALLOWED_ORIGINS: List[str] = [
        "http://localhost:3000",
        "http://localhost:5173",
        "http://localhost:19000",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:5173",
    ]

    # JWT
    SECRET_KEY: str = "your-secret-key-change-this"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7

    # Supabase
    SUPABASE_URL: str = ""
    SUPABASE_KEY: str = ""
    SUPABASE_SERVICE_ROLE_KEY: str = ""

    # Database
    DATABASE_URL: str = "postgresql://user:password@localhost:5432/connectsphere"

    # Redis
    REDIS_URL: str = "redis://localhost:6379"

    # OpenAI
    OPENAI_API_KEY: str = ""
    OPENAI_MODEL: str = "gpt-3.5-turbo"

    # Email
    SMTP_SERVER: str = "smtp.gmail.com"
    SMTP_PORT: int = 587
    SMTP_USER: str = ""
    SMTP_PASSWORD: str = ""
    SENDER_EMAIL: str = "noreply@connectsphere.com"

    # Twilio (SMS)
    TWILIO_ACCOUNT_SID: str = ""
    TWILIO_AUTH_TOKEN: str = ""
    TWILIO_PHONE_NUMBER: str = ""

    # Application
    MAX_FILE_SIZE: int = 10 * 1024 * 1024  # 10MB
    MAX_PHOTOS_PER_USER: int = 10
    MIN_AGE: int = 18
    MAX_AGE: int = 80
    MAX_BIO_LENGTH: int = 500

    # Features
    ENABLE_AI_CHAT: bool = True
    ENABLE_REAL_TIME_CHAT: bool = True
    ENABLE_TRAVEL_FEATURES: bool = True
    ENABLE_PAYMENT: bool = False

    class Config:
        env_file = ".env"
        case_sensitive = True


@lru_cache()
def get_settings() -> Settings:
    """Get cached settings instance."""
    return Settings()
