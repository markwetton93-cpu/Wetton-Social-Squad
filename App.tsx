import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-brand-text antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;