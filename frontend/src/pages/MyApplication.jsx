import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getApplicationById } from '../feature/applications';
import { useParams } from 'react-router-dom';

function MyApplication() {
  const dispatch = useDispatch();
  const { seekerId } = useParams();
  const { authUser } = useSelector((state) => state.auth);
  const { isApplicationgetById, ApplicationById } = useSelector((state) => state.Application);

  const [ApplicationData, setApplicationData] = useState(ApplicationById || null);

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

  if (!ApplicationData) {
    return (
      <div className="w-full p-6 bg-white rounded-lg shadow-lg text-center">
        <p className="text-gray-700">You don't have any applications.</p>
      </div>
    );
  }


  const applications = Array.isArray(ApplicationData) ? ApplicationData : [ApplicationData];

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-lg">
      {applications.map((Applicationdata, id) => (
        <div className="mb-6" key={id}>
   
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold">
                {Applicationdata.job?.title} at {Applicationdata.job?.company}
              </h3>
            </div>
            <span className="bg-gray-200 px-4 py-1 rounded-full text-sm text-gray-700">{Applicationdata.job?.role}</span>
          </div>

          <p className="text-gray-700 mb-4">{Applicationdata.job?.description}</p>

          {/* Application Data */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="font-medium">Applicant:</p>
              <p>{Applicationdata.seeker?.name} ({Applicationdata.seeker?.email})</p>
            </div>

            <div className="flex justify-between">
              <p className="font-medium">Phone:</p>
              <p>{Applicationdata.phone}</p>
            </div>

            <div className="flex justify-between">
              <p className="font-medium">Location:</p>
              <p>{Applicationdata.location}</p>
            </div>

            <div className="flex justify-between">
              <p className="font-medium">Applied At:</p>
              <p>{new Date(Applicationdata.appliedAt).toLocaleString()}</p>
            </div>
          </div>

          
          <div className="mt-4">
            <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 w-full">
              View More Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyApplication;
