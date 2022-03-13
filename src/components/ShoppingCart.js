import { Modal, ListGroup, Button } from "react-bootstrap";
import { useState, useEffect, useCallback } from "react";
import { getFromLocalStorage } from "../api";
import { BsFillTrashFill } from "react-icons/bs";

const ShoppingCart = ({ showShoppingCart, setShowShoppingCart }) => {
  const [cart, setCart] = useState([]);
  const hydrateCart = useCallback(() => {
    getFromLocalStorage("cart").then((res) => setCart(res ?? []));
  }, [setCart]);

  useEffect(() => {
    hydrateCart();
  }, [hydrateCart, showShoppingCart]);

  const handleClose = () => setShowShoppingCart(false);

  return (
    <Modal show={showShoppingCart} onHide={() => handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          {cart.map((product, i) => (
            <ListGroup.Item
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{product.name}</span>
              <span>{`QTY: ${product.quantity}`}</span>
              <Button variant="danger" onClick={() => {}}>
                {/* TODO: Make this do something */}
                <BsFillTrashFill />
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>
    </Modal>
  );
};

export default ShoppingCart;
