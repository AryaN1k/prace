import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import './App.css'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Navbar />} />
           <Route path="/" element={<Hero/>}/> */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
