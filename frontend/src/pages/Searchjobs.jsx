import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import JobSkeletion from '../skeletons/JobSkeletion';
import { getalljob } from '../feature/jobSlicer';
import { Link } from 'react-router-dom';
import { Pin } from 'lucide-react';
import { pinJob } from '../feature/jobSlicer'; 
import FormattedTime from '../libs/FormattedTime';

function SearchJobs() {
  const { alljobposting, isPinJob } = useSelector((state) => state.job);
  const [jobData, setJobData] = useState(alljobposting || [
    { _id: '1', title: 'Frontend Developer', category: 'frontend', company: 'TechCorp', description: 'Build user interfaces.', location: 'San Francisco', experienceLevel: 'mid', salary: '80000', postedAt: Date.now() },
    { _id: '2', title: 'Backend Developer', category: 'backend', company: 'DataFlow', description: 'Work on server-side logic.', location: 'New York', experienceLevel: 'senior', salary: '120000', postedAt: Date.now() },
    // ... Add 18 more dummy jobs here
  ]);
  const [filteredJobs, setFilteredJobs] = useState(alljobposting || []);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [locationSearch, setLocationSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (!alljobposting) {
      dispatch(getalljob());
    }
  }, [dispatch, alljobposting]);

  useEffect(() => {
    let filtered = jobData;

    if (selectedCategory) {
      filtered = filtered.filter((job) => job.category === selectedCategory);
    }

    if (selectedExperience) {
      filtered = filtered.filter((job) => job.experienceLevel === selectedExperience);
    }

    if (locationSearch) {
      filtered = filtered.filter((job) =>
        job.location.toLowerCase().includes(locationSearch.toLowerCase())
      );
    }

    setFilteredJobs(filtered);
  }, [selectedCategory, selectedExperience, locationSearch, jobData]);

  if (!filteredJobs) {
    return <JobSkeletion />;
  }

  const handlePin = (jobId) => {
    dispatch(pinJob(jobId));
  };

  return (
    <div className="h-screen bg-gray-50 w-full rounded-2xl shadow-2xl p-6 overflow-auto">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Job Listings</h2>

      {/* Filter Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {/* Category Filter */}
        <div>
          <label htmlFor="category" className="block text-gray-700 font-medium mb-1">Job Category:</label>
          <select
            id="category"
            className="w-full px-4 py-2 border rounded-lg"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="MobileAppDeveloper">Mobile App Developer</option>
            <option value="WebDeveloper">Web Developer</option>
            <option value="DevOpsEngineer">DevOps Engineer</option>
            <option value="DataScientist">Data Scientist</option>
            <option value="MachineLearningEngineer">Machine Learning Engineer</option>
            
          </select>
        </div>

        {/* Experience Level Filter */}
        <div>
          <label htmlFor="experience" className="block text-gray-700 font-medium mb-1">Experience Level:</label>
          <select
            id="experience"
            className="w-full px-4 py-2 border rounded-lg"
            value={selectedExperience}
            onChange={(e) => setSelectedExperience(e.target.value)}
          >
            <option value="">All Levels</option>
            <option value="entry">Entry</option>
            <option value="mid">Mid</option>
            <option value="senior">Senior</option>
          </select>
        </div>

        {/* Location Search */}
        <div>
          <label htmlFor="location" className="block text-gray-700 font-medium mb-1">Location:</label>
          <input
            id="location"
            type="text"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Search by location"
            value={locationSearch}
            onChange={(e) => setLocationSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Job Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div key={index} className="bg-white border rounded-lg shadow-lg overflow-hidden">
              <div className="flex justify-between p-4">
                <h3 className="text-2xl font-semibold text-gray-800">{job.title}</h3>
                <Pin 
                  className={`${isPinJob ? 'text-green-700' : 'text-gray-800'}`} 
                  onClick={() => handlePin(job._id)} 
                />
              </div>
              <p className="text-gray-600 p-4">{job.company}</p>
              <p className="text-gray-500 mt-2 px-4">{job.description}</p>
              <div className="mt-4 px-4">
                <span className="text-gray-700 font-medium">Location:</span>
                <p className="text-gray-500">{job.location}</p>
                <span className="text-gray-700 font-medium">Experience Level:</span>
                <p className="text-gray-500">{job.experienceLevel}</p>
                <span className="text-gray-700 font-medium">Salary:</span>
                <p className="text-gray-500">{`$${job.salary}`}</p>
              </div>
              <div className="flex justify-between px-4 mt-10 mb-5">
                <Link 
                  to={`/MainDashboard/Applicationform/${job._id}`}
                  className="bg-blue-500 text-white w-52 h-12 text-center px-8 py-3 rounded-md hover:bg-blue-600 transition"
                >
                  Apply
                </Link>
                <button 
                  className="bg-gray-300 text-gray-800 w-52 h-12 flex justify-center items-center px-8 py-3 rounded-md hover:bg-gray-400 transition mt-2 sm:mt-0"
                >
                  View Details
                </button>
              </div>
              <div className="p-4 border-t text-right text-gray-500 text-sm">
                <FormattedTime timestamp={job.postedAt} />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 w-full col-span-3">No jobs found for the selected criteria</p>
        )}
      </div>
    </div>
  );
}

export default SearchJobs;
