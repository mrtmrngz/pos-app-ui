import {useState} from "react";
import Modal from "../Portals/Modal.jsx";
import {Form, Formik} from "formik";
import CustomInput from "../Form/CustomInput.jsx";
import {productValidation} from "../../Validations/ProductValidation.js";
import CustomSelect from "../Form/CustomSelect.jsx";
import Button from "../UI/Button.jsx";

const EditProductModal = ({onOpen, onClose, setIsEditModalOpen}) => {

    const [isEditOpen, setIsEditOpen] = useState(false)

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
        <>
            <Modal title="Edit/Delete Products" onOpen={onOpen} onClose={onClose}>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                        <tr>
                            <th style={{width: "100px"}}
                                className="p-4 bg-[#eaeaea] border border-border-color text-sm font-bold text-left">Image
                            </th>
                            <th style={{width: "400px"}}
                                className="p-4 bg-[#eaeaea] border border-border-color text-sm font-bold text-left">Name
                            </th>
                            <th style={{width: "100px"}}
                                className="p-4 bg-[#eaeaea] border border-border-color text-sm font-bold text-left">Price
                            </th>
                            <th style={{width: "300px"}}
                                className="p-4 bg-[#eaeaea] border border-border-color text-sm font-bold text-left">Category
                            </th>
                            <th style={{width: "calc(max-content + 100px)"}}
                                className="p-4 bg-[#eaeaea] border border-border-color text-sm font-bold text-left">&nbsp;</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="hover:bg-[#eaeaea] border border-border-color border-t-0">
                            <th className="p-4 border border-border-color border-l-0 text-sm">
                                <img className="w-full h-[60px] object-cover"
                                     src="https://plus.unsplash.com/premium_photo-1672774750509-bc9ff226f3e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D"
                                     alt=""/>
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                <strong>Fried Patatoes</strong>
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                $3.500.000.000
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                Fast Food
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm">
                                <div className="flex justify-between gap-x-5">
                                    <button onClick={() => setIsEditOpen(true)}
                                            className="text-primary text-sm font-normal">Edit
                                    </button>
                                    <button className="text-danger text-sm font-normal">Delete</button>
                                </div>
                            </th>
                        </tr>
                        <tr className="hover:bg-[#eaeaea] border border-border-color border-t-0">
                            <th className="p-4 border border-border-color border-l-0 text-sm">
                                <img className="w-full h-[60px] object-cover"
                                     src="https://plus.unsplash.com/premium_photo-1672774750509-bc9ff226f3e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D"
                                     alt=""/>
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                <strong>Fried Patatoes</strong>
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                $3.500.000.000
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                Fast Food
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm">
                                <div className="flex justify-between gap-x-5">
                                    <button onClick={() => setIsEditOpen(true)}
                                            className="text-primary text-sm font-normal">Edit
                                    </button>
                                    <button className="text-danger text-sm font-normal">Delete</button>
                                </div>
                            </th>
                        </tr>
                        <tr className="hover:bg-[#eaeaea] border border-border-color border-t-0">
                            <th className="p-4 border border-border-color border-l-0 text-sm">
                                <img className="w-full h-[60px] object-cover"
                                     src="https://plus.unsplash.com/premium_photo-1672774750509-bc9ff226f3e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D"
                                     alt=""/>
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                <strong>Fried Patatoes</strong>
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                $3.500.000.000
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                Fast Food
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm">
                                <div className="flex justify-between gap-x-5">
                                    <button onClick={() => setIsEditOpen(true)}
                                            className="text-primary text-sm font-normal">Edit
                                    </button>
                                    <button className="text-danger text-sm font-normal">Delete</button>
                                </div>
                            </th>
                        </tr>
                        <tr className="hover:bg-[#eaeaea] border border-border-color border-t-0">
                            <th className="p-4 border border-border-color border-l-0 text-sm">
                                <img className="w-full h-[60px] object-cover"
                                     src="https://plus.unsplash.com/premium_photo-1672774750509-bc9ff226f3e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D"
                                     alt=""/>
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                <strong>Fried Patatoes</strong>
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                $3.500.000.000
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                Fast Food
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm">
                                <div className="flex justify-between gap-x-5">
                                    <button onClick={() => setIsEditOpen(true)}
                                            className="text-primary text-sm font-normal">Edit
                                    </button>
                                    <button className="text-danger text-sm font-normal">Delete</button>
                                </div>
                            </th>
                        </tr>
                        <tr className="hover:bg-[#eaeaea] border border-border-color border-t-0">
                            <th className="p-4 border border-border-color border-l-0 text-sm">
                                <img className="w-full h-[60px] object-cover"
                                     src="https://plus.unsplash.com/premium_photo-1672774750509-bc9ff226f3e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D"
                                     alt=""/>
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                <strong>Fried Patatoes</strong>
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                $3.500.000.000
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                Fast Food
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm">
                                <div className="flex justify-between gap-x-5">
                                    <button onClick={() => setIsEditOpen(true)}
                                            className="text-primary text-sm font-normal">Edit
                                    </button>
                                    <button className="text-danger text-sm font-normal">Delete</button>
                                </div>
                            </th>
                        </tr>
                        <tr className="hover:bg-[#eaeaea] border border-border-color border-t-0">
                            <th className="p-4 border border-border-color border-l-0 text-sm">
                                <img className="w-full h-[60px] object-cover"
                                     src="https://plus.unsplash.com/premium_photo-1672774750509-bc9ff226f3e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D"
                                     alt=""/>
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                <strong>Fried Patatoes</strong>
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                $3.500.000.000
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                Fast Food
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm">
                                <div className="flex justify-between gap-x-5">
                                    <button onClick={() => setIsEditOpen(true)}
                                            className="text-primary text-sm font-normal">Edit
                                    </button>
                                    <button className="text-danger text-sm font-normal">Delete</button>
                                </div>
                            </th>
                        </tr>
                        <tr className="hover:bg-[#eaeaea] border border-border-color border-t-0">
                            <th className="p-4 border border-border-color border-l-0 text-sm">
                                <img className="w-full h-[60px] object-cover"
                                     src="https://plus.unsplash.com/premium_photo-1672774750509-bc9ff226f3e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D"
                                     alt=""/>
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                <strong>Fried Patatoes</strong>
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                $3.500.000.000
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                Fast Food
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm">
                                <div className="flex justify-between gap-x-5">
                                    <button onClick={() => setIsEditOpen(true)}
                                            className="text-primary text-sm font-normal">Edit
                                    </button>
                                    <button className="text-danger text-sm font-normal">Delete</button>
                                </div>
                            </th>
                        </tr>
                        <tr className="hover:bg-[#eaeaea] border border-border-color border-t-0">
                            <th className="p-4 border border-border-color border-l-0 text-sm">
                                <img className="w-full h-[60px] object-cover"
                                     src="https://plus.unsplash.com/premium_photo-1672774750509-bc9ff226f3e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D"
                                     alt=""/>
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                <strong>Fried Patatoes</strong>
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                $3.500.000.000
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                Fast Food
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm">
                                <div className="flex justify-between gap-x-5">
                                    <button onClick={() => setIsEditOpen(true)}
                                            className="text-primary text-sm font-normal">Edit
                                    </button>
                                    <button className="text-danger text-sm font-normal">Delete</button>
                                </div>
                            </th>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </Modal>

            <Modal title="Edit Product" isSecondModal={true} className="h-full" onOpen={isEditOpen} onClose={() => setIsEditOpen(false)}>
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

                                <CustomInput type="number" min={0} max={10000000} id="price" htmlFor="price"
                                             name="price"
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
        </>
    );
};

export default EditProductModal;