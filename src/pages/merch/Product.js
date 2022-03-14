/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useCart } from "react-use-cart";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import './Merch.css'



// const handleAdd = (product) => {
//   if (product.size === "") {
//     toast.error("Please select a size!", {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });
//     return;
//   }
//   toast(`${product.name} added to cart 🔥`, {
//     position: "top-right",
//     autoClose: 4000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     draggable: true,
//     progress: undefined,
//   });
// };



const Product = ({ product }) => {
  const [selectedSize, setSize] = useState("");
  const { addItem } = useCart();

  const handleAdd = (p) => {
    if (p.size==='Universal' || selectedSize !== '') {
      p.size = p.size === 'Universal' ? p.size : selectedSize
      addItem(p)
      alert('item added to card')
    }
    else alert('please select a size')
    setSize("");
  }

  let displaySize 
  if (product.size === 'Universal') {
    displaySize = <></>
  } else {
    displaySize = selectedSize === '' ? <span /> : <span className="txt display-size">{selectedSize}</span>
  }

// TODO: map product name/size to correct product id => add the corresponding product to cart
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
                      <a
                        className="sizes"
                        key={s}
                        onClick={() => setSize(s)}
                      >
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
              <a
                className="cart"
                onClick={(event) => {
                  event.preventDefault();
                  handleAdd(product);
                }}
              >
                {/* <ToastContainer
                  position="bottom-center"
                  autoClose={4000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  rtl={false}
                  pauseOnFocusLoss={false}
                  className="toast-container"
                /> */}
                <span className="price">${product.price}</span>
                <span className="add-to-cart">
                  <span className="txt">Add to cart</span>
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
