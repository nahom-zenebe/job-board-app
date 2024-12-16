import { useState } from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Upload } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Loader } from 'lucide-react'; 
import { signup } from '../feature/authSlice';
import { useNavigate } from 'react-router-dom';


function SignupPages() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSigningup } = useSelector((state) => state.auth);

  const[name,setname]=useState('')
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [role, setrole] = useState('seeker');
 
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);




const handlesignup=(e)=>{
  e.preventDefault()
  dispatch( signup({name,email,password,role,uploadedFile}))
  .unwrap()
  .then(()=>{
    if(role==='seeker'){
      navigate('/MainDashboard');
    }

    navigate('/RecruiterDashboard');
   

  })
  .catch((error) => {
    toast.error(error || 'Signup failed');
  });
 
  

}


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
      toast.success(" file Uploaded successfully")
    }
    else{
    toast.error(" Faild file Uploaded ")}
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
      console.log('Uploaded file:', e.target.files[0]);
      toast.success(" file Uploaded successfully")
    }
    else{
      toast.error(" Faild file Uploaded ")
    }
  
  };

  return (
    <div className="min-h-screen bg-gery-200 text-gray-200">
      
      <div className="container mx-auto py-16 px-4">
        <div className=" shadow-2xl rounded-lg p-8 max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-blue-500 mb-6 text-center">Signup</h2>
          <form className="space-y-4" onSubmit={handlesignup}>
            <div>
              <label className="block text-lg font-medium text-black">Name:</label>
              <input
                type="text"
                value={name}
                placeholder="Enter your name"
                onChange={(e)=>setname(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-600 rounded-md  focus:outline-none focus:ring-2 text-black focus:ring-blue-500"
              />
            </div>
    <div>
              <label className="block text-lg font-medium  text-black">Email:</label>
              <input
                type="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e)=>setemail(e.target.value)}
                className="w-full mt-1 p-2  border border-gray-600 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-black">Password:</label>
              <input
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={(e)=>setpassword(e.target.value)}
                className="w-full text-black mt-1 p-2  border border-gray-600 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
            <label className="block text-lg font-medium text-black">Role:</label>
              <select value={role} onChange={(e)=>setrole(e.target.value)}
                className="w-full mb-5  mt-1 p-2 bg-white border border-gray-600 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="seeker" >Seeker</option>
                <option value="recruiter">Recruiter</option>
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
                <p className="text-center text-gray-500">
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
            <button
  type="submit"
  className={`w-full h-10 rounded-lg text-white ${isSigningup ? 'bg-blue-500 cursor-not-allowed' : 'bg-blue-700'}`}
  disabled={isSigningup}
>
  {isSigningup ? (
    <>
      <Loader className="text-xl ml-24 mt-2"  />
      Signing up...
    </>
  ) : (
    'Signup'
  )}
</button>
            <p className='mt-10 text-center text-gray-800'>Already have an Account? <Link className='underline text-blue-700 hover:no-underline' to='/login'>Log in to user account</Link></p>
          </form>
        </div>
      </div>
     
    </div>
  )
}

export default SignupPages