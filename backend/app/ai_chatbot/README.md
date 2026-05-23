# ConnectSphere AI Chatbot

## Overview

The AI Chatbot module provides intelligent conversational features for ConnectSphere users.

## Features

- **Conversation Starters** - AI-generated personalized openers
- **Profile Suggestions** - Tips to improve your profile
- **Safety Tips** - Online dating safety guidance
- **Travel Matching** - Help finding travel companions
- **General Assistance** - Help with app features

## Integration

### Using the Chatbot

```python
from app.ai_chatbot.chatbot import ConnectSphereChatbot

chatbot = ConnectSphereChatbot()

# Process user message
response = chatbot.process_message("How do I create a great profile?")
print(response)
```

### API Endpoint

```bash
POST /api/v1/ai/chat

{
  "message": "Help me write an opener",
  "context": "mutual interests"
}

Response:
{
  "response": "Here's a great opener...",
  "suggestions": []
}
```

## Technologies

- **OpenAI API** - For advanced NLP and chat generation
- **Hugging Face Transformers** - Local NLP models (alternative)
- **NLTK** - Natural Language Toolkit for text processing

## Environment Variables

```env
OPENAI_API_KEY=sk-your-key
OPENAI_MODEL=gpt-3.5-turbo
```

## Future Enhancements

- [ ] Fine-tune models on dating conversation data
- [ ] Multi-language support
- [ ] Sentiment analysis
- [ ] Real-time typing suggestions
- [ ] Conversation style analysis
- [ ] Custom personality options

## Safety & Moderation

All AI responses are moderated to:
- Prevent inappropriate content
- Filter spam and scams
- Protect user privacy
- Ensure respectful communication
