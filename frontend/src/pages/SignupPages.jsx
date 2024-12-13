import { useState } from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Upload } from 'lucide-react';
function SignupPages() {
  const [dragActive, setDragActive] = useState(false);

  const [uploadedFile, setUploadedFile] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
      console.log('Uploaded file:', e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
      console.log('Uploaded file:', e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gery-200 text-gray-200">
      
      <div className="container mx-auto py-16 px-4">
        <div className=" shadow-2xl rounded-lg p-8 max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-blue-500 mb-6 text-center">Signup</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-lg font-medium text-black">Name:</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 p-2 border border-gray-600 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
    <div>
              <label className="block text-lg font-medium  text-black">Email:</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-2  border border-gray-600 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-black">Password:</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-1 p-2  border border-gray-600 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
            <label className="block text-lg font-medium text-black">Role:</label>
              <select
                className="w-full mb-5 mt-1 p-2 bg-white border border-gray-600 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Seeker">Seeker</option>
                <option value="Recruiter">Recruiter</option>
              </select>
            </div>
            <div
              className={`mt-4 p-4 border-2 rounded-md border-dashed ${
                dragActive ? 'border-blue-500 bg-gray-600' : 'border-gray-600'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <label className="flex flex-col items-center cursor-pointer">
                <Upload className="w-6 h-6 text-blue-500 mb-2" />
                <p className="text-center text-gray-300">
                  {uploadedFile ? `Uploaded: ${uploadedFile.name}` : 'Drag and drop your resume here or click to upload icon'}
                </p>
                <input
               
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            <button type='submit' className=' w-full bg-blue-700  h-10 rounded-lg'>Signup</button>
          </form>
        </div>
      </div>
     
    </div>
  )
}

export default SignupPages