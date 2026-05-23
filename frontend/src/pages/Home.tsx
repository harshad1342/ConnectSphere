import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, Users, MapPin, ArrowRight, Github } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-base text-dark-primary">
      {/* Navigation */}
      <nav className="border-b border-dark-border bg-dark-card/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-accent-pink" />
            <span className="text-2xl font-bold text-gradient">ConnectSphere</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/auth?tab=login" className="text-dark-primary hover:text-primary-500 transition">
              Login
            </Link>
            <Link to="/auth?tab=signup" className="btn btn-primary">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="heading-lg">
                  Find Your Perfect <span className="text-gradient">Connection</span>
                </h1>
                <p className="text-xl text-dark-secondary">
                  Meet amazing people for dating, relationships, hookups, and travel adventures using AI-powered matching.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/auth?tab=signup" className="btn btn-primary text-lg px-8 py-3 flex items-center gap-2">
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="btn btn-secondary text-lg px-8 py-3">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative h-96">
              <div className="absolute inset-0 gradient-primary rounded-2xl blur-3xl opacity-20" />
              <div className="relative bg-dark-card border border-primary-500/20 rounded-2xl h-full flex items-center justify-center">
                <Sparkles className="w-32 h-32 text-primary-500/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-md text-center mb-16">Why Choose ConnectSphere?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: 'AI-Powered Matching',
                description: 'Our intelligent algorithm finds your perfect match based on interests and compatibility.',
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Multiple Connection Types',
                description: 'Find partners for dating, relationships, hookups, or travel adventures.',
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: 'Travel with Friends',
                description: 'Discover amazing travel companions and explore the world together.',
              },
            ].map((feature, i) => (
              <div key={i} className="card">
                <div className="text-primary-500 mb-4">{feature.icon}</div>
                <h3 className="heading-sm mb-2">{feature.title}</h3>
                <p className="text-dark-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-md mb-4">Ready to Find Your Connection?</h2>
          <p className="text-xl text-dark-secondary mb-8">
            Join thousands of people using ConnectSphere to meet amazing new connections.
          </p>
          <Link to="/auth?tab=signup" className="btn btn-primary text-lg px-8 py-3 inline-block">
            Start Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-dark-border bg-dark-card/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-accent-pink" />
              <span className="font-semibold">ConnectSphere © 2024</span>
            </div>
            <div className="flex items-center space-x-4 text-dark-secondary">
              <a href="#" className="hover:text-primary-500 transition">
                Privacy
              </a>
              <a href="#" className="hover:text-primary-500 transition">
                Terms
              </a>
              <a href="#" className="hover:text-primary-500 transition flex items-center gap-2">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
