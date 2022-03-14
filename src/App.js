import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Contact, Events, Products, Header, Navigate, Soundcloud} from "./pages/index.js";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [showShoppingCart, setShowShoppingCart] = useState(false);

  return (
    <>
      <Header />
      <Router>
        <Navigate
          showShoppingCart={showShoppingCart}
          setShowShoppingCart={setShowShoppingCart}
        />
        <div className="outer-container">
          <div className="inner-container">
            <Routes>
              <Route path="/" element={<Events />} />
              <Route path="/merch" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Soundcloud />
        </div>
      </Router>
    </>
  );
};

export default App;
