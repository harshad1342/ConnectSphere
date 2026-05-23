"""User model."""

from datetime import datetime
from typing import Optional, List
from sqlalchemy import Column, String, Integer, DateTime, Text, Boolean, JSON
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class User(Base):
    """User database model."""

    __tablename__ = "users"

    id = Column(String, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    phone = Column(String, nullable=True)
    bio = Column(Text, nullable=True)
    age = Column(Integer, nullable=True)
    gender = Column(String, nullable=True)  # male, female, other
    sexual_orientation = Column(String, nullable=True)  # straight, gay, lesbian, bi, etc
    location = Column(String, nullable=True)
    latitude = Column(String, nullable=True)
    longitude = Column(String, nullable=True)
    profile_photo_url = Column(String, nullable=True)
    photos = Column(JSON, nullable=True)  # Array of photo URLs
    interests = Column(JSON, nullable=True)  # Array of interest tags
    relationship_goal = Column(String, nullable=True)  # dating, hookup, relationship, travel
    is_verified = Column(Boolean, default=False)
    is_active = Column(Boolean, default=True)
    is_premium = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    last_login = Column(DateTime, nullable=True)
    deleted_at = Column(DateTime, nullable=True)

    def __repr__(self):
        return f"<User {self.email}>"
