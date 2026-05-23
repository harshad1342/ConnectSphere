"""User routes."""

from fastapi import APIRouter, HTTPException, status, Depends
from typing import List, Optional

from app.schemas.user import UserResponse, UserUpdate, UserPublic

router = APIRouter()


@router.get("/me", response_model=UserResponse)
async def get_current_user():
    """
    Get current user profile.
    
    Returns the authenticated user's profile information.
    """
    # TODO: Get user from JWT token
    # TODO: Fetch from Supabase
    
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Not authenticated",
    )


@router.put("/me", response_model=UserResponse)
async def update_current_user(user_update: UserUpdate):
    """
    Update current user profile.
    
    Updates the authenticated user's profile information.
    """
    # TODO: Get user from JWT token
    # TODO: Update in Supabase
    
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Not authenticated",
    )


@router.get("/{user_id}", response_model=UserPublic)
async def get_user(user_id: str):
    """
    Get user profile by ID.
    
    Returns public profile information for a specific user.
    """
    # TODO: Fetch user from Supabase
    # TODO: Return public info only
    
    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail="User not found",
    )


@router.post("/me/photos")
async def upload_photos(photo_urls: List[str]):
    """
    Upload user photos.
    
    Adds photos to user's profile.
    """
    # TODO: Validate photos
    # TODO: Upload to Supabase Storage
    # TODO: Save URLs to database
    
    return {"message": "Photos uploaded successfully"}


@router.delete("/me")
async def delete_account():
    """
    Delete user account.
    
    Permanently deletes the authenticated user's account.
    """
    # TODO: Get user from JWT token
    # TODO: Delete from Supabase (soft delete)
    
    return {"message": "Account deleted successfully"}


@router.post("/me/verify-email")
async def verify_email(code: str):
    """
    Verify email address.
    
    Verifies user's email using confirmation code.
    """
    # TODO: Validate code
    # TODO: Mark email as verified in database
    
    return {"message": "Email verified successfully"}


@router.post("/me/verify-phone")
async def verify_phone(code: str):
    """
    Verify phone number.
    
    Verifies user's phone number using SMS code.
    """
    # TODO: Validate code
    # TODO: Mark phone as verified in database
    
    return {"message": "Phone verified successfully"}
