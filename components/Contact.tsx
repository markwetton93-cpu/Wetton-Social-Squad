import React from 'react';
import { EmailIcon, PhoneIcon, MapPinIcon, TicketIcon } from './icons';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 bg-brand-bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-blue mb-4">Get In Touch</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We'd love to hear from you! Whether you're interested in joining, volunteering, or just want more information, please reach out.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-brand-blue mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue" required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue" required></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors duration-300">
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
               <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0"><MapPinIcon className="w-6 h-6 text-brand-blue" /></div>
                <div>
                  <h4 className="font-bold text-lg text-brand-text">Our Location</h4>
                  <p className="text-gray-600">The back entrance of IKON Church<br/>512 Manchester Rd, Stocksbridge, Sheffield S36 2DU</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0"><EmailIcon className="w-6 h-6 text-brand-blue" /></div>
                <div>
                  <h4 className="font-bold text-lg text-brand-text">Email Us</h4>
                  <a href="mailto:social-squad@outlook.com" className="text-gray-600 hover:text-brand-blue cursor-pointer">social-squad@outlook.com</a>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0"><PhoneIcon className="w-6 h-6 text-brand-blue" /></div>
                <div>
                  <h4 className="font-bold text-lg text-brand-text">Call Us</h4>
                  <a href="tel:07838752787" className="text-gray-600 hover:text-brand-blue">07838 752787</a>
                </div>
              </div>
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.115862590799!2d-1.696894084157816!3d53.48663897999715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879786a32373a9d%3A0x6a0c3c8b1e4f4b16!2s512%20Manchester%20Rd%2C%20Stocksbridge%2C%20Sheffield%20S36%202DU%2C%20UK!5e0!3m2!1sen!2sus!4v1684321098765"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google map location of Social Squad"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;