import { Modal, Button } from "react-bootstrap";
import { useCart } from "react-use-cart";
import "./cart.css";

const ShoppingCart = ({ showShoppingCart, setShowShoppingCart }) => {
  const handleClose = () => setShowShoppingCart(false);
  const {
    isEmpty,
    // totalItems,
    cartTotal,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty)
    return (
      <Modal show={showShoppingCart} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Body>Your cart is empty</Modal.Body>
        </Modal.Header>
      </Modal>
    );
  return (
    <Modal show={showShoppingCart} onHide={() => handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>Cart 🛒</Modal.Title>
      </Modal.Header>

      {items.map((item) => (
        <div key={`c${item.id}`}>
          <div className="items-container">
            <div className="item-name">{item.name}</div>
            <div className="item-size">{item.size}</div>
            <div className="item-price">${item.price}</div>
            <div className="item-quantity">x{item.quantity}</div>
            <div>
              <div key={item.id}>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button onClick={() => removeItem(item.id)}>
                  Remove &times;
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Modal.Footer>
        <h5>Total ${cartTotal}</h5>
        <Button variant="primary">Checkout</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShoppingCart;
