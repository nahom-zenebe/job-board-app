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
import NewJob from './pages/NewJob';
import Postingjob from './pages/Postingjob';
import Applications from './pages/Applications';
import RecruiterAccountSetting from './pages/RecruiterAccountSetting';
import UpdateRecruiterProfile from './pages/UpdateRecruiterProfile';
import RecruiterDashboard from './pages/RecruiterDashboard';
import AccountSetting from './pages/AccountSetting';
import Searchjobs from './pages/Searchjobs';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const {  authUser } = useSelector((state) => state.auth);
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
        {authUser?.user?.seeker? (<Route path="/MainDashboard" element={<MainDashboard/>}>
        <Route path="/MainDashboard/UpdateProfile" element={<UpdateProfile/>}/>
        <Route path="/MainDashboard/Searchjobs" element={<Searchjobs/>}/>
        <Route path="/MainDashboard/MyApplication" element={<MyApplication/>}/>
        <Route path="/MainDashboard/NewJob" element={<NewJob/>}/>
        <Route path="/MainDashboard/AccountSetting" element={<AccountSetting/>}/>
      </Route>):(<Route path="/RecruiterDashboard " element={<RecruiterDashboard />}>
        <Route path="UpdateRecruiterProfile" element={<UpdateRecruiterProfile/>}/>
        <Route path="Postingjob" element={<Postingjob/>}/>
        <Route path="Applications" element={<Applications/>}/>
        <Route path="RecruiterAccountSetting" element={<RecruiterAccountSetting/>}/>
      </Route>)}
       
     
      </Routes>

      <Footer /> 
      <Toaster />
    </Router>
  );
}


export default App;
