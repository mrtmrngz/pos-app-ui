import {memo} from 'react'
import Modal from "../Portals/Modal.jsx";
import {Form, Formik} from "formik";
import CustomInput from "../Form/CustomInput.jsx";
import Button from "../UI/Button.jsx";
import {categoryValidation} from "../../Validations/CategoryValidation.js";

const AddCategoryModal = ({onOpen, onClose, setIsAddModalOpen}) => {

    const formInitialValues = {
        title: "",
        imageUrl: ""
    }
    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <Modal title="Add Category" onOpen={onOpen} onClose={onClose}>
            <div>
                <Formik
                    initialValues={formInitialValues}
                    onSubmit={handleSubmit}
                    validationSchema={categoryValidation}
                >
                    {({values}) => (
                        <Form className="flex flex-col gap-y-4">
                            <CustomInput type="text" label="Category Name" htmlFor="title" name="title" id="title" placeholder="Enter Category Name" />

                            <CustomInput type="text" label="Category Image Url" htmlFor="imageUrl" name="imageUrl" id="imageUrl" placeholder="Enter Category Image Url" />

                            <div className="w-full flex justify-end">
                                <Button htmlType="submit" type="primary" className="!m-0">Add Category</Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Modal>
    );
};

export default memo(AddCategoryModal);