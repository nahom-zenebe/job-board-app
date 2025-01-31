import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getApplicationpostedbyRecruiter, getNumberofapplicantforjob, RemoveApplication } from '../feature/applications';
import FormattedTime from '../libs/FormattedTime';
import { X } from 'lucide-react';
import ConfirmRemoveModal from '../libs/ConfirmRemovaModal'; // Import the modal component
import toast from 'react-hot-toast';

function MyApplication() {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.auth);
  const { isApplicationgetByRecruiterId, ApplicationByRecruiterId, getnumberofapplicantforjob, error } = useSelector((state) => state.Application);
  const recruiterId = authUser?.user?.id;
  const [selectedApplicationId, setSelectedApplicationId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  if (error) {
    return (
      <div className="text-center py-4 text-red-500">
        Error: {typeof error === 'string' ? error : error?.message || 'Something went wrong'}
      </div>
    );
  }

  const handleRemoveClick = (applicationId) => {
    setSelectedApplicationId(applicationId);
    setIsModalOpen(true);
  };

  const handleConfirmRemove = () => {
    console.log("Deleting Application ID:", selectedApplicationId); // ✅ Debugging log
  
    if (selectedApplicationId) {
      dispatch(RemoveApplication(selectedApplicationId))
        .unwrap()
        .then(() => {
          toast.success('Application removed successfully');
        })
        .catch((err) => {
          console.error("Error removing application:", err); // ✅ Debugging log
          toast.error(err || 'Failed to remove application');
        });
  
      setIsModalOpen(false);
      setSelectedApplicationId(null);
    }
  };
  

  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedApplicationId(null);
  };

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-lg max-h-screen overflow-auto">
      <div className="space-y-6">
        {applicationData.map((application) => (
          <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md" key={application._id}>
            <X className="remove-btn cursor-pointer" onClick={() => handleRemoveClick(application._id)} />
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {application.title} at {application.company}
                </h3>
              </div>
              <span className="bg-gray-200 px-4 py-1 rounded-full text-sm text-gray-700">
                {application.role}
              </span>
            </div>

            <p className="text-gray-600 mb-4">{application.description}</p>

            <div className="space-y-2">
              <div className="flex justify-between text-gray-700">
                <p className="font-medium">Applicant:</p>
                <p>({getnumberofapplicantforjob?.[application._id] || 0} people applied so far)</p>
              </div>

              <div className="flex justify-between text-gray-700">
                <p className="font-medium">Description:</p>
                <p>{application.description}</p>
              </div>

              <div className="flex justify-between text-gray-700">
                <p className="font-medium">Location:</p>
                <p>{application.location}</p>
              </div>

              <div className="flex justify-between text-gray-700">
                <p className="font-medium">Created At:</p>
                <FormattedTime timestamp={application.postedAt} />
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
      <ConfirmRemoveModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmRemove}
      />
    </div>
  );
}

export default MyApplication;