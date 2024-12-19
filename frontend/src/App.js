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
        
      <Route path="/MainDashboard" element={<MainDashboard/>}>
        <Route path="UpdateProfile" element={<UpdateProfile/>}/>
        <Route path="Searchjobs" element={<Searchjobs/>}/>
        <Route path="MyApplication" element={<MyApplication/>}/>
        <Route path="NewJob" element={<NewJob/>}/>
        <Route path="AccountSetting" element={<AccountSetting/>}/>
      </Route>
      <Route path="/RecruiterDashboard" element={<RecruiterDashboard />}>
  <Route path="UpdateRecruiterProfile" element={<UpdateRecruiterProfile />} />
  <Route path="Postingjob" element={<Postingjob />} />
  <Route path="Applications" element={<Applications />} />
  <Route path="RecruiterAccountSetting" element={<RecruiterAccountSetting />} />
   </Route>
      </Routes>
       
     
      

      <Footer /> 
      <Toaster />
    </Router>
  );
}


export default App;
