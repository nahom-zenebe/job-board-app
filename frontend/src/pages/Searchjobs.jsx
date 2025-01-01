import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import JobSkeletion from '../skeletons/JobSkeletion';
import { getalljob } from '../feature/jobSlicer';
import { Link } from 'react-router-dom';
import { Pin } from 'lucide-react';
import { pinJob } from '../feature/jobSlicer'; 
import FormattedTime from '../libs/FormattedTime';

function SearchJobs() {
  const { alljobposting, isallJobget, isPinJob } = useSelector((state) => state.job);
  const [jobData, setJobData] = useState(alljobposting || null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!alljobposting) {
      dispatch(getalljob());
    }
  }, [dispatch, alljobposting]);

  if (!jobData) {
    return <JobSkeletion />;
  }

  const handlePin = (jobId) => {
    dispatch(pinJob(jobId));
  };

  return (
    <div className="h-screen bg-gray-50 w-full rounded-2xl shadow-2xl p-6 overflow-auto">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Job Listings</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobData.map((job, index) => (
          <div key={index} className="bg-white border rounded-lg shadow-lg overflow-hidden">
            <div className="flex justify-between p-4">
              <h3 className="text-2xl font-semibold text-gray-800">{job.title}</h3>
              <Pin 
                className={`${isPinJob === true ? 'text-green-700' : 'text-gray-800'}`} 
                onClick={() => handlePin(job?._id)} 
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
  className="bg-gray-300 text-gray-800 w-52 h-12 flex justify-center items-center px-8 py-3 rounded-md hover:bg-gray-400 transition mt-2 sm:mt-0">
  View Details
</button>
            </div>

            <div className="p-4 border-t text-right  text-gray-500 text-sm">
              <FormattedTime timestamp={job.postedAt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchJobs;
