import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Postingjob() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {} = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    location: '',
    jobType: '',
    salary: '',
    jobDescription: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
   
  };


  return (
    
    <div className="h-screen bg-gray-100">
      <div className="bg-white w-full max-w-4xl p-8 h-screen rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Post a Job</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label htmlFor="jobTitle" className="text-sm font-medium text-gray-700 mb-2">
                Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter job title"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="companyName" className="text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
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
              <label htmlFor="jobType" className="text-sm font-medium text-gray-700 mb-2">
                Job Type
              </label>
              <select
                id="jobType"
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">Select job type</option>
                <option value="full-time">Full-Time</option>
                <option value="part-time">Part-Time</option>
                <option value="contract">Contract</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label htmlFor="salary" className="text-sm font-medium text-gray-700 mb-2">
                Salary (per year)
              </label>
              <input
                type="number"
                id="salary"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter salary"
                required
              />
            </div>
          </div>

          <div className="flex flex-col mb-6">
            <label htmlFor="jobDescription" className="text-sm font-medium text-gray-700 mb-2">
              Job Description
            </label>
            <textarea
              id="jobDescription"
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter job description"
              rows="6"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none  focus:ring-2 focus:ring-blue-500"
          >
            Post Job
          </button>
        </form>
      </div>
    </div>
    
    
  )
}

export default Postingjob