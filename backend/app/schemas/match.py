"""Match schemas."""

from datetime import datetime
from typing import Optional, List
from pydantic import BaseModel


class LikeRequest(BaseModel):
    """Like/swipe request schema."""

    target_user_id: str
    liked: bool = True


class MatchResponse(BaseModel):
    """Match response schema."""

    id: str
    user1_id: str
    user2_id: str
    match_score: Optional[float]
    match_reason: Optional[str]
    is_active: bool
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
