import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./headers/Header.js";
import Navigate from "./headers/Navigate.js";
import Events from "./pages/Events.js";
import Merch from "./pages/Merch.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Soundcloud from "./components/Soundcloud.js";
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Navigate />
        <div className="outer-container">
          <div className="inner-container">
            <Routes>
              <Route path="/" element={<Events />} />
              <Route path="/merch" element={<Merch />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <div className="soundcloud-wrapper">
            <Soundcloud />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
