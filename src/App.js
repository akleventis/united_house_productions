import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import BootstrapToast from "./lib/Toast.js";
import useContentful from "./lib/useContenful.js";
import productHelpers from "./lib/productHelpers.js";
import {
  About,
  Booking,
  Events,
  Products,
  Header,
  Footer,
  Navigate,
  Soundcloud,
} from "./pages/index.js";


const App = () => {
  // Contentful //
  const [events, setEvents] = useState([]);
  const [featuredArtists, setFeaturedArtists] = useState([]);
  const [aboutText, setAboutText] = useState([]);
  const [aboutImage, setAboutImage] = useState([]);
  const [products, setproducts] = useState([{}]);
  const [productMapping, setProductMapping] = useState([]);
  const {
    getEvents,
    getFeaturedArtists,
    getAboutText,
    getAboutImages,
    getProductImages,
  } = useContentful();
  const {
    hashProducts,
    createProductMapping
  } = productHelpers()
  // ---------- //

  // Toast //
  const [displayToast, setDisplayToast] = useState(false);
  const [toastData, setToastData] = useState("");
  const toggleToast = (data, isDisplayed) => {
    setToastData(data);
    if (!isDisplayed) setDisplayToast(!displayToast);
  };
  // --------------- //

  // Soundcloud Sidebar //
  const [showCart, setCart] = useState(false);
  const [showSideBar, setSideBar] = useState(false);
  const handleViewSidebar = () => {
    setSideBar(!showSideBar);
  };
  const handleClose = () => {
    if (showSideBar) handleViewSidebar();
  };
  // ------------------- //

  useEffect(() => {
    const getItems = async (productImages) => {
      const server_url = process.env.REACT_APP_SERVER_URL;
      try {
        // get all merch from database
        const items = await axios.get(`${server_url}/products`);

        // create hashed data structure
        const hashedProducts = hashProducts(items.data);
        setproducts(hashedProducts);

        // create product mapping for front-end cards
        const productMapping = createProductMapping(items.data, productImages);
        setProductMapping(productMapping);
      } catch (error) {
        console.log("Error accounted for, server still wip");
      }
    };
    // get product images from contentful
    getProductImages().then((res) => {
      getItems(res);
    });

    getEvents().then((res) => {
      setEvents(res);
    });
    getFeaturedArtists().then((res) => {
      setFeaturedArtists(res);
    });
    getAboutText().then((res) => {
      res && setAboutText(res);
    });
    getAboutImages().then((res) => {
      res && setAboutImage(res);
    });
  }, []);

  return (
    <div onClick={handleClose}>
      <BootstrapToast
        toastData={toastData}
        toggleToast={toggleToast}
        displayToast={displayToast}
      />

      <Header />
      <Router>
        <Navigate
          showCart={showCart}
          setCart={setCart}
          toggleToast={toggleToast}
          displayToast={displayToast}
        />
        <div className="outer-container">
          <div className="inner-container">
            <Routes>
              <Route path="/" element={<Events events={events} />} />
              <Route
                path="/merch"
                element={
                  <Products
                    products={products}
                    productMapping={productMapping}
                    toggleToast={toggleToast}
                    displayToast={displayToast}
                  />
                }
              />
              <Route
                path="/about"
                element={<About textArr={aboutText} images={aboutImage} />}
              />
              <Route
                path="/booking"
                element={
                  <Booking
                    toggleToast={toggleToast}
                    displayToast={displayToast}
                  />
                }
              />
            </Routes>
          </div>
          <Soundcloud
            isOpen={showSideBar}
            toggleSideBar={handleViewSidebar}
            featuredArtists={featuredArtists}
          />
        </div>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
