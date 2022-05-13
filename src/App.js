import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Booking, Events, Products, Header, Footer,  Navigate, Soundcloud} from "./pages/index.js";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [showCart, setCart] = useState(false);
  const [showSideBar, setSideBar] = useState(false)
  const handleViewSidebar = () => {
    setSideBar(!showSideBar)
  }
  const handleClose = () => {
    if (showSideBar) handleViewSidebar()
  }

  return (
    <div onClick={handleClose}>
      <ToastContainer autoClose={3000} pauseOnHover={false} pauseOnFocusLoss={false}/>
      <Header />
      <Router>
        <Navigate
          showCart={showCart}
          setCart={setCart}
        />
        <div className="outer-container">
          <div className="inner-container">
            <Routes>
              <Route path="/" element={<Events />} />
              <Route path="/merch" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/booking" element={<Booking />} />
            </Routes>
          </div>
          <Soundcloud isOpen={showSideBar} toggleSideBar={handleViewSidebar}/>
        </div>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
