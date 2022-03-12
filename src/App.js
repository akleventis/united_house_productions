import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Navigate } from "./headers/index.js";
import { About, Contact, Events, Merch } from "./pages/index.js";
import { Soundcloud } from "./components/index.js";
import "./App.css";

const App = () => {
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
          <Soundcloud />
        </div>
      </Router>
    </div>
  );
};

export default App;
