import axios from 'axios'
import Product from './Product'
import { toast } from "react-toastify";
import { useEffect, useState } from 'react';

const server_url=process.env.REACT_APP_SERVER_URL

const alertErr = (data) => {
    toast.error(data);
    return;
  }

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
    data.map(p => {
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

// data structure (group sizes for same product)
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

const Products = () => {
    const [products, setproducts] = useState([{}]);
    const [productMapping, setProductMapping] = useState([]);

    useEffect(() => {
        const getItems = async() => {
            try {
                // get all merch from database
                const items = await axios.get(`${server_url}/products`)

                // create hashed ds
                const hashedProducts = hashProducts(items.data)
                setproducts(hashedProducts)

                // create product mapping for fe cards
                const productMapping = createProductMapping(items.data)
                setProductMapping(productMapping)
            } catch (error) {
                alertErr("Network Error")
            }
        }
        getItems()
    }, []);

    return (
        <main>
            <h3 className='router-title'>Merch</h3>
            <div className='merch-grid'>
                {productMapping.map((p) => (
                    <div key={`g${p.name}`} xs={12} sm={6} md={4} lg={3}>
                        <Product key={p.id} products={products} product={p} />
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Products;