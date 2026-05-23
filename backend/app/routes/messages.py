"""Messaging routes."""

from fastapi import APIRouter, HTTPException, status, WebSocket, WebSocketDisconnect
from typing import List

from app.schemas.message import MessageCreate, MessageResponse

router = APIRouter()


@router.post("/send", response_model=MessageResponse)
async def send_message(message: MessageCreate):
    """
    Send a message.
    
    Sends a message to a matched user.
    """
    # TODO: Get current user from JWT
    # TODO: Validate match exists
    # TODO: Save message to database
    # TODO: Send real-time notification via WebSocket
    
    raise HTTPException(
        status_code=status.HTTP_400_BAD_REQUEST,
        detail="Invalid request",
    )


@router.get("/{match_id}", response_model=List[MessageResponse])
async def get_chat_history(
    match_id: str,
    limit: int = 50,
    offset: int = 0,
):
    """
    Get chat history.
    
    Returns message history for a specific match.
    """
    # TODO: Get current user from JWT
    # TODO: Verify user is part of match
    # TODO: Fetch messages from database
    # TODO: Mark as read
    
    return []


@router.put("/{message_id}/read")
async def mark_message_read(message_id: str):
    """
    Mark message as read.
    
    Updates message read status.
    """
    # TODO: Get current user from JWT
    # TODO: Update message in database
    # TODO: Send read receipt via WebSocket
    
    return {"read": True}


@router.delete("/{message_id}")
async def delete_message(message_id: str):
    """
    Delete a message.
    
    Soft deletes a message.
    """
    # TODO: Get current user from JWT
    # TODO: Verify ownership
    # TODO: Mark as deleted in database
    
    return {"message": "Message deleted"}


@router.websocket("/ws/{user_id}")
async def websocket_endpoint(websocket: WebSocket, user_id: str):
    """
    WebSocket endpoint for real-time messaging.
    
    Handles real-time chat, typing indicators, and notifications.
    """
    await websocket.accept()
    try:
        while True:
            data = await websocket.receive_json()
            # TODO: Process message
            # TODO: Broadcast to recipient
            # TODO: Save to database
    except WebSocketDisconnect:
        # TODO: Handle disconnection
        pass
