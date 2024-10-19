import Modal from "../Portals/Modal.jsx";
import {useState} from "react";
import {Form, Formik} from "formik";
import CustomInput from "../Form/CustomInput.jsx";
import Button from "../UI/Button.jsx";
import {categoryValidation} from "../../Validations/CategoryValidation.js";

const EditCategoryModal = ({onOpen, onClose, setIsEditModalOpen}) => {

    const [isEditOpen, setIsEditOpen] = useState(false)

    const formInitialValues = {
        title: "",
        imageUrl: ""
    }
    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <>
            <Modal title="Edit Categories" onOpen={onOpen} onClose={onClose}>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                        <tr>
                            <th style={{width: "100px"}} className="p-4 bg-[#eaeaea] border border-border-color text-sm font-bold text-left">Image</th>
                            <th style={{width: "400px"}} className="p-4 bg-[#eaeaea] border border-border-color text-sm font-bold text-left">Name</th>
                            <th style={{width: "calc(100% - 380px)"}} className="p-4 bg-[#eaeaea] border border-border-color text-sm font-bold text-left">&nbsp;</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="hover:bg-[#eaeaea] border border-border-color border-t-0">
                            <th className="p-4 border border-border-color border-l-0 text-sm">
                                <img className="w-full h-full object-cover"
                                     src="https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV8ZW58MHx8MHx8fDA%3D"
                                     alt=""/>
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                <strong>Meyve</strong>
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
                                <img className="w-full h-full object-cover"
                                     src="https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV8ZW58MHx8MHx8fDA%3D"
                                     alt=""/>
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                <strong>Meyve</strong>
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
                                <img className="w-full h-full object-cover"
                                     src="https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV8ZW58MHx8MHx8fDA%3D"
                                     alt=""/>
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                <strong>Meyve</strong>
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
                                <img className="w-full h-full object-cover"
                                     src="https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV8ZW58MHx8MHx8fDA%3D"
                                     alt=""/>
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                <strong>Meyve</strong>
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
                                <img className="w-full h-full object-cover"
                                     src="https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV8ZW58MHx8MHx8fDA%3D"
                                     alt=""/>
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                <strong>Meyve</strong>
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
                                <img className="w-full h-full object-cover"
                                     src="https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV8ZW58MHx8MHx8fDA%3D"
                                     alt=""/>
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                <strong>Meyve</strong>
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
                                <img className="w-full h-full object-cover"
                                     src="https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV8ZW58MHx8MHx8fDA%3D"
                                     alt=""/>
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                <strong>Meyve</strong>
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
                                <img className="w-full h-full object-cover"
                                     src="https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV8ZW58MHx8MHx8fDA%3D"
                                     alt=""/>
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                <strong>Meyve</strong>
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
                                <img className="w-full h-full object-cover"
                                     src="https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV8ZW58MHx8MHx8fDA%3D"
                                     alt=""/>
                            </th>
                            <th className="p-4 border border-border-color border-l-0 text-sm text-left">
                                <strong>Meyve</strong>
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

            <Modal isSecondModal={true} className="h-full" onOpen={isEditOpen} onClose={() => setIsEditOpen(false)}>
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

        </>
    );
};

export default EditCategoryModal;