import React, { useState } from 'react';
import { MapPin, Calendar, Users, Plus } from 'lucide-react';

const Travel: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [plans, setPlans] = useState([
    {
      id: '1',
      destination: 'Paris, France',
      startDate: '2024-06-01',
      endDate: '2024-06-15',
      interests: ['museums', 'dining', 'culture'],
      travelers: 1,
      maxTravelers: 3,
    },
  ]);

  return (
    <div className="min-h-screen bg-dark-base text-dark-primary py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="heading-lg">Travel Plans</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn btn-primary flex items-center gap-2"
          >
            <Plus className="w-5 h-5" /> New Plan
          </button>
        </div>

        {/* Form */}
        {showForm && (
          <div className="card mb-8 space-y-4">
            <h3 className="heading-sm">Create Travel Plan</h3>
            <input type="text" placeholder="Destination" className="input w-full" />
            <div className="grid grid-cols-2 gap-4">
              <input type="date" className="input w-full" />
              <input type="date" className="input w-full" />
            </div>
            <input type="number" placeholder="Budget (USD)" className="input w-full" />
            <textarea
              placeholder="Description"
              className="input w-full h-20 resize-none"
            />
            <div className="flex gap-2">
              <button className="btn btn-primary flex-1">Create Plan</button>
              <button
                onClick={() => setShowForm(false)}
                className="btn btn-secondary flex-1"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Plans List */}
        <div className="grid gap-6">
          {plans.map((plan) => (
            <div key={plan.id} className="card space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="heading-sm flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-accent-pink" />
                    {plan.destination}
                  </h3>
                  <p className="text-dark-secondary flex items-center gap-2 mt-2">
                    <Calendar className="w-4 h-4" />
                    {plan.startDate} to {plan.endDate}
                  </p>
                </div>
                <span className="bg-primary-500/10 border border-primary-500/20 text-primary-400 px-3 py-1 rounded-full text-sm">
                  {plan.travelers}/{plan.maxTravelers} travelers
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {plan.interests.map((interest, i) => (
                  <span
                    key={i}
                    className="bg-dark-bg border border-dark-border text-dark-secondary text-xs px-3 py-1 rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 pt-4">
                <button className="btn btn-primary flex-1">Find Companions</button>
                <button className="btn btn-secondary flex-1">Edit</button>
              </div>
            </div>
          ))}
        </div>

        {plans.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="w-12 h-12 text-dark-secondary mx-auto mb-4 opacity-50" />
            <p className="text-dark-secondary mb-4">No travel plans yet</p>
            <button
              onClick={() => setShowForm(true)}
              className="btn btn-primary"
            >
              Create Your First Plan
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Travel;
