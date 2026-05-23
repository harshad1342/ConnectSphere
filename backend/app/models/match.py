"""Match model."""

from datetime import datetime
from sqlalchemy import Column, String, DateTime, Boolean, JSON
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Match(Base):
    """Match database model (mutual likes)."""

    __tablename__ = "matches"

    id = Column(String, primary_key=True, index=True)
    user1_id = Column(String, index=True, nullable=False)
    user2_id = Column(String, index=True, nullable=False)
    user1_liked_at = Column(DateTime, nullable=True)
    user2_liked_at = Column(DateTime, nullable=True)
    match_score = Column(String, nullable=True)  # 0.0 to 1.0 compatibility score
    match_reason = Column(String, nullable=True)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    ended_at = Column(DateTime, nullable=True)

    def __repr__(self):
        return f"<Match {self.user1_id} <-> {self.user2_id}>"
