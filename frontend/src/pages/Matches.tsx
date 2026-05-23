import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Clock } from 'lucide-react';

const Matches: React.FC = () => {
  const matches = [
    {
      id: '1',
      name: 'Sarah',
      lastMessage: 'Hey! How are you?',
      lastMessageTime: '2 hours ago',
      photo: 'https://via.placeholder.com/100?text=Sarah',
      unread: 2,
    },
    {
      id: '2',
      name: 'Emma',
      lastMessage: 'That sounds fun!',
      lastMessageTime: '1 day ago',
      photo: 'https://via.placeholder.com/100?text=Emma',
      unread: 0,
    },
  ];

  return (
    <div className="min-h-screen bg-dark-base text-dark-primary py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="heading-lg mb-8">Your Matches</h1>

        {matches.length > 0 ? (
          <div className="space-y-2">
            {matches.map((match) => (
              <Link
                key={match.id}
                to={`/chat/${match.id}`}
                className="card-interactive p-4 flex items-center gap-4"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-500">
                  <img src={match.photo} alt={match.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold">{match.name}</h3>
                  <p className="text-dark-secondary text-sm truncate">{match.lastMessage}</p>
                  <div className="flex items-center gap-1 text-xs text-dark-secondary mt-1">
                    <Clock className="w-3 h-3" />
                    {match.lastMessageTime}
                  </div>
                </div>
                {match.unread > 0 && (
                  <div className="bg-accent-pink text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                    {match.unread}
                  </div>
                )}
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Heart className="w-12 h-12 text-dark-secondary mx-auto mb-4 opacity-50" />
            <p className="text-dark-secondary mb-4">No matches yet. Start swiping!</p>
            <Link to="/discover" className="btn btn-primary">
              Discover Profiles
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Matches;
