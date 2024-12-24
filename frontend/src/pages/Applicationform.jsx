import React, { useState } from 'react';

const Applicationform = () => {
  const [formData, setFormData] = useState({
    phone: '',
    location:'',
    seeker: '',
    coverLetter: '',
    Education: '',
 
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Check if all required fields are filled out
    if (!formData.phone) newErrors.phone = 'phone field is required';
    if (!formData.location) newErrors.location= 'location field is required';
    if (!formData.coverLetter) newErrors.coverLetter = 'Cover letter is required';
    if (!formData.Education) newErrors.status = 'Education field is required';
    

    setErrors(newErrors);

    // If no errors, submit the form data (you can call an API here)
    if (Object.keys(newErrors).length === 0) {
      console.log('Form Submitted:', formData);
      // You can also make an API request here
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Job Application Form</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter the Phone number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.phone&& <span className="text-sm text-red-600">{errors.phone}</span>}
        </div>

        <div className="space-y-2">
          <label htmlFor="seeker" className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            id="seeker"
            name="seeker"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter your Location"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.location && <span className="text-sm text-red-600">{errors.location}</span>}
        </div>

        <div className="space-y-2">
          <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">Cover Letter</label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            placeholder="Enter your cover letter"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.coverLetter && <span className="text-sm text-red-600">{errors.coverLetter}</span>}
        </div>

        <div className="space-y-2">
          <label htmlFor="Education" className="block text-sm font-medium text-gray-700">Highest Education background</label>
          <select
            id="Education"
            name="Education"
            value={formData.Education}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Education background</option>
            
            <option value='highschool'>High Schools</option>
            <option value='bachelor_degree'>Bachelor Degree</option>
            <option value='master_degree'>Master Degree</option>
            <option value='doctorate'>Doctorate</option>
            
          </select>
          {errors.Education && <span className="text-sm text-red-600">{errors.Education}</span>}
        </div>



        <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Applicationform;
