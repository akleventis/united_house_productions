import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Booking, Events, Products, Header, Footer,  Navigate, Soundcloud} from "./pages/index.js";
import Toast from 'react-bootstrap/Toast'
import useContentful from "./useContenful.js"
import "./App.css";
import axios from 'axios'
import { useState, useEffect} from "react";

const BootstrapToast = ({ data, toast, toggleToast} ) => {
  return (
    <Toast autohide show={toast} style={{position: "fixed", top: 0, right: 0, zIndex: 7000}} onClose={()=>toggleToast("")}>
      <Toast.Header>
        <strong>Alert</strong>
      </Toast.Header>
      <Toast.Body>{data}</Toast.Body>
    </Toast>
  )
}


const App = () => {
  // Contentful //
  const [events, setEvents] = useState([])
  const [featuredArtists, setFeaturedArtists] = useState([])
  const [about, setAbout] = useState([])
  const [aboutImage, setAboutImage] = useState([])
  const { getEvents, getFeaturedArtists, getAbout, getAboutImages } = useContentful();
  // ---------- //

  // Toast //
  const [toast, setToast] = useState(false)
  const [toastData, setToastData] = useState("")
  const toggleToast = (data) => {
    setToastData(data)
    setToast(!toast)
  }
  // --------------- //


  // Soundcloud Sidebar //
  const [showCart, setCart] = useState(false);
  const [showSideBar, setSideBar] = useState(false)
  const handleViewSidebar = () => {
    setSideBar(!showSideBar)
  }
  const handleClose = () => {
    if (showSideBar) handleViewSidebar()
  }
  // ------------------- //



const hashProducts = data => {
    let products = {}
    data.forEach(p => {
        p.price = p.price / 100
        let sizeMapping = {}
        let pInfo = {id: p.id, name: p.name, size: p.size, price: p.price, image_url: p.image_url}
        if (p.name in products) {
            sizeMapping = pInfo
            products[p.name][p.size] = sizeMapping
        } else {
            sizeMapping[p.size] = pInfo
            products[p.name] = sizeMapping
        }
    })
    return products
}

const createProductMapping = data => {
    let productMapping = []
    for (const [, value] of Object.entries(data)) {
        let flag = false
        if (productMapping.length > 0) {
            productMapping.forEach(p => {
                if (p.name === value.name) {
                    p.sizes.push(value.size)
                    flag = true
                }
            })
        }
        if (flag) continue
        let size = value.size === "Universal" ? "Universal" : ""
        productMapping.push({
            name: value.name, price: value.price, sizes: [value.size], size: size, image_url: value.image_url
        })
    }
    return productMapping
}
  const [products, setproducts] = useState([{}]);
  const [productMapping, setProductMapping] = useState([]);
  // const [isLoading, setLoading] = useState(true);

  useEffect(() => {
      const getItems = async() => {
          const server_url=process.env.REACT_APP_SERVER_URL
          try {
              // get all merch from database
              const items = await axios.get(`${server_url}/products`)

              // create hashed data structure
              const hashedProducts = hashProducts(items.data)
              setproducts(hashedProducts)

              // create product mapping for front-end cards
              const productMapping = createProductMapping(items.data)
              setProductMapping(productMapping)

              // setLoading(false)
          } catch (error) {
              console.log("Error accounted for, server still wip")
              // alertErr("Network Error")
          }
      }
      getItems()

      getEvents().then((res) => {
        setEvents(res)
      })
      getFeaturedArtists().then((res) => {
          setFeaturedArtists(res)
        })
      getAbout().then((res) => {
        setAbout(res)
      })
      getAboutImages().then((res) => {
        let image = res[Math.floor(Math.random()*res.length)]
        setAboutImage(image)
      })
  }, []);



  return (
    <div onClick={handleClose}>
      <BootstrapToast data={toastData} toast={toast} toggleToast={toggleToast} />
      <Header />
      <Router>
        <Navigate
          showCart={showCart}
          setCart={setCart}
          toggleToast={toggleToast}
        />
        <div className="outer-container">
          <div className="inner-container">
            <Routes>
              {/* TODO: Uncomment when server is live */}
            {/* {isLoading ? <Route path="/" element={<div>loading...</div>} /> : <Route path="/" element={<Events events={events} />} />} */}
              <Route path="/" element={<Events events={events}/>} />
              <Route path="/merch" element={<Products products={products} productMapping={productMapping} toggleToast={toggleToast} />} />
              <Route path="/about" element={<About textFields={about} image={aboutImage}/>} />
              <Route path="/booking" element={<Booking toggleToast={toggleToast} />} />
            </Routes>
          </div>
          <Soundcloud isOpen={showSideBar} toggleSideBar={handleViewSidebar} featuredArtists={featuredArtists}/>
        </div>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
