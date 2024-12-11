import Navbar from "./Components/Navbar";
import StartedPage from "./pages/StartedPage";
import Footer from "./Components/Footer.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Service from "./pages/Service.jsx";
import Contacts from './pages/Contacts.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar /> {/* This will always be visible as part of the layout */}
      <Routes>
        <Route index element={<StartedPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer /> {/* This will always be visible at the bottom */}
    </Router>
  );
}

export default App;
