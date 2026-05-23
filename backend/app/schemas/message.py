"""Message schemas."""

from datetime import datetime
from typing import Optional, List
from pydantic import BaseModel


class MessageCreate(BaseModel):
    """Message creation schema."""

    match_id: str
    content: str
    attachments: Optional[List[str]] = None


class MessageResponse(BaseModel):
    """Message response schema."""

    id: str
    match_id: str
    sender_id: str
    content: str
    attachments: Optional[List[str]]
    is_read: bool
    read_at: Optional[datetime]
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
