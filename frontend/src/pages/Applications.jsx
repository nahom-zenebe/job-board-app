import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllApplicationsForRecruiter } from '../feature/applications';

function Applications() {
  const dispatch = useDispatch();

  const { AllApplicationsForRecruiter, isgetAllApplicationsForRecruiter } = useSelector(
    (state) => state.Application
  );

  useEffect(() => {
    if (!AllApplicationsForRecruiter && !isgetAllApplicationsForRecruiter) {
      dispatch(getAllApplicationsForRecruiter());
    }
  }, [dispatch, AllApplicationsForRecruiter, isgetAllApplicationsForRecruiter]);

  if (isgetAllApplicationsForRecruiter) {
    return <h1 className="text-center mt-20">Loading...</h1>;
  }

  if (!AllApplicationsForRecruiter || AllApplicationsForRecruiter.length === 0) {
    return <h1 className="text-center mt-20">No Applications Found</h1>;
  }

  return (
    <div className="h-screen bg-gray-50 w-full rounded-2xl shadow-2xl p-10">
      <h1 className="text-2xl font-bold text-center mb-10">Applications</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {AllApplicationsForRecruiter.map((application, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{application.job.title}</h3>
              <span className="text-sm text-gray-500">{application.job.company}</span>
            </div>
            <p className="text-gray-700 mb-2">Applicant: {application.seeker.name}</p>
            <p className="text-gray-700 mb-2">Location: {application.location}</p>
            <p className="text-gray-700 mb-2">Phone: {application.phone}</p>
            <p className="text-gray-700 mb-2">Education: {application.education}</p>
            <p className="text-gray-700 mb-2">Cover Letter: {application.coverLetter}</p>
            <p className="text-gray-500 text-sm">Applied At: {new Date(application.appliedAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Applications;
