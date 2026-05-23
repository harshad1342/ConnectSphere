import React, { useState } from 'react';
import { Settings, LogOut, Heart, AlertCircle } from 'lucide-react';

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    age: 28,
    bio: 'Travel enthusiast and coffee lover',
    location: 'New York, NY',
    interests: ['travel', 'hiking', 'photography'],
    relationshipGoal: 'dating',
  });

  return (
    <div className="min-h-screen bg-dark-base text-dark-primary py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="heading-lg">Profile</h1>
          <button className="btn btn-secondary p-2">
            <Settings className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Card */}
        <div className="card space-y-6">
          {/* Profile Picture */}
          <div className="aspect-video bg-dark-bg rounded-xl overflow-hidden border border-dark-border">
            <img
              src="https://via.placeholder.com/600x400?text=Profile"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-dark-secondary mb-2">
                Full Name
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={profile.firstName}
                  onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                  disabled={!isEditing}
                  className="input flex-1 disabled:bg-dark-bg disabled:cursor-not-allowed"
                />
                <input
                  type="text"
                  value={profile.lastName}
                  onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                  disabled={!isEditing}
                  className="input flex-1 disabled:bg-dark-bg disabled:cursor-not-allowed"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-secondary mb-2">
                Age
              </label>
              <input
                type="number"
                value={profile.age}
                onChange={(e) => setProfile({ ...profile, age: parseInt(e.target.value) })}
                disabled={!isEditing}
                className="input w-full disabled:bg-dark-bg disabled:cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-secondary mb-2">
                Bio
              </label>
              <textarea
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                disabled={!isEditing}
                className="input w-full disabled:bg-dark-bg disabled:cursor-not-allowed h-20 resize-none"
                placeholder="Tell us about yourself"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-secondary mb-2">
                Location
              </label>
              <input
                type="text"
                value={profile.location}
                onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                disabled={!isEditing}
                className="input w-full disabled:bg-dark-bg disabled:cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-secondary mb-2">
                What are you looking for?
              </label>
              <select
                value={profile.relationshipGoal}
                onChange={(e) => setProfile({ ...profile, relationshipGoal: e.target.value })}
                disabled={!isEditing}
                className="input w-full disabled:bg-dark-bg disabled:cursor-not-allowed"
              >
                <option value="dating">Dating</option>
                <option value="relationship">Relationship</option>
                <option value="hookup">Hookup</option>
                <option value="travel">Travel Companion</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="btn btn-primary flex-1"
              >
                Edit Profile
              </button>
            ) : (
              <>
                <button
                  onClick={() => setIsEditing(false)}
                  className="btn btn-primary flex-1"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="btn btn-secondary flex-1"
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>

        {/* Danger Zone */}
        <div className="mt-8 card border-red-500/20 bg-red-500/5 space-y-4">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-400" />
            <h3 className="font-semibold text-red-400">Danger Zone</h3>
          </div>
          <button className="btn btn-secondary w-full text-red-400 border-red-500/20 hover:bg-red-500/10 flex items-center justify-center gap-2">
            <LogOut className="w-5 h-5" /> Logout
          </button>
          <button className="btn btn-secondary w-full text-red-400 border-red-500/20 hover:bg-red-500/10">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
