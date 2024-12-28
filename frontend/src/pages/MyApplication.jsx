import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getApplicationById } from '../feature/applications';
import JobSkeleton from '../skeletons/JobSkeletion';
import { useParams } from 'react-router-dom';

function MyApplication() {
  const dispatch = useDispatch();
  const { seekerId } = useParams();
  const { authUser } = useSelector((state) => state.auth);
  const { isApplicationgetById,ApplicationById} = useSelector((state) => state.Application);

  const [ApplicationData, setApplicationData] = useState(ApplicationById||null);

  useEffect(() => {
    if (seekerId) {
      dispatch(getApplicationById({ seekerId })); 
    }
  }, [dispatch, seekerId]);

  useEffect(() => {
    if (ApplicationById) {
      setApplicationData(ApplicationById); 
    }
  }, [ApplicationById]);


 


  if (authUser.user.Id!==seekerId) {
    return (
      <div className="w-full p-6 bg-white rounded-lg shadow-lg text-center">
        <p className="text-gray-700">You Don't have any applications.</p>
    
      </div>
    );
  }


  const { job, seeker, phone, location, coverLetter, Education, appliedAt } = ApplicationData;

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-lg flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">{job?.title} at {job?.company}</h3>
          <p className="text-sm text-gray-500">{job?.location} | {job?.experienceLevel} Level</p>
        </div>
        <span className="bg-gray-200 px-4 py-1 rounded-full text-sm text-gray-700">{job?.role}</span>
      </div>

      <p className="text-gray-700">{job?.description}</p>

      <div className="space-y-2">
        <div className="flex justify-between">
          <p className="font-medium">Applicant:</p>
          <p>{seeker?.name} ({seeker?.email})</p>
        </div>

        <div className="flex justify-between">
          <p className="font-medium">Phone:</p>
          <p>{phone}</p>
        </div>

        <div className="flex justify-between">
          <p className="font-medium">Location:</p>
          <p>{location}</p>
        </div>

        <div className="flex justify-between">
          <p className="font-medium">Cover Letter:</p>
          <p>{coverLetter}</p>
        </div>

        <div className="flex justify-between">
          <p className="font-medium">Education:</p>
          <p>{Education}</p>
        </div>

        <div className="flex justify-between">
          <p className="font-medium">Applied At:</p>
          <p>{new Date(appliedAt).toLocaleString()}</p>
        </div>
      </div>

      <div className="mt-4">
        <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 w-full">
          View More Details
        </button>
      </div>
    </div>
  );
}

export default MyApplication;
