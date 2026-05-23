"""Preference schemas."""

from datetime import datetime
from typing import Optional, List
from pydantic import BaseModel


class PreferenceUpdate(BaseModel):
    """Preference update schema."""

    age_range_min: Optional[int] = None
    age_range_max: Optional[int] = None
    distance_miles: Optional[int] = None
    interested_in: Optional[List[str]] = None
    relationship_goals: Optional[List[str]] = None
    interests: Optional[List[str]] = None
    notifications_enabled: Optional[bool] = None
    messages_notifications: Optional[bool] = None
    match_notifications: Optional[bool] = None
    marketing_emails: Optional[bool] = None
    show_online_status: Optional[bool] = None


class PreferenceResponse(BaseModel):
    """Preference response schema."""

    id: str
    user_id: str
    age_range_min: int
    age_range_max: int
    distance_miles: int
    interested_in: Optional[List[str]]
    relationship_goals: Optional[List[str]]
    interests: Optional[List[str]]
    notifications_enabled: bool
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
