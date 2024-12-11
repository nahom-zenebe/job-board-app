import React from 'react';

function Footer() {
  return (
    <div className="bg-blue-800 text-white pt-10 pb-6">
      {/* Footer Content Container */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Section */}
          <div>
            <h2 className="text-3xl font-bold text-blue-300 mb-4">About Us</h2>
            <p className="text-lg text-gray-300">
              We connect professionals with the best opportunities. Whether you're
              looking for the next big job or seeking top talent, we make it easier
              to find success. Join our platform and start building your career today.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="text-3xl font-bold text-blue-300 mb-4">Useful Links</h2>
            <ul className="space-y-2 text-lg text-gray-300">
              <li><a href="#" className="hover:text-blue-400">Job Listings</a></li>
              <li><a href="#" className="hover:text-blue-400">Post a Job</a></li>
              <li><a href="#" className="hover:text-blue-400">Recruiters</a></li>
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-3xl font-bold text-blue-300 mb-4">Contact Us</h2>
            <ul className="space-y-2 text-lg text-gray-300">
              <li>Email: <a href="mailto:info@jobplatform.com" className="hover:text-blue-400">info@jobplatform.com</a></li>
              <li>Phone: (123) 456-7890</li>
              <li>Follow us on:
                <a href="#" className="text-blue-400 ml-2">Facebook</a>,
                <a href="#" className="text-blue-400 ml-2">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black text-gray-400 text-center py-4 mt-8">
        <p>&copy; 2024 JobPlatform. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
