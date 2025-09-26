import React from 'react';
import { CraftIcon, WalkIcon, TripIcon, GamesFilmIcon, TuckShopIcon } from './icons';

interface ActivityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
    <div className="inline-block bg-brand-gold/20 text-brand-blue p-4 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-brand-blue mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Activities: React.FC = () => {
  const activities = [
    {
      icon: <GamesFilmIcon className="w-8 h-8" />,
      title: 'Games & Films',
      description: 'Enjoy a friendly board game, a puzzle, or relax with a classic film in great company.',
    },
    {
      icon: <CraftIcon className="w-8 h-8" />,
      title: 'Craft Sessions',
      description: 'Unleash your artistic side with our guided craft sessions. All materials and support provided.',
    },
    {
      icon: <WalkIcon className="w-8 h-8" />,
      title: 'Wellbeing Walks',
      description: 'Explore beautiful local scenery. Our country walks are paced for all abilities to enjoy the fresh air.',
    },
     {
      icon: <TripIcon className="w-8 h-8" />,
      title: 'Day Trips',
      description: 'We organize trips to museums, historical sites, and local attractions. A great way to explore together.',
    },
    {
      icon: <TuckShopIcon className="w-8 h-8" />,
      title: 'Tuck Shop',
      description: 'Grab affordable and delicious snacks and drinks throughout the day at our friendly tuck shop.',
    },
  ];

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-brand-blue mb-4">What's On</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          Our weekly schedule is packed with diverse activities designed to be fun, engaging, and skill-building. There's something for everyone to enjoy!
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.slice(0, 5).map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;