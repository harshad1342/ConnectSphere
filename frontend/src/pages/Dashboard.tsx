import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-base text-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="heading-lg mb-8">Dashboard</h1>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: 'Matches', count: 12, path: '/matches' },
            { title: 'Messages', count: 5, path: '/chat' },
            { title: 'Likes', count: 42, path: '/discover' },
            { title: 'Profile Views', count: 89, path: '/profile' },
          ].map((item, i) => (
            <Link key={i} to={item.path} className="card-interactive p-6 space-y-2">
              <p className="text-dark-secondary text-sm">{item.title}</p>
              <p className="text-3xl font-bold text-gradient">{item.count}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
