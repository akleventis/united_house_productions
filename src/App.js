import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Booking, Events, Products, Header, Footer,  Navigate, Soundcloud} from "./pages/index.js";
import { ToastContainer } from "react-toastify";
import useContentful from "./useContenful.js"
import "./App.css";
import axios from 'axios'
import { useState, useEffect} from "react";

const App = () => {
  // Contentful //
  const [events, setEvents] = useState([])
  const [featuredArtists, setFeaturedArtists] = useState([])
  const [about, setAbout] = useState([])
  const { getEvents, getFeaturedArtists, getAbout } = useContentful();
  // ---------- //


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


// data structure O(1) access to merch
//   "T-Shirt": {
//     "S": { id: "prod_id", name: "", price: 25, size: "", img: ""},
//     "M": { id: "prod_id", name: "", price: 25, size: "", img: ""},
//   }, 
//   "Bucket Hat": {
//     "Universal": { id: "prod_id", name: "", price: 25, size: "", img: ""},
//   }
const hashProducts = data => {
    let products = {}
    data.forEach(p => {
        let sizeMapping = {}
        let pInfo = {id: p.id, name: p.name, size: p.size, price: p.price, img: p.image_url}
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

// data structure (group sizes for same product, name as pkey)
// productMapping = [
//   {id: 1, name: "T-Shirt", price: 25, sizes: ["S", "M", "L", "XL"], size: "", img: Shirt},
//   {id: 2, name: "Bucket Hat", price: 15, sizes: ["Universal"], size: "Universal", img: Shroomy}
// ]
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
            name: value.name, price: value.price, sizes: [value.size], size: size, img: value.image_url
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
  }, []);



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
              {/* TODO: Uncomment when server is live */}
            {/* {isLoading ? <Route path="/" element={<div>loading...</div>} /> : <Route path="/" element={<Events events={events} />} />} */}
              <Route path="/" element={<Events events={events}/>} />
              <Route path="/merch" element={<Products products={products} productMapping={productMapping}/>} />
              <Route path="/about" element={<About textFields={about}/>} />
              <Route path="/booking" element={<Booking />} />
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
