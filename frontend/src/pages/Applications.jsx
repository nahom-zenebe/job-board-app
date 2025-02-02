import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getApplicationpostedbyRecruiter, RemoveApplication } from '../feature/applications';
import FormattedTime from '../libs/FormattedTime';
import { X } from 'lucide-react';
import ConfirmRemoveModal from '../libs/ConfirmRemovaModal'; // Import the modal component
import toast from 'react-hot-toast';

function MyApplication() {
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.auth);
  const { isApplicationgetByRecruiterId, ApplicationByRecruiterId, error } = useSelector((state) => state.Application);
  const recruiterId = authUser?.user?.id;
  const [selectedApplicationId, setSelectedApplicationId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { filterjobs, alljobposting, isPinJob } = useSelector((state) => state.job);
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
  console.log(applicationData)

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
    console.log("Deleting Application ID:", selectedApplicationId); 
  
    if (selectedApplicationId) {
      dispatch(RemoveApplication(selectedApplicationId))
        .unwrap()
        .then((response) => {
          console.log("API Response:", response); 
          toast.success('Application removed successfully');
        })
        .catch((err) => {
          console.error("Error removing application:", err);
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
console.log(applicationData)
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

           
          </div>
        ))}
      </div>
      <ConfirmRemoveModal isOpen={isModalOpen} onClose={handleCloseModal} onConfirm={handleConfirmRemove}
      />
    </div>
  );
}
export default MyApplication;