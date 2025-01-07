import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            About Us
          </h1>
          <p className="mt-4 text-lg sm:text-xl">
            Learn more about who we are, our mission, and our values. We&apos;re here to make a difference.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our mission is to deliver the highest quality products and services that exceed customer expectations. We aim to innovate, inspire, and lead in our field, providing exceptional value to every individual and business we serve.
          </p>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-white py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our team is made up of passionate, creative, and talented individuals who are committed to making a positive impact.
          </p>

          {/* Team Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image className="w-32 h-32 mx-auto rounded-full" src="https://via.placeholder.com/150" alt="Team Member 1" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">John Doe</h3>
              <p className="mt-2 text-gray-500">CEO & Founder</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image className="w-32 h-32 mx-auto rounded-full" src="https://via.placeholder.com/150" alt="Team Member 2" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Jane Smith</h3>
              <p className="mt-2 text-gray-500">Marketing Head</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image className="w-32 h-32 mx-auto rounded-full" src="https://via.placeholder.com/150" alt="Team Member 3" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Bob Johnson</h3>
              <p className="mt-2 text-gray-500">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>

      

    </div>
  );
};

export default About;
