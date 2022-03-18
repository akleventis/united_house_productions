import { Modal } from "react-bootstrap";
import { useCart } from "react-use-cart";
import "./cart.css";

const handleCheckout = items => {
  // Send id and quantity to the server
  let itemArr = []
  items.map(item => {
    return itemArr.push({ id: item.id, quantity: item.quantity})
  })
  
  fetch(`http://localhost:5001/checkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({items: itemArr})
  }).then(res => {
    console.log(res)
    if (res.ok) return res.json()
    return res.json().then(json => Promise.reject(json))
  }).then(({ url }) => {
    window.location = url
    console.log(url)
  }).catch(e => {
    console.error(e.error)
  })
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
        <button onClick={ () => handleCheckout(items) }>Checkout</button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShoppingCart;
