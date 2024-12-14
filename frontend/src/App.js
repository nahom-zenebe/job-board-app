import Navbar from "./Components/Navbar";
import StartedPage from "./pages/StartedPage";
import Footer from "./Components/Footer.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Service from "./pages/Service.jsx";
import Contacts from './pages/Contacts.jsx';
import SignupPages from "./pages/SignupPages.jsx";
import LoginPages from "./pages/LoginPages.jsx";
import UpdateProfile from './pages/UpdateProfile.jsx'
import MyApplication from './pages/MyApplication.jsx'
import MainDashboard from './pages/MainDashboard.jsx'
import NewJob from './pages/NewJob.jsx'
import AccountSetting from './pages/AccountSetting.jsx'
import Searchjobs from './pages/Searchjobs.jsx'
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
        <Route path="/MainDashboard" element={<MainDashboard/>}>
        <Route path="/MainDashboard/UpdateProfile" element={<UpdateProfile/>}/>
        <Route path="/MainDashboard/Searchjobs" element={<Searchjobs/>}/>
        <Route path="/MainDashboard/MyApplication" element={<MyApplication/>}/>
        <Route path="/MainDashboard/NewJob" element={<NewJob/>}/>
        <Route path="/MainDashboard/AccountSetting" element={<AccountSetting/>}/>
      </Route>
        <Route path="login" element={<LoginPages/>}/>
      </Routes>

      <Footer /> 
      <Toaster />
    </Router>
  );
}


export default App;
