/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import './Merch.css'

const alertAdd = (p) => {
  toast(`${p.name} added to cart 🔥`, {});
  return;
}

const alertSelectSize = () => {
  toast.error("Please select a size!", {});
  return;
}

const Product = ({ product, products }) => {
  const [selectedSize, setSize] = useState("");
  const { addItem } = useCart();

  // size must be selected if not universal 
  const handleAdd = (p) => {
    if (p.size==='Universal' || selectedSize !== '') {
      p.size = p.size === 'Universal' ? p.size : selectedSize
      let item = products[p.name][p.size]
      addItem(item)
      alertAdd(item)
    }
    else alertSelectSize()
    setSize("");
  }

  let displaySize 
  if (product.size === 'Universal') {
    displaySize = <></>
  } else {
    displaySize = selectedSize === '' ? <span /> : <span className="txt display-size">{selectedSize}</span>
  }

  // sort sizes for display
 var s = { S: 0, M: 1, L: 2, XL: 3, XXL: 4 }
 product.sizes.sort(function(a, b) {
  return s[a] - s[b]
 })
 
  return (
    <div className="container page-wrapper">
      <div className="page-inner">
        <div className="row">
          <div className="el-wrapper">
            <div className="box-up">
              <img className="img" src={product.img} alt="" />
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-company">{product.name}</span>
                </div>
                <div className="a-size">
                  Size:{" "}
                  <span className="size">
                    {product.sizes.map((s) => (
                      <a className="sizes" key={s} onClick={() => setSize(s)} >
                        {s}{" "}
                      </a>
                    ))}
                  </span>
                </div>
              </div>
            </div>

            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>
              <a className="cart" onClick={(event) => {
                  event.preventDefault();
                  handleAdd(product);
                }}>
                <span className="price">${product.price}</span>
                <span className="add-to-cart">
                  <span className="txt">ADD TO CART</span>
                  {displaySize}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
