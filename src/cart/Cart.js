import { Modal } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import axios from 'axios'
import "./cart.css";

const server_url=process.env.REACT_APP_SERVER_URL

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
    const resp = await axios.post(`${server_url}/checkout`, {items: itemArr})
    if (resp.status === 202) {
      const [quantity, size, name] = [resp.data.product.quantity, resp.data.product.size, resp.data.product.name]
      let message
      switch(resp.data.product.quantity) {
        case 0:
          message = `${size} ${name} is out of stock. Please update cart`
          break
        default:
          message = `Only ${quantity} ${size} ${name}(s) in stock. Please update cart`
      }
      alertErr(message)
      return
    }
    window.location = resp.data.url
  } catch (error) {
    console.log(error)
    alertErr("Network Error")
  }
}

const Cart = ({ showCart, setCart }) => {
  const handleClose = () => setCart(false);
  const {
    isEmpty,
    cartTotal,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty)
    return (
      <Modal className="special_modal" show={showCart} onHide={() => handleClose()}>
        <Modal.Header  className="header-empty" closeButton>
          <Modal.Body>Your cart is empty</Modal.Body>
        </Modal.Header>
      </Modal>
    );
  return (
    <Modal className="special_modal" show={showCart} onHide={() => handleClose()}>
      <Modal.Header closeButton />
      {items.map((item) => (
        <div key={`c${item.id}`}>
          <div className="items-container">
            <div className="flex1">{item.name}</div>
            <div className="flex2">{item.size}</div>
            <div className="flex3">${item.price}</div>

            <div className="flex4-6">
              <button className="quantity-adjust" onClick={() => updateItemQuantity(item.id, item.quantity - 1)} >-</button>
            </div>
            <div className="quantity flex5">{item.quantity}</div>
            <div className="flex4-6">
              <button className="quantity-adjust" onClick={() => updateItemQuantity(item.id, item.quantity + 1)} >+</button>  
            </div>

            <div className="flex7">
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

export default Cart;
