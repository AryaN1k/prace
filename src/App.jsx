import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Pricing from "./pages/Pricing/Pricing";
import Aboutus from "./pages/Aboutus/Aboutus";
import Contact from "./pages/ContactUs/Contact";
import SignUp from "./Components/User/SignUp";
import Login from "./Components/User/Login";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="Aboutus" element={<Aboutus />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
