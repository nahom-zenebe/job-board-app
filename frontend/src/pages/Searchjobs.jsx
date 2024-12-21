
import React, { useState } from 'react';

function SearchJobs() {
  const { getalljob } = useSelector((state) => state.job);
  const [jobData, setJobData] = useState(getalljob);
  console.log(getalljob)

  const handleApply = (job) => {
    // Logic for applying to the job (e.g., navigate to application page or trigger apply API)
    console.log(`Applied to job: ${job.title}`);
  };

  const handleViewDetails = (job) => {
    // Logic for viewing the job details (e.g., navigate to job detail page)
    console.log(`View details for job: ${job.title}`);
  };

  return (
    <div className="h-screen bg-white w-full rounded-2xl shadow-2xl p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">Job Listings</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobData.map((job, index) => (
          <div key={index} className="bg-white border rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-500 mt-2">{job.description}</p>
            <div className="mt-4">
              <span className="text-gray-700 font-medium">Location:</span>
              <p className="text-gray-500">{job.location}</p>
              <span className="text-gray-700 font-medium">Experience Level:</span>
              <p className="text-gray-500">{job.experienceLevel}</p>
              <span className="text-gray-700 font-medium">Salary:</span>
              <p className="text-gray-500">{`$${job.salary}`}</p>
            </div>

            <div className="flex justify-between mt-10">
              <button
               
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Apply
              </button>
              <button
              
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchJobs;
