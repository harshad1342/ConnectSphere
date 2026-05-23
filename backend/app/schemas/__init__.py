"""Pydantic schemas for request/response validation."""

from .user import UserCreate, UserUpdate, UserResponse, UserPublic
from .auth import LoginRequest, SignupRequest, TokenResponse
from .message import MessageCreate, MessageResponse
from .match import LikeRequest, MatchResponse
from .preference import PreferenceUpdate, PreferenceResponse

__all__ = [
    "UserCreate",
    "UserUpdate",
    "UserResponse",
    "UserPublic",
    "LoginRequest",
    "SignupRequest",
    "TokenResponse",
    "MessageCreate",
    "MessageResponse",
    "LikeRequest",
    "MatchResponse",
    "PreferenceUpdate",
    "PreferenceResponse",
]
