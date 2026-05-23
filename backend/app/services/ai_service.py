"""AI and NLP service."""

from typing import List, Dict, Optional
import openai
from app.config import get_settings

settings = get_settings()


class AIService:
    """Service for AI-powered features using OpenAI."""

    @staticmethod
    async def get_chat_suggestions(
        user_profile: Dict,
        target_profile: Dict,
        context: Optional[str] = None,
    ) -> List[str]:
        """
        Generate AI-powered chat suggestions.
        
        Creates personalized conversation starters based on user profiles.
        """
        prompt = f"""
        Generate 3 engaging conversation starters for someone interested in connecting with:
        - Name: {target_profile.get('first_name')}
        - Interests: {', '.join(target_profile.get('interests', []))}
        - Bio: {target_profile.get('bio', 'No bio provided')}
        - Goals: {target_profile.get('relationship_goal')}
        
        Context: {context or 'General greeting'}
        
        Make suggestions specific, engaging, and authentic.
        Return as a numbered list.
        """

        try:
            response = await openai.ChatCompletion.acreate(
                model=settings.OPENAI_MODEL,
                messages=[{"role": "user", "content": prompt}],
                temperature=0.7,
                max_tokens=300,
            )
            
            content = response["choices"][0]["message"]["content"]
            # Parse numbered list
            suggestions = [
                line.split(".", 1)[-1].strip()
                for line in content.split("\n")
                if line.strip() and any(char.isdigit() for char in line[0:2])
            ]
            return suggestions[:3]
        except Exception as e:
            print(f"Error generating suggestions: {e}")
            return [
                "That's a great profile!",
                "I love your interests!",
                "Want to chat?",
            ]

    @staticmethod
    async def chat(
        message: str,
        context: Optional[str] = None,
    ) -> str:
        """
        General AI chatbot response.
        
        Provides intelligent responses for user queries.
        """
        system_prompt = """
        You are ConnectSphere's friendly AI assistant. Help users with:
        - Tips for creating great profiles
        - Conversation starters
        - Advice on online dating safety
        - Travel companion matching
        - General questions about the app
        
        Be helpful, friendly, and concise.
        """

        try:
            response = await openai.ChatCompletion.acreate(
                model=settings.OPENAI_MODEL,
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": message},
                ],
                temperature=0.7,
                max_tokens=500,
            )
            
            return response["choices"][0]["message"]["content"]
        except Exception as e:
            print(f"Error in AI chat: {e}")
            return "I'm having trouble processing that. Please try again later."

    @staticmethod
    def extract_interests_from_text(text: str) -> List[str]:
        """
        Extract interests from user bio text using NLP.
        
        Uses simple keyword matching for MVP.
        """
        common_interests = [
            "travel", "hiking", "cooking", "photography",
            "music", "movies", "reading", "sports",
            "fitness", "yoga", "meditation", "meditation",
            "gaming", "art", "museums", "dining",
            "wine", "beer", "coffee", "adventure",
            "beach", "mountains", "nature", "outdoor",
        ]
        
        text_lower = text.lower()
        found_interests = [
            interest for interest in common_interests
            if interest in text_lower
        ]
        return found_interests
