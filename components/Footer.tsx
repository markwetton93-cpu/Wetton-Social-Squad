import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <nav className="flex justify-center space-x-6 mb-6">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#activities" className="text-gray-300 hover:text-white transition-colors">Activities</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
        </nav>
        <p className="text-lg font-semibold text-white mb-2">
          Social Squad
        </p>
        <p className="text-gray-400 text-sm">
          Community - Support
        </p>
        <p className="text-gray-400 text-sm mt-4">
          &copy; {new Date().getFullYear()} Social Squad. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;