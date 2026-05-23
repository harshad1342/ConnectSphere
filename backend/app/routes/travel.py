"""Travel routes."""

from fastapi import APIRouter, HTTPException, status
from typing import List, Optional
from datetime import date

router = APIRouter()


class TravelPlanCreate:
    """Travel plan creation request."""

    destination: str
    start_date: date
    end_date: date
    budget: Optional[int] = None
    description: Optional[str] = None
    interests: Optional[List[str]] = None


@router.post("/plans")
async def create_travel_plan(plan: TravelPlanCreate):
    """
    Create a travel plan.
    
    Creates a new travel plan and makes it available for matching.
    """
    # TODO: Get current user from JWT
    # TODO: Validate dates
    # TODO: Save to database
    # TODO: Make searchable for travel companions
    
    return {
        "id": "plan-id",
        "message": "Travel plan created successfully",
    }


@router.get("/plans")
async def get_user_travel_plans():
    """
    Get user's travel plans.
    
    Returns all travel plans created by the user.
    """
    # TODO: Get current user from JWT
    # TODO: Fetch plans from database
    
    return []


@router.get("/companions")
async def find_travel_companions(
    destination: Optional[str] = None,
    start_date: Optional[date] = None,
    end_date: Optional[date] = None,
    limit: int = 10,
    offset: int = 0,
):
    """
    Find travel companions.
    
    Finds users with compatible travel plans and interests.
    """
    # TODO: Get current user from JWT
    # TODO: Search travel plans matching criteria
    # TODO: Rank by compatibility
    # TODO: Return matches
    
    return {
        "data": [],
        "total": 0,
        "has_more": False,
    }


@router.post("/companions/{user_id}/request")
async def request_travel_companion(
    user_id: str,
    plan_id: str,
):
    """
    Request to join travel plan.
    
    Sends request to join another user's travel plan.
    """
    # TODO: Get current user from JWT
    # TODO: Validate plan exists
    # TODO: Check for existing request
    # TODO: Create travel request
    # TODO: Send notification
    
    return {"message": "Travel request sent"}


@router.post("/companions/{request_id}/accept")
async def accept_travel_request(request_id: str):
    """
    Accept travel companion request.
    
    Accepts a travel companion request.
    """
    # TODO: Get current user from JWT
    # TODO: Validate request
    # TODO: Update request status
    # TODO: Add to travel plan
    # TODO: Create match
    
    return {"message": "Travel request accepted"}


@router.post("/companions/{request_id}/reject")
async def reject_travel_request(request_id: str):
    """
    Reject travel companion request.
    
    Rejects a travel companion request.
    """
    # TODO: Get current user from JWT
    # TODO: Validate request
    # TODO: Update request status
    
    return {"message": "Travel request rejected"}
