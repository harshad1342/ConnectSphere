"""Matching and recommendation service."""

from typing import List, Dict, Tuple
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np


class MatchingService:
    """Service for AI-powered matching and recommendations."""

    @staticmethod
    def calculate_compatibility_score(
        user1_profile: Dict,
        user2_profile: Dict,
    ) -> float:
        """
        Calculate compatibility score between two users.
        
        Uses multiple factors:
        - Shared interests
        - Age compatibility
        - Location distance
        - Relationship goals alignment
        
        Returns score from 0.0 to 1.0
        """
        score = 0.0

        # Interest overlap (40% weight)
        interests1 = set(user1_profile.get("interests", []))
        interests2 = set(user2_profile.get("interests", []))
        if interests1 and interests2:
            interest_score = len(interests1 & interests2) / max(
                len(interests1 | interests2), 1
            )
            score += interest_score * 0.4

        # Goal compatibility (30% weight)
        if user1_profile.get("relationship_goal") == user2_profile.get(
            "relationship_goal"
        ):
            score += 0.3

        # Age compatibility (20% weight)
        age1 = user1_profile.get("age", 0)
        age2 = user2_profile.get("age", 0)
        age_diff = abs(age1 - age2)
        if age_diff <= 5:
            score += 0.2
        elif age_diff <= 10:
            score += 0.1

        # Location proximity (10% weight)
        # TODO: Implement geolocation calculation

        return min(score, 1.0)

    @staticmethod
    def get_recommendations(
        user_profile: Dict,
        candidate_profiles: List[Dict],
        limit: int = 10,
    ) -> List[Tuple[Dict, float]]:
        """
        Get ranked recommendations for a user.
        
        Returns list of (profile, compatibility_score) tuples sorted by score.
        """
        recommendations = []

        for candidate in candidate_profiles:
            score = MatchingService.calculate_compatibility_score(
                user_profile,
                candidate,
            )
            recommendations.append((candidate, score))

        # Sort by score descending
        recommendations.sort(key=lambda x: x[1], reverse=True)
        return recommendations[:limit]
