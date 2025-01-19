import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getApplicationpostedbyRecruiter } from '../feature/applications';

function MyApplication() {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.auth);
  const { isApplicationgetByRecruiterId, ApplicationByRecruiterId, error } = useSelector((state) => state.Application);


  const recruiterId = authUser.user.id;
 

  const [applicationData, setApplicationData] = useState(ApplicationByRecruiterId || []);

  useEffect(() => {
    if (recruiterId) {

      dispatch(getApplicationpostedbyRecruiter({ recruiterId }));
    }
  }, [dispatch, recruiterId]);

  useEffect(() => {
    if (ApplicationByRecruiterId) {
      setApplicationData(ApplicationByRecruiterId);
    }
  }, [ApplicationByRecruiterId]);

  if (isApplicationgetByRecruiterId) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">Error: {error.message}</div>;
  }

  if (!applicationData || (Array.isArray(applicationData) && applicationData.length === 0)) {
    return (
      <div className="w-full p-6 bg-white rounded-lg shadow-lg text-center">
        <p className="text-gray-700">You don't have any applications posted yet.</p>
      </div>
    );
  }

  const applications = Array.isArray(applicationData) ? applicationData : [applicationData];

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-lg max-h-screen overflow-auto">
      <div className="space-y-6">
        {applications.map((application) => (
          <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md" key={application._id}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {application.job?.title} at {application.job?.company}
                </h3>
              </div>
              <span className="bg-gray-200 px-4 py-1 rounded-full text-sm text-gray-700">
                {application.job?.role}
              </span>
            </div>

            <p className="text-gray-600 mb-4">{application.job?.description}</p>

            {/* Application Data */}
            <div className="space-y-2">
              <div className="flex justify-between text-gray-700">
                <p className="font-medium">Applicant:</p>
                <p>{application.seeker?.name} ({application.seeker?.email})</p>
              </div>

              <div className="flex justify-between text-gray-700">
                <p className="font-medium">Phone:</p>
                <p>{application.phone}</p>
              </div>

              <div className="flex justify-between text-gray-700">
                <p className="font-medium">Location:</p>
                <p>{application.location}</p>
              </div>

              <div className="flex justify-between text-gray-700">
                <p className="font-medium">Applied At:</p>
                <p>{new Date(application.appliedAt).toLocaleString()}</p>
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
    </div>
  );
}

export default MyApplication;
