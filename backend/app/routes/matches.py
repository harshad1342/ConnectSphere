"""Matching routes."""

from fastapi import APIRouter, HTTPException, status
from typing import List, Optional

from app.schemas.match import LikeRequest, MatchResponse
from app.schemas.user import UserPublic

router = APIRouter()


@router.get("/recommendations")
async def get_recommendations(
    limit: int = 10,
    offset: int = 0,
):
    """
    Get recommended profiles.
    
    Returns AI-powered profile recommendations based on user preferences and interests.
    Uses collaborative filtering and content-based matching.
    """
    # TODO: Get current user from JWT
    # TODO: Fetch recommendations from AI service
    # TODO: Apply user preferences (age, distance, etc)
    
    return {
        "data": [],
        "total": 0,
        "has_more": False,
    }


@router.post("/like")
async def like_profile(request: LikeRequest):
    """
    Like or pass on a profile.
    
    Records user's like/pass action and checks for mutual matches.
    """
    # TODO: Get current user from JWT
    # TODO: Save like to database
    # TODO: Check for mutual like (match)
    # TODO: Send notification if mutual match
    
    return {
        "liked": True,
        "mutual_match": False,
        "message": "Profile liked",
    }


@router.get("/list", response_model=List[MatchResponse])
async def get_matches(
    limit: int = 20,
    offset: int = 0,
):
    """
    Get user's matches.
    
    Returns list of mutual matches for the authenticated user.
    """
    # TODO: Get current user from JWT
    # TODO: Fetch matches from database
    # TODO: Include last message info
    
    return []


@router.get("/{match_id}", response_model=MatchResponse)
async def get_match(match_id: str):
    """
    Get match details.
    
    Returns detailed information about a specific match.
    """
    # TODO: Fetch match from database
    # TODO: Return match info
    
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail="Match not found",
    )


@router.delete("/{match_id}")
async def unmatch(match_id: str):
    """
    Unmatch with user.
    
    Removes a match relationship.
    """
    # TODO: Get current user from JWT
    # TODO: Delete match from database
    # TODO: Send notification
    
    return {"message": "Unmatched successfully"}


@router.post("/{match_id}/block")
async def block_user(match_id: str):
    """
    Block user.
    
    Blocks a user from matching and messaging.
    """
    # TODO: Get current user from JWT
    # TODO: Add to blocks table
    # TODO: Remove match if exists
    
    return {"message": "User blocked successfully"}
