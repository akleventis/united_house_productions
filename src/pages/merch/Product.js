/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../../api";

const handleClick = (product) => {
  console.log(`Added ${product.name} (id: ${product.id}) to cart`);
  toast(`'${product.name}' added to cart 🔥`, {
    position: "bottom-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
  });

  product.quantity = 1;

  addToCart(product);
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
              <a
                className="cart"
                onClick={(event) => {
                  event.preventDefault();
                  handleClick(product);
                }}
              >
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
