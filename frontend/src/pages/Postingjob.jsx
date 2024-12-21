import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createjob } from '../feature/jobSlicer';

function PostingJob() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authUser } = useSelector((state) => state.auth);
  const { isJobcreate } = useSelector((state) => state.job);
  const [recruiter, setRecruiter] = useState(authUser?.user?._id || null);  // Ensure recruiter ID is available
 console.log(authUser)
  const [formData, setFormData] = useState({
    title: '', // Job Title
    company: '', // Company Name
    location: '', // Job Location
    experienceLevel: '', // Experience Level
    Salary: '', // Salary
    description: '', // Job Description
    recruiter: authUser?.user?.id || null, // Recruiter ID
    role: 'recruiter', // Fixed Role
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createjob(formData))
    .unwrap()
      .then(() => {
        navigate('/RecruiterDashboard');
      })
      .catch((error) => {
        console.error('Job creation error:', error);
      });
  };

  return (
    <div className="h-screen bg-gray-100">
      <div className="bg-white w-full max-w-4xl p-8 h-screen rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Post a Job</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label htmlFor="title" className="text-sm font-medium text-gray-700 mb-2">
                Job Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter job title"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="company" className="text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter company name"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label htmlFor="location" className="text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter job location"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="experienceLevel" className="text-sm font-medium text-gray-700 mb-2">
                Experience Level
              </label>
              <select
  id="experienceLevel"
  name="experienceLevel"
  value={formData.experienceLevel}
  onChange={handleChange}
  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
  required
>
  <option value="">Select experience level</option>
  <option value="Entry">Entry</option>
  <option value="Mid">Mid</option>
  <option value="Senior">Senior</option>
</select>
            </div>
          </div>

          <div className="flex flex-col mb-6">
            <label htmlFor="Salary" className="text-sm font-medium text-gray-700 mb-2">
              Salary (per year)
            </label>
            <input
              type="number"
              id="Salary"
              name="Salary"
              value={formData.Salary}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter salary"
              required
            />
          </div>

          <div className="flex flex-col mb-6">
            <label htmlFor="description" className="text-sm font-medium text-gray-700 mb-2">
              Job Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter job description"
              rows="6"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isJobcreate}
          >
            {isJobcreate ? 'Posting...' : 'Post Job'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostingJob;
