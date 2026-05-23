import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-base text-dark-primary flex items-center justify-center">
      <div className="text-center">
        <AlertCircle className="w-16 h-16 text-accent-pink mx-auto mb-6 opacity-50" />
        <h1 className="heading-lg mb-2">404</h1>
        <p className="text-dark-secondary text-lg mb-8">Page not found</p>
        <Link to="/" className="btn btn-primary">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
