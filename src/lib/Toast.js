import Toast from "react-bootstrap/Toast";

const BootstrapToast = ({ toastData, displayToast, toggleToast }) => {
    return (
      <div>
        <Toast
          autohide
          show={displayToast}
          style={{ position: "fixed", top: 0, right: 0, zIndex: 7000 }}
          onClose={() => toggleToast("", false)}
        >
          <Toast.Header>
            <strong>🚨</strong>
          </Toast.Header>
          <Toast.Body>{toastData}</Toast.Body>
        </Toast>
      </div>
    );
  };
  
  export default BootstrapToast