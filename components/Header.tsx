import React, { useState, useEffect } from 'react';
import { SquadLogoIcon } from './icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#activities', label: 'Activities' },
    { href: '#contact', label: 'Contact' },
  ];
  
  const linkClasses = (mobile = false) => 
    `font-medium transition-colors duration-300 ${mobile ? 'block text-center text-lg py-2 text-gray-700 hover:text-brand-blue' : (isScrolled ? 'text-gray-600 hover:text-brand-blue' : 'text-white hover:text-brand-gold')}`;


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <span className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-brand-blue' : 'text-white'}`}>
            Social Squad
          </span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClasses()}>
              {link.label}
            </a>
          ))}
        </nav>
        {/* FIX: Corrected typo from isMenuOpe to isMenuOpen. */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
          <svg className={`w-6 h-6 transition-colors duration-300 ${isScrolled ? 'text-brand-blue' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 shadow-lg">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClasses(true)} onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;