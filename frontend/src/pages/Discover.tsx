import React, { useState } from 'react';
import { Heart, X } from 'lucide-react';

const Discover: React.FC = () => {
  const [profiles, setProfiles] = useState([
    {
      id: '1',
      name: 'Sarah',
      age: 26,
      location: 'New York, NY',
      bio: 'Travel enthusiast and hiking lover',
      photo: 'https://via.placeholder.com/400x500?text=Sarah',
      interests: ['travel', 'hiking', 'photography'],
      matchScore: 0.92,
    },
    {
      id: '2',
      name: 'Emma',
      age: 24,
      location: 'Los Angeles, CA',
      bio: 'Foodie, artist, and adventure seeker',
      photo: 'https://via.placeholder.com/400x500?text=Emma',
      interests: ['food', 'art', 'travel'],
      matchScore: 0.85,
    },
  ]);

  const handleLike = (id: string) => {
    setProfiles(profiles.filter(p => p.id !== id));
  };

  const handlePass = (id: string) => {
    setProfiles(profiles.filter(p => p.id !== id));
  };

  const currentProfile = profiles[0];

  return (
    <div className="min-h-screen bg-dark-base text-dark-primary py-8">
      <div className="max-w-md mx-auto px-4">
        <h1 className="heading-lg text-center mb-8">Discover</h1>

        {currentProfile ? (
          <div className="space-y-4">
            {/* Card */}
            <div className="relative">
              <div className="aspect-video bg-dark-card rounded-2xl overflow-hidden border border-dark-border">
                <img
                  src={currentProfile.photo}
                  alt={currentProfile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Match Score Badge */}
              <div className="absolute top-4 right-4 bg-dark-card/80 backdrop-blur rounded-full px-4 py-2 text-sm font-semibold text-accent-pink">
                {Math.round(currentProfile.matchScore * 100)}% Match
              </div>
            </div>

            {/* Profile Info */}
            <div className="card space-y-4">
              <div>
                <h2 className="heading-sm">
                  {currentProfile.name}, {currentProfile.age}
                </h2>
                <p className="text-dark-secondary">{currentProfile.location}</p>
              </div>

              <p className="text-dark-primary">{currentProfile.bio}</p>

              <div className="flex flex-wrap gap-2">
                {currentProfile.interests.map((interest, i) => (
                  <span
                    key={i}
                    className="bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs px-3 py-1 rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => handlePass(currentProfile.id)}
                className="flex-1 btn btn-secondary py-3 rounded-full flex items-center justify-center gap-2"
              >
                <X className="w-5 h-5" /> Pass
              </button>
              <button
                onClick={() => handleLike(currentProfile.id)}
                className="flex-1 btn btn-primary py-3 rounded-full flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5" /> Like
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-dark-secondary mb-4">No more profiles to discover</p>
            <button className="btn btn-primary">Back to Discover</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Discover;
