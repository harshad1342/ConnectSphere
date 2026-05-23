"""Message model."""

from datetime import datetime
from sqlalchemy import Column, String, DateTime, Boolean, JSON, Text
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Message(Base):
    """Message database model."""

    __tablename__ = "messages"

    id = Column(String, primary_key=True, index=True)
    match_id = Column(String, index=True, nullable=False)
    sender_id = Column(String, index=True, nullable=False)
    content = Column(Text, nullable=False)
    attachments = Column(JSON, nullable=True)  # Array of attachment URLs
    is_read = Column(Boolean, default=False)
    read_at = Column(DateTime, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    deleted_at = Column(DateTime, nullable=True)

    def __repr__(self):
        return f"<Message {self.id}>"
