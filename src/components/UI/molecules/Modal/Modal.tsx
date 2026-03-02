import "./modal.style.css"
import {useModalContext} from "../../../contexts/ModalContext/ModalContextProvider.tsx";

const Modal = () => {
    const modalContext = useModalContext();
    return (<>
            {
                modalContext.show ? <div className="modal" onClick={() => modalContext.hideModal()}>
                        <div className={"modal-content"}>{modalContext.content}
                        </div>
                    </div>
                    : <></>
            }
        </>
    )
}

export default Modal;