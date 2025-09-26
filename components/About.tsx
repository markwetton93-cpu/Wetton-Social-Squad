import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-bg-light">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-brand-blue mb-4">Experienced, Person-Centred Support</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 leading-relaxed text-lg">
            With 16 years of experience across youth clubs, supported living, live-in care, and education, we deliver person-centred support that promotes independence and builds meaningful connections. Our fun, approachable team creates tailored activity plans based on individual needs, fostering a safe, inclusive environment where everyone feels valued and free to be themselves.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;