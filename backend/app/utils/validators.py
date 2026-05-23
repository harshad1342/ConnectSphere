"""Validation utilities."""

from typing import List
import re


def validate_email(email: str) -> bool:
    """Validate email format."""
    pattern = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    return re.match(pattern, email) is not None


def validate_password(password: str) -> bool:
    """Validate password strength."""
    # At least 8 chars, 1 uppercase, 1 lowercase, 1 number
    if len(password) < 8:
        return False
    if not re.search(r"[A-Z]", password):
        return False
    if not re.search(r"[a-z]", password):
        return False
    if not re.search(r"[0-9]", password):
        return False
    return True


def validate_phone(phone: str) -> bool:
    """Validate phone number format."""
    pattern = r"^\+?1?\d{9,15}$"
    return re.match(pattern, phone.replace(" ", "").replace("-", "")) is not None


def validate_age(age: int) -> bool:
    """Validate age is within acceptable range."""
    return 18 <= age <= 100


def validate_bio(bio: str, max_length: int = 500) -> bool:
    """Validate bio length."""
    return 0 < len(bio) <= max_length


def validate_interests(interests: List[str]) -> bool:
    """Validate interests list."""
    return isinstance(interests, list) and len(interests) <= 20
