import React from 'react';
import { TicketIcon } from './icons';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen bg-brand-blue text-white flex items-center justify-center text-center py-20"
    >
      <div className="container mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in-down">
          Welcome to the Squad!
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto font-light animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Join our inclusive, person-centred social group in Stockbridge.
        </p>
        <p className="text-xl md:text-2xl mb-2 font-semibold animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Every Tuesday, 10am - 3pm
        </p>
        <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <TicketIcon className="w-8 h-8 text-brand-gold" />
            <p className="text-xl md:text-2xl font-semibold text-white">
                Entry Fee <span className="font-bold text-brand-gold">£15</span>
            </p>
        </div>
        <a 
          href="#contact" 
          className="bg-brand-gold text-brand-blue font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-transform duration-300 transform hover:scale-105 inline-block animate-fade-in-up animate-pulse-subtle"
          style={{ animationDelay: '0.9s' }}
        >
          Get Involved Today!
        </a>
      </div>
    </section>
  );
};

export default Hero;