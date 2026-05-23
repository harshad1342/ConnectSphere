"""Preference model."""

from datetime import datetime
from sqlalchemy import Column, String, DateTime, Integer, JSON, Boolean
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Preference(Base):
    """User preferences database model."""

    __tablename__ = "preferences"

    id = Column(String, primary_key=True, index=True)
    user_id = Column(String, unique=True, index=True, nullable=False)
    age_range_min = Column(Integer, default=18)
    age_range_max = Column(Integer, default=80)
    distance_miles = Column(Integer, default=50)
    interested_in = Column(JSON, nullable=True)  # male, female, other
    relationship_goals = Column(JSON, nullable=True)  # dating, hookup, relationship, travel
    interests = Column(JSON, nullable=True)
    notifications_enabled = Column(Boolean, default=True)
    messages_notifications = Column(Boolean, default=True)
    match_notifications = Column(Boolean, default=True)
    marketing_emails = Column(Boolean, default=False)
    show_online_status = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def __repr__(self):
        return f"<Preference {self.user_id}>"
