
import React, { useState ,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import JobSkeletion from '../skeletons/JobSkeletion'
import { getalljob } from '../feature/jobSlicer';

import { Pin } from 'lucide-react';
import { pinJob } from '../feature/jobSlicer'; 
import { Link, useParams } from 'react-router-dom';



function SearchJobs() {
  const {jobId}=useParams()
const { alljobposting, isallJobget } = useSelector((state) => state.job);
const [jobData, setJobData] = useState(alljobposting || []); 
const[givenpin,setGivenPin]=useState(false)
const dispatch = useDispatch();

console.log(alljobposting )

useEffect(() => {
  
  if (!alljobposting) {
    dispatch(getalljob());
  }
}, [dispatch, alljobposting]);

 

if( isallJobget){
  return <JobSkeletion/>

}
const handlePin = (jobId) => {
  dispatch(pinJob(jobId));
};

  return (
    <div className="h-screen bg-white w-full  rounded-2xl shadow-2xl p-6 overflow-auto">
      <h2 className="text-2xl font-semibold text-center mb-6">Job Listings</h2>

      <div className="grid grid-cols-1 mt-40 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobData.map((job, index) => (
          <div key={index} className="bg-white border rounded-lg shadow-lg p-4">
            <div className='flex justify-between'><h3 className="text-xl font-semibold text-gray-800">{job.title}</h3><Pin onClick={() => handlePin(alljobposting._id)}/></div>
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

            <div className="flex justify-between mt-10 mb-5">
              <Link to={`/MainDashboard/Applicationform/${alljobposting._id}`}
               className="bg-blue-500 w-32 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Apply
                </Link>
             
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
