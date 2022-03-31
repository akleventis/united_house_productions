import { Modal } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import axios from 'axios'
import "./cart.css";

const alertErr = (data) => {
  toast.error(data);
  return;
}

const handleCheckout = async items => {
  let itemArr = []
  items.map(item => {
    return itemArr.push({ id: item.id, quantity: item.quantity})
  })
  try {
    const resp = await axios.post(`http://localhost:5001/checkout`, {items: itemArr})
    window.location = resp.data.url
  } catch (error) {
    if (error.response.status===400) {
      alertErr(error.response.data)
    }
  }
}

const ShoppingCart = ({ showShoppingCart, setShowShoppingCart }) => {
  const handleClose = () => setShowShoppingCart(false);
  const {
    isEmpty,
    cartTotal,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty)
    return (
      <Modal className="special_modal" show={showShoppingCart} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Body>Your cart is empty</Modal.Body>
        </Modal.Header>
      </Modal>
    );
  return (
    <Modal className="special_modal" show={showShoppingCart} onHide={() => handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>

      {items.map((item) => (
        <div key={`c${item.id}`}>
          <div className="items-container">
            <div>{item.name}</div>
            <div>{item.size}</div>
            <div>${item.price}</div>
            <div >x{item.quantity}</div>
            <div>
              <div key={item.id}>
                <button className="button-55 quantity"
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button className="button-55 quantity"
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button className="button-55 remove" onClick={() => removeItem(item.id)}>
                  Remove &times;
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Modal.Footer>
        <h5>Total ${cartTotal}</h5>
        <button className="button-55 checkout" onClick={ () => handleCheckout(items) }>Checkout</button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShoppingCart;
