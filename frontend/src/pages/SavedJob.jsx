import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import JobSkeletion from '../skeletons/JobSkeletion';
import { getpinnedData } from '../feature/jobSlicer';
import { Link } from 'react-router-dom';
import FormattedTime from '../libs/FormattedTime';

function SavedJob() {
  const { getpindata, isgetpindata } = useSelector((state) => state.job);
  const[pinnedData,setpinnedData]=useState(getpindata||[])
  const dispatch = useDispatch();


  useEffect(() => {
    if (!getpindata.length && !isgetpindata) {
      dispatch(getpinnedData());
      console.log(pinnedData)
    }
  }, [dispatch, getpindata, isgetpindata]);


  if (isgetpindata) {
    return <JobSkeletion />;
  }

  if (!getpindata || getpindata.length === 0) {
    return <p>No saved jobs found.</p>;
  }

  if (!Array.isArray(pinnedData) || pinnedData.length === 0) {
    return <p>No saved jobs found.</p>;
  }

  return (
    <div className="h-screen bg-white w-full rounded-2xl shadow-2xl">
      <div className="max-w-2xl mx-auto p-4 py-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Saved Jobs</h2>
        <div className="grid grid-cols-1 mt-40 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pinnedData.map((job, index) => (
            <div key={index} className="bg-white border rounded-lg shadow-lg p-4">
              <div className="flex justify-between">
                <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
              </div>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-gray-500 mt-2">{job.description}</p>
              <div className="mt-4">
                <span className="text-gray-700 font-medium">Location:</span>
                <p className="text-gray-500">{job.location}</p>
                <span className="text-gray-700 font-medium">Experience Level:</span>
                <p className="text-gray-500">{job.experienceLevel}</p>
                <span className="text-gray-700 font-medium">Salary:</span>
                <p className="text-gray-500">{`$${job.Salary}`}</p>
              </div>

              <div className="flex justify-between mt-10 mb-5">
                <Link
                  to={`/MainDashboard/Applicationform/${job._id}`}
                  className="bg-blue-500 w-32 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Apply
                </Link>
                <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400">
                  View Details
                </button>
              </div>

              <div className="mt-auto text-gray-500 text-sm ml-52">
                <FormattedTime timestamp={job.postedAt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SavedJob;
