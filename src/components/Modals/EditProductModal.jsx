import Modal from "../Portals/Modal.jsx";
import {useState} from "react";

const EditProductModal = ({onOpen, onClose}) => {

    const [isEditOpen, setIsEditOpen] = useState(false)

    return (
        <>
            {!isEditOpen && (
                <Modal title="Edit/Delete Products" onOpen={onOpen} onClose={onClose}>
                    Edit Products
                    <button onClick={() => setIsEditOpen(true)}>Aç</button>
                </Modal>
            )}

            {(isEditOpen) && (
                <Modal title="Edit Product" onOpen={isEditOpen} onClose={() => setIsEditOpen(false)}>
                    <h1>Single Modal</h1>
                </Modal>
            )}
        </>
    );
};

export default EditProductModal;