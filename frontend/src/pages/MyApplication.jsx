import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getjobthatappliedbyuser } from '../feature/applications';
import FormattedTime from '../libs/FormattedTime';
import { useParams } from 'react-router-dom';

function MyApplication() {
  const dispatch = useDispatch();
  const { isappliedjobforuserdisplay, appliedjobforuser, error } = useSelector((state) => state.Application);
  const { authUser } = useSelector((state) => state.auth);

  const { seekerId } = useParams();

  useEffect(() => {
    if (seekerId) {
      dispatch(getjobthatappliedbyuser({ userId: seekerId }));
      console.log(appliedjobforuser);
    }
  }, [dispatch, seekerId]);

  if (!appliedjobforuser) {
    return <p>You don't have any applications yet.</p>;
  }

  if (error) {
    return (
      <div className="bg-white shadow-2xl rounded-2xl ml-10 h-screen">
        <p className="text-center mt-10 text-gray-500">An error occurred while fetching the applied jobs. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-2xl rounded-2xl ml-10 h-screen overflow-y-auto p-6">
  <h1 className="text-center pt-5 text-2xl font-bold text-gray-800">Jobs Applied</h1>

  {!isappliedjobforuserdisplay ? (
    appliedjobforuser?.length > 0 ? (
      <ul className="p-5 space-y-6">
        {appliedjobforuser.map((jobApplication) => (
          <li key={jobApplication._id} className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-900">{jobApplication.job.title}</h2>
            <p className="text-gray-600 mt-1">{jobApplication.job.company}</p>
            <p className="text-sm text-gray-500 mt-1">Location: {jobApplication.job.location}</p>
            <p className="text-sm text-gray-500 mt-1">
              Applied At: <FormattedTime timestamp={jobApplication.appliedAt} />
            </p>
            {jobApplication.coverLetter && (
              <div className="mt-3">
                <p className="text-gray-700 font-medium">Cover Letter:</p>
                <p className="text-gray-600 text-sm mt-1">{jobApplication.coverLetter}</p>
              </div>
            )}
            <div className="mt-4 pt-4 border-t">
              <p className="text-sm text-gray-600">
                <strong>Applied for this position:</strong> {jobApplication.job.title}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                <strong>Location:</strong> {jobApplication.job.location}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                <strong>Status:</strong> {jobApplication.status || "Application Submitted"}
              </p>
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-center mt-10 text-gray-500">You haven't applied for any jobs yet.</p>
    )
  ) : (
    <p className="text-center mt-10 text-gray-500">Loading applied jobs...</p>
  )}
</div>
  );
}

export default MyApplication;
