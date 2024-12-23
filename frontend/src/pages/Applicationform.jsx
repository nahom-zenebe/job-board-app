import React, { useState } from 'react';

const Applicationform = () => {
  const [formData, setFormData] = useState({
    job: '',
    seeker: '',
    coverLetter: '',
    status: '',
    appliedAt: '',
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
    if (!formData.job) newErrors.job = 'Job field is required';
    if (!formData.seeker) newErrors.seeker = 'Seeker field is required';
    if (!formData.coverLetter) newErrors.coverLetter = 'Cover letter is required';
    if (!formData.status) newErrors.status = 'Status field is required';
    if (!formData.appliedAt) newErrors.appliedAt = 'Applied date is required';

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
          <label htmlFor="job" className="block text-sm font-medium text-gray-700">Job</label>
          <input
            type="text"
            id="job"
            name="job"
            value={formData.job}
            onChange={handleChange}
            placeholder="Enter the job title"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.job && <span className="text-sm text-red-600">{errors.job}</span>}
        </div>

        <div className="space-y-2">
          <label htmlFor="seeker" className="block text-sm font-medium text-gray-700">Seeker</label>
          <input
            type="text"
            id="seeker"
            name="seeker"
            value={formData.seeker}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.seeker && <span className="text-sm text-red-600">{errors.seeker}</span>}
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
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">Application Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
          </select>
          {errors.status && <span className="text-sm text-red-600">{errors.status}</span>}
        </div>

        <div className="space-y-2">
          <label htmlFor="appliedAt" className="block text-sm font-medium text-gray-700">Applied Date</label>
          <input
            type="date"
            id="appliedAt"
            name="appliedAt"
            value={formData.appliedAt}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.appliedAt && <span className="text-sm text-red-600">{errors.appliedAt}</span>}
        </div>

        <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Applicationform;
