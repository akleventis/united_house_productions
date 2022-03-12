/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const handleClick = (name) => {
  console.log("add product id: ", name, " to shopping cart");
  toast(`'${name}' added to cart 🔥`, {
    position: "bottom-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    });
};
const Product = ({ product }) => {
  return (
    <div className="container page-wrapper">
      <div className="page-inner">
        <div className="row">
          <div className="el-wrapper">
            <div className="box-up">
              <img className="img" src={product.img} alt="" />
              <div className="img-info">
                <div className="info-inner">
                  {/* <span className="p-name">United House Shirt</span> */}
                  <span className="p-company">{product.name}</span>
                </div>
                <div className="a-size">
                  Size:{" "}
                  <span className="size">{product.sizes.join(" , ")}</span>
                </div>
              </div>
            </div>

            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>
              <a className="cart" onClick={(event) => {
                event.preventDefault();
                handleClick(product.name)
              }}>
                <ToastContainer
                  position="bottom-center"
                  autoClose={4000}
                  hideProgressBar={false}
                  newestOnTop={false}

                  rtl={false}
                  pauseOnFocusLoss={false}
                  className="toast-container"
                />
                <span className="price">${product.price}</span>
                <span className="add-to-cart">
                  <span className="txt">Add to cart</span>
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
