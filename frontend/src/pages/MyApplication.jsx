import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getjobthatappliedbyuser } from '../feature/applications';
import FormattedTime from '../libs/FormattedTime';

function MyApplication() {
  const dispatch = useDispatch();
  const { isappliedjobforuserdisplay, appliedjobforuser } = useSelector((state) => state.Application);
  const { authUser } = useSelector((state) => state.auth);

  const [appliedData, setAppliedData] = useState([]);

  useEffect(() => {
    if (authUser?.user?.id) {
      dispatch(getjobthatappliedbyuser());
  
    }
  }, [dispatch, authUser?.user?.id]);

  useEffect(() => {
    if (appliedjobforuser) {
      setAppliedData(appliedjobforuser);
    }
  }, [appliedjobforuser]);

  return (
    <div className="bg-white shadow-2xl rounded-2xl ml-10 h-screen">
      <h1 className="text-center pt-5 text-2xl">Jobs Applied</h1>

      {isappliedjobforuserdisplay ? (
        appliedData.length > 0 ? (
          <ul className="p-5 space-y-4">
            {appliedData.map((job) => (
              <li key={job._id} className="border rounded-lg p-4 shadow-sm">
                <h2 className="text-xl font-semibold">{job.jobTitle}</h2>
                <p className="text-gray-600">{job.companyName}</p>
                <p className="text-sm text-gray-500">Location: {job.location}</p>
                <p className="text-sm text-gray-500">
                  Applied At: <FormattedTime timestamp={job.appliedAt} />
                </p>
                {job.coverLetter && <p className="mt-2">Cover Letter: {job.coverLetter}</p>}
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
