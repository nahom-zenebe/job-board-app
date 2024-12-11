import React from 'react'

function Service() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="bg-blue-dark text-white text-center py-16">
        <h1 className="text-5xl font-bold leading-tight text-blue-700">Connect with Top Talent</h1>
        <p className="mt-4 text-xl max-w-3xl mx-auto text-blue-7 text-blue-700">Helping you find the best candidates and hire them quickly. The easiest way to post jobs and hire top talent.</p>
      </header>

      {/* About Section */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-semibold text-blue-dark">About Our Service</h2>
        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-700">
          Our job board connects employers with talented professionals. We offer job posting services, candidate search, and employee onboarding. Whether you're looking to fill one position or build an entire team, we guide you through every step.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-blue-light text-white">
        <h2 className="text-3xl font-semibold text-center text-blue-700">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-6">
          {/* Service 1 */}
          <div className="p-8 bg-white shadow-2xl rounded-xl text-center transition duration-300 ease-in-out hover:shadow-xl">
            <h3 className="text-2xl font-bold text-blue-dark text-blue-700">Job Posting</h3>
            <p className="mt-4 text-gray-600">Easily post job openings and attract the best candidates quickly.</p>
          </div>
          {/* Service 2 */}
          <div className="p-8 bg-white shadow-2xl rounded-xl text-center transition duration-300 ease-in-out hover:shadow-xl">
            <h3 className="text-2xl font-bold text-blue-dark text-blue-700">Candidate Search</h3>
            <p className="mt-4 text-gray-600">Browse through a curated list of candidates who match your specific needs.</p>
          </div>
          {/* Service 3 */}
          <div className="p-8 bg-white shadow-2xl rounded-xl text-center transition duration-300 ease-in-out hover:shadow-xl">
            <h3 className="text-2xl font-bold text-blue-dark text-blue-700">Employer Branding</h3>
            <p className="mt-4 text-gray-600">Enhance your employer profile and attract the best talent through your brand.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-semibold text-blue-dark text-center">How It Works</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="p-8 bg-white shadow-2xl rounded-xl text-center transition duration-300 ease-in-out hover:shadow-xl">
            <h3 className="text-2xl font-bold text-blue-dark">Step 1: Sign Up</h3>
            <p className="mt-4 text-gray-600">Create your account to start posting jobs and connecting with candidates.</p>
          </div>
          {/* Step 2 */}
          <div className="p-8 bg-white shadow-2xl rounded-xl text-center transition duration-300 ease-in-out hover:shadow-xl">
            <h3 className="text-2xl font-bold text-blue-dark">Step 2: Post Jobs</h3>
            <p className="mt-4 text-gray-600">Share detailed job descriptions and start receiving applications from top candidates.</p>
          </div>
          {/* Step 3 */}
          <div className="p-8 bg-white shadow-2xl rounded-xl text-center transition duration-300 ease-in-out hover:shadow-xl">
            <h3 className="text-2xl font-bold text-blue-dark">Step 3: Hire</h3>
            <p className="mt-4 text-gray-600">Review candidates, conduct interviews, and hire your next employee with ease.</p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 px-8 bg-black text-white">
        <h2 className="text-3xl font-semibold text-center">Get in Touch</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-center">
          Ready to start? Contact us now to post your job or find the perfect candidate. We're here to help.
        </p>
        <div className="text-center mt-8">
          <button className="bg-blue-light text-black px-6 py-3 rounded-lg text-lg hover:bg-blue-dark hover:text-white transition duration-300 ease-in-out">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-blue-dark text-center text-white">
        <p>&copy; 2024 Job Board. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Service;
