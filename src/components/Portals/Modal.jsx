import ReactDOM from 'react-dom'
import { IoMdClose } from "react-icons/io";


const BackDrop = (props) => {
    return <div onClick={props.onClose} className="backdrop fixed inset-0 bg-black/55 w-full h-full z-[650]"/>
}

const ModalContent = (props) => {
    return (
        <div className="modal-wrapper">
            <div className="wrapper p-5 flex flex-col gap-y-2">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-xl">{props.title}</h3>
                    <button className="w-7 h-7 flex items-center justify-center hover:bg-soft-gray cursor-pointer">
                        <IoMdClose size={20} />
                    </button>
                </div>
                {props.children}
            </div>
        </div>
    )
}

const Modal = ({children, title, onOpen, onClose}) => {
    const modalHTMLElement = document.getElementById('modal')
    return (
        <>

            {ReactDOM.createPortal(<BackDrop onOpen={onOpen} onClose={onClose} />, modalHTMLElement)}

            {ReactDOM.createPortal(<ModalContent title={title} onOpen={onOpen} onClose={onClose}>{children}</ModalContent>, modalHTMLElement)}

        </>
    );
};

export default Modal;