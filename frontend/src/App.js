import Navbar from "./Components/Navbar";
import StartedPage from "./pages/StartedPage";
import Footer from "./Components/Footer.jsx";
import AboutUs from "./pages/AboutUs";
import Service from "./pages/Service";
import Contacts from './pages/Contacts';
import SignupPages from "./pages/SignupPages";
import LoginPages from "./pages/LoginPages";
import UpdateProfile from './pages/UpdateProfile';
import MyApplication from './pages/MyApplication';
import MainDashboard from './pages/MainDashboard';
import Applicationform from './pages/Applicationform.jsx'
import SavedJob from './pages/SavedJob.jsx';
import Postingjob from './pages/Postingjob';
import Applications from './pages/Applications';
import UpdateRecruiterProfile from './pages/UpdateRecruiterProfile';
import RecruiterDashboard from './pages/RecruiterDashboard';
import Searchjobs from './pages/Searchjobs';
import ListofApplicantforRecuriter from './pages/ListofApplicantforRecuriter';
import PagenotFound from './pages/PagenotFound.jsx'
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<StartedPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/service" element={<Service />} />
        <Route path="/signup" element={<SignupPages/>}/>
        <Route path="login" element={<LoginPages/>}/>
        <Route path='*' element={<PagenotFound/>}/>
        
      <Route path="/MainDashboard" element={<MainDashboard/>}>
        <Route path="UpdateProfile" element={<UpdateProfile/>}/>
        <Route path="Searchjobs" element={<Searchjobs/>}/>
        <Route path="MyApplication/applications/seeker/:seekerId" element={<MyApplication/>}/>
        <Route path="SavedJob" element={<SavedJob/>}/>
        <Route path="/MainDashboard/Applicationform/:jobId" element={<Applicationform/>}/>
      
      </Route>
      <Route path="/RecruiterDashboard" element={<RecruiterDashboard />}>
  <Route path="UpdateRecruiterProfile" element={<UpdateRecruiterProfile />} />
  <Route path="Postingjob" element={<Postingjob />} />
  <Route path="Applications" element={<Applications />} />
    <Route path="ListofApplicantforRecuriter" element={<ListofApplicantforRecuriter/>} />

  
   </Route>
      </Routes>
       
     
      

      <Footer /> 
      <Toaster />
    </Router>
  );
}


export default App;
