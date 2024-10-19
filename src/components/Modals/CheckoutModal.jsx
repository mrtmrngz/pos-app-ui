import Modal from "../Portals/Modal.jsx";

const CheckoutModal = ({onOpen, onClose, setIsCheckOutModalOpen}) => {
    return (
        <Modal title="Checkout" onOpen={onOpen} onClose={onClose}>
            <h1>Checkout Modal</h1>
        </Modal>
    );
};

export default CheckoutModal;