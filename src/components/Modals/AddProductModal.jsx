import Modal from "../Portals/Modal.jsx";
import {Form, Formik} from "formik";
import CustomInput from "../Form/CustomInput.jsx";
import {productValidation} from "../../Validations/ProductValidation.js";
import CustomSelect from "../Form/CustomSelect.jsx";
import Button from "../UI/Button.jsx";

const AddProductModal = ({onOpen, onClose, setIsAddModalOpen}) => {

    const formInitialValues = {
        title: "",
        imageUrl: "",
        price: "",
        categoryId: ""
    }

    const selectInputData = [
        {
            key: "meyve",
            value: "Meyve"
        },
        {
            key: "sebze",
            value: "Sebze"
        },
        {
            key: "kuruyemiş",
            value: "Kuruyemiş"
        }
    ]

    const handleSubmit = (values, actions) => {
        console.log(values)
        setIsAddModalOpen(false)
        actions.resetForm()
    }

    return (
        <Modal title="Add Products" onOpen={onOpen} onClose={onClose}>
            <div>
                <Formik
                    initialValues={formInitialValues}
                    onSubmit={handleSubmit}
                    validationSchema={productValidation(selectInputData)}
                >
                    {({values}) => (
                        <Form className="flex flex-col gap-y-4">
                            <CustomInput type="text" label="Product Name" htmlFor="title" name="title" id="title"
                                         placeholder="Enter Product Name"/>

                            <CustomInput type="text" label="Product Image Url" htmlFor="imageUrl" name="imageUrl"
                                         id="imageUrl" placeholder="Enter Product Image Url"/>

                            <CustomInput type="number" min={0} max={10000000} id="price" htmlFor="price" name="price"
                                         label="Product Price" placeholder="Enter Product Price"/>

                            <CustomSelect data={selectInputData} label="Product Category" name="categoryId"
                                          htmlFor="categoryId" id="categoryId"/>

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

export default AddProductModal;