import Modal from "../Portals/Modal.jsx";
import {useState} from "react";
import Button from "../UI/Button.jsx";

const EditCategoryModal = ({onOpen, onClose}) => {

    const [isEditOpen, setIsEditOpen] = useState(false)


    return (
        <>
            {!isEditOpen && (
                <Modal title="Edit Categories" onOpen={onOpen} onClose={onClose}>
                    All Cats
                </Modal>
            )}

            {(isEditOpen) && (
                <Modal onOpen={isEditOpen} onClose={() => setIsEditOpen(false)}>
                    Edit Modal
                </Modal>
            )}

        </>
    );
};

export default EditCategoryModal;