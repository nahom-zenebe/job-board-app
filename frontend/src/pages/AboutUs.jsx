import React from 'react'

function AboutUs() {
    return(
    <div className="bg-gray-100">

    <header className="bg-blue-900 text-white text-center py-16">
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="mt-4 text-xl">Building the Future of Talent and Opportunity</p>
    </header>


    <section className="py-16 px-8 text-center">
      <h2 className="text-3xl font-semibold text-blue-900">Our Story</h2>
      <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600">
        Founded in 2024, we quickly gained recognition as a leader in connecting top talent with leading employers. Our platform provides a seamless way for companies to find the right candidates, while helping professionals discover their next career opportunity. With a focus on innovation and user experience, we have rapidly grown into one of the most trusted job boards in the industry.
      </p>
    </section>

    {/* Our Mission Section */}
    <section className="py-16 bg-blue-100 text-center">
      <h2 className="text-3xl font-semibold text-blue-900">Our Mission</h2>
      <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600">
        Our mission is simple: To bridge the gap between employers and talented individuals by providing an easy-to-use platform that supports growth and opportunities. We strive to make hiring smarter, faster, and more efficient for everyone involved.
      </p>
    </section>

    {/* Growth & Popularity Section */}
    <section className="py-16 px-8">
      <h2 className="text-3xl font-semibold text-blue-900 text-center">Our Growth</h2>
      <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600">
        Since our inception in 2024, we’ve seen rapid growth in both the number of job postings and companies using our platform. Our user base has expanded across multiple industries, and we’re proud to have helped thousands of companies hire the talent they need to thrive. Our commitment to innovation has earned us the trust of clients, leading us to become one of the most popular job boards in a short span of time.
      </p>
    </section>

    {/* Our Values Section */}
    <section className="py-16 bg-blue-200 text-center">
      <h2 className="text-3xl font-semibold text-blue-900">Our Values</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Value 1 */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <h3 className="text-2xl font-bold text-blue-900">Integrity</h3>
          <p className="mt-4 text-gray-600">We believe in being honest and transparent in everything we do, building trust with both employers and job seekers.</p>
        </div>
        {/* Value 2 */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <h3 className="text-2xl font-bold text-blue-900">Innovation</h3>
          <p className="mt-4 text-gray-600">We continuously innovate to improve the hiring process and provide users with the best experience possible.</p>
        </div>
        {/* Value 3 */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <h3 className="text-2xl font-bold text-blue-900">Excellence</h3>
          <p className="mt-4 text-gray-600">We strive for excellence in every aspect of our service, ensuring that both employers and job seekers have a seamless experience.</p>
        </div>
      </div>
    </section>

    
   
  </div>
    )
}

export default AboutUs