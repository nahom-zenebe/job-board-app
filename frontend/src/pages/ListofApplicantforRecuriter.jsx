import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import avatar from '../images/avatar.png';
import { getAllApplicationsForRecruiter } from '../feature/applications';
import FormattedTime from '../libs/FormattedTime';

function ListofApplicantforRecuriter() {
  const dispatch = useDispatch();
  const { isgetAllApplicationsForRecruiter, AllApplicationsForRecruiter } = useSelector((state) => state.Application);
  const { authUser } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAllApplicationsForRecruiter());
    console.log(AllApplicationsForRecruiter)
  }, [dispatch]);

  if (!AllApplicationsForRecruiter || AllApplicationsForRecruiter.length === 0) {
    return (
      <div className="w-full p-6 bg-white rounded-lg shadow-lg text-center">
        <p className="text-gray-700">You don't have any applicants yet.</p>
      </div>
    );
  }

  if (isgetAllApplicationsForRecruiter) {
    return <div className="text-center text-blue-600">Loading applicants...</div>;
  }

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-lg max-h-screen overflow-auto">
      <div className="w-10/12 mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-center mb-8 text-3xl font-bold text-blue-900">List of Applicants</h1>

        <div className="space-y-6 overflow-y-auto max-h-[80vh]"> 
          {AllApplicationsForRecruiter.map((applicant, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-xl hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center space-x-6 mb-4">
               
                <img
                  src={applicant?.seeker?.ProfilePic || avatar}
                  alt="applicant"
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-600"
                />
               
                <div>
                  <p className="text-xl font-semibold text-blue-800">{applicant.seeker.name}</p>
                  <p className="text-sm text-gray-600">{applicant.seeker.email}</p>
                </div>
              </div>

         
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <p className="font-medium text-gray-700">Educational Level</p>
                  <p>{applicant.Education}</p>

                  <p className="font-medium text-gray-700">Location</p>
                  <p>{applicant.job.location}</p>

                  <p className="font-medium text-gray-700">Phone</p>
                  <p>{applicant.phone}</p>
                </div>
              </div>

              
              <div className="border-t border-gray-300 pt-6">
                <h2 className="text-xl font-semibold text-blue-900">Job Applied For</h2>
                <p className="font-medium text-gray-600">Company: {applicant.job.company}</p>
                <p className="text-gray-600">Description: {applicant.job.description}</p>
                <p className="text-gray-600">Experience Level: {applicant.job.experienceLevel}</p>
                <p className="text-gray-600">Location: {applicant.job.location}</p>
              </div>

         
              <div className="mt-4 text-right text-sm text-gray-500">
                Applied At: <FormattedTime timestamp={applicant.createdAt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListofApplicantforRecuriter;
