"""Authentication schemas."""

from pydantic import BaseModel, EmailStr, Field
from typing import Optional


class LoginRequest(BaseModel):
    """Login request schema."""

    email: EmailStr
    password: str


class SignupRequest(BaseModel):
    """Signup request schema."""

    email: EmailStr
    password: str = Field(..., min_length=8)
    first_name: str
    last_name: str
    age: int = Field(..., ge=18, le=100)
    gender: Optional[str] = None


class TokenResponse(BaseModel):
    """Token response schema."""

    access_token: str
    token_type: str = "bearer"
    expires_in: int
    user: Optional[dict] = None
