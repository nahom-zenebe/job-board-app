import Navbar from "./Components/Navbar";
import StartedPage from "./pages/StartedPage";
import Footer from "./Components/Footer.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Service from "./pages/Service.jsx";
import Contacts from './pages/Contacts.jsx';
import SignupPages from "./pages/SignupPages.jsx";
import LoginPages from "./pages/LoginPages.jsx";

import MainDashboard from './pages/MainDashboard.jsx'
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
        <Route path="/MainDashboard" element={<MainDashboard/>}/>
        <Route path="/login" element={<LoginPages/>}/>
      </Routes>

      <Footer /> 
      <Toaster />
    </Router>
  );
}


export default App;
