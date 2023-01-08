/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useCart } from "react-use-cart";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Merch.css";

const ProductImages = ({ productImages }) => {
  return (
    <Carousel indicators={false} interval={null}>
      {productImages.map((image, i) => (
        <Carousel.Item key={i}>
          <img className="d-block w-100 img" src={image} alt="First= slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

const Product = ({
  product,
  products,
  toggleToast,
  displayToast,
}) => {
  const [selectedSize, setSize] = useState("");
  const { addItem } = useCart();

  // size must be selected if not universal
  const handleAdd = (p) => {
    if (p.size === "Universal" || selectedSize !== "") {
      p.size = p.size === "Universal" ? p.size : selectedSize;
      let item = products[p.name][p.size];
      addItem(item);
      
      // if toast is already displayed, just change the data in toast
      toggleToast(`${item.name} added to cart 🔥`, displayToast);
    } else {
      toggleToast("Please select a size", displayToast);
      setSize("");
    }
  };

  let displaySize =
    selectedSize === "" ? (
      <div />
    ) : (
      <div className="txt display-size">{selectedSize}</div>
    );
  if (product.size === "Universal") {
    displaySize = <></>;
  }

  // sort sizes for display
  var s = { S: 0, M: 1, L: 2, XL: 3, XXL: 4 };
  product.sizes.sort(function (a, b) {
    return s[a] - s[b];
  });

  return (
    <div className="container page-wrapper">
      <div className="page-inner">
        <div className="row">
          <div className="el-wrapper">
            <div className="box-up">
              <ProductImages productImages={product.images} />
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-company">{product.name}</span>
                </div>
                <div className="a-size">
                  Size:{" "}
                  <span className="size">
                    {product.sizes.map((s) => (
                      <a className="sizes" key={s} onClick={() => setSize(s)}>
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
                <div className="price">${product.price}</div>
                <div className="add-to-cart">
                  <div className="txt">ADD TO CART</div>
                  <div className="size-container">{displaySize}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
