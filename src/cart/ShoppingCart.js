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
        <Modal.Header  className="header-empty" closeButton>
          <Modal.Body>Your cart is empty</Modal.Body>
        </Modal.Header>
      </Modal>
    );
  return (
    <Modal className="special_modal" show={showShoppingCart} onHide={() => handleClose()}>
      <Modal.Header closeButton />
      {items.map((item) => (
        <div key={`c${item.id}`}>
          <div className="items-container">
            <div className="flex1">{item.name}</div>
            <div className="flex2">{item.size}</div>
            <div className="flex3">${item.price}</div>

            <div className="flex4">
              <button className="quantity-adjust" onClick={() => updateItemQuantity(item.id, item.quantity - 1)} > - </button>
              <div className="quantity">{item.quantity}</div>
              <button className="quantity-adjust" onClick={() => updateItemQuantity(item.id, item.quantity + 1)} > + </button>  
            </div>

            <div>
             <button className="remove" onClick={() => removeItem(item.id)}> x </button>  
            </div>
            </div>
        </div>
      ))}
      <Modal.Footer>
        <h5 className='total'>Total: ${cartTotal}</h5>
        <button className="checkout" onClick={ () => handleCheckout(items) }>Checkout</button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShoppingCart;
