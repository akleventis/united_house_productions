import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Toast from "react-bootstrap/Toast";
import useContentful from "./useContenful.js";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";


const BootstrapToast = ({ toastData, displayToast, toggleToast }) => {
  return (
    <div>
      <Toast
        autohide
        show={displayToast}
        style={{ position: "fixed", top: 0, right: 0, zIndex: 7000 }}
        onClose={() => toggleToast("", false)}
      >
        <Toast.Header>
          <strong>😳</strong>
        </Toast.Header>
        <Toast.Body>{toastData}</Toast.Body>
      </Toast>
    </div>
  );
};

const App = () => {
  // Contentful //
  const [events, setEvents] = useState([]);
  const [featuredArtists, setFeaturedArtists] = useState([]);
  const [about, setAbout] = useState([]);
  const [aboutImage, setAboutImage] = useState([]);
  const [products, setproducts] = useState([{}]);
  const [productMapping, setProductMapping] = useState([]);
  const {
    getEvents,
    getFeaturedArtists,
    getAbout,
    getAboutImages,
    getProductImages,
  } = useContentful();
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

  const hashProducts = (data) => {
    let products = {};
    data.forEach((p) => {
      p.price = p.price / 100;
      let sizeMapping = {};
      let pInfo = {
        id: p.id,
        name: p.name,
        size: p.size,
        price: p.price,
        image_url: p.image_url,
      };
      if (p.name in products) {
        sizeMapping = pInfo;
        products[p.name][p.size] = sizeMapping;
      } else {
        sizeMapping[p.size] = pInfo;
        products[p.name] = sizeMapping;
      }
    });
    return products;
  };

  // single entity (s,m,l t-shirts are a single product)
  const createProductMapping = (data, productImages) => {
    let productMapping = [];
    for (const [, value] of Object.entries(data)) {
      let flag = false;
      if (productMapping.length > 0) {
        productMapping.forEach((p) => {
          if (p.name === value.name) {
            p.sizes.push(value.size);
            flag = true;
          }
        });
      }
      if (flag) continue;
      let size = value.size === "Universal" ? "Universal" : "";

      // set images from contentful
      let images = [];
      productImages.forEach((p) => {
        if (p.name === value.name) {
          p.images.forEach((e) => {
            images.push("https://" + e.fields.file.url);
          });
        }
      });
      productMapping.push({
        name: value.name,
        price: value.price,
        sizes: [value.size],
        size: size,
        image_url: value.image_url,
        images: images,
      });
    }
    return productMapping;
  };

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
    getAbout().then((res) => {
      setAbout(res);
    });
    getAboutImages().then((res) => {
      if (res !== undefined) setAboutImage(res);
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
                element={<About textFields={about} images={aboutImage} />}
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
