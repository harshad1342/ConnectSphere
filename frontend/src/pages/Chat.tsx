import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Send, Smile } from 'lucide-react';

const Chat: React.FC = () => {
  const { matchId } = useParams();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: '1', sender: 'other', content: 'Hey! How are you?', timestamp: '10:30 AM' },
    { id: '2', sender: 'user', content: "I'm doing great! How about you?", timestamp: '10:32 AM' },
    { id: '3', sender: 'other', content: 'Pretty good! Want to grab coffee?', timestamp: '10:35 AM' },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          id: String(messages.length + 1),
          sender: 'user',
          content: message,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-dark-base text-dark-primary flex flex-col">
      {/* Header */}
      <div className="border-b border-dark-border bg-dark-card/50 backdrop-blur-md sticky top-0 p-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-semibold">Sarah, 26</h2>
          <p className="text-sm text-dark-secondary">Active 2 hours ago</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto max-w-2xl mx-auto w-full px-4 py-6 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl ${
                msg.sender === 'user'
                  ? 'bg-primary-500 text-white rounded-br-none'
                  : 'bg-dark-card border border-dark-border rounded-bl-none'
              }`}
            >
              <p className="break-words">{msg.content}</p>
              <p
                className={`text-xs mt-1 ${
                  msg.sender === 'user' ? 'text-primary-100' : 'text-dark-secondary'
                }`}
              >
                {msg.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t border-dark-border bg-dark-card/50 backdrop-blur-md p-4">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSendMessage} className="flex gap-3">
            <button type="button" className="btn-icon bg-dark-card hover:bg-dark-hover">
              <Smile className="w-5 h-5" />
            </button>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="input flex-1"
            />
            <button type="submit" className="btn-icon bg-primary-500 hover:bg-primary-600 text-white">
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
