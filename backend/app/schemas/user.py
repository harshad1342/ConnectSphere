"""User schemas."""

from datetime import datetime
from typing import Optional, List
from pydantic import BaseModel, EmailStr, Field


class UserCreate(BaseModel):
    """User creation schema."""

    email: EmailStr
    password: str = Field(..., min_length=8)
    first_name: str
    last_name: str
    age: int = Field(..., ge=18, le=100)
    gender: Optional[str] = None


class UserUpdate(BaseModel):
    """User update schema."""

    first_name: Optional[str] = None
    last_name: Optional[str] = None
    bio: Optional[str] = Field(None, max_length=500)
    age: Optional[int] = Field(None, ge=18, le=100)
    gender: Optional[str] = None
    sexual_orientation: Optional[str] = None
    location: Optional[str] = None
    latitude: Optional[str] = None
    longitude: Optional[str] = None
    profile_photo_url: Optional[str] = None
    interests: Optional[List[str]] = None
    relationship_goal: Optional[str] = None


class UserResponse(BaseModel):
    """User response schema."""

    id: str
    email: str
    first_name: str
    last_name: str
    bio: Optional[str]
    age: Optional[int]
    gender: Optional[str]
    sexual_orientation: Optional[str]
    location: Optional[str]
    profile_photo_url: Optional[str]
    photos: Optional[List[str]]
    interests: Optional[List[str]]
    relationship_goal: Optional[str]
    is_verified: bool
    is_premium: bool
    created_at: datetime
    updated_at: datetime
    last_login: Optional[datetime]

    class Config:
        from_attributes = True


class UserPublic(BaseModel):
    """Public user profile (limited info)."""

    id: str
    first_name: str
    age: Optional[int]
    gender: Optional[str]
    location: Optional[str]
    profile_photo_url: Optional[str]
    photos: Optional[List[str]]
    interests: Optional[List[str]]
    relationship_goal: Optional[str]
    is_verified: bool

    class Config:
        from_attributes = True
