"""Travel Plan model."""

from datetime import datetime, date
from sqlalchemy import Column, String, DateTime, Date, Integer, Text, JSON, Boolean
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class TravelPlan(Base):
    """Travel plan database model."""

    __tablename__ = "travel_plans"

    id = Column(String, primary_key=True, index=True)
    user_id = Column(String, index=True, nullable=False)
    destination = Column(String, nullable=False)
    start_date = Column(Date, nullable=False)
    end_date = Column(Date, nullable=False)
    budget = Column(Integer, nullable=True)
    description = Column(Text, nullable=True)
    interests = Column(JSON, nullable=True)  # hiking, museums, dining, etc
    travelers_needed = Column(Integer, default=1)
    current_travelers = Column(Integer, default=1)
    is_public = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def __repr__(self):
        return f"<TravelPlan {self.destination}>"
