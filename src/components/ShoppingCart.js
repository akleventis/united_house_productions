import { Modal } from "react-bootstrap";

const ShoppingCart = ({ showShoppingCart, setShowShoppingCart }) => {
  const handleClose = () => setShowShoppingCart(false);

  return (
    <Modal show={showShoppingCart} onHide={() => handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>Something for now</Modal.Body>
    </Modal>
  );
};

export default ShoppingCart;
