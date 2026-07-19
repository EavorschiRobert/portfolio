import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";
import './Modal.css';

type ModalProps = {
    children: React.ReactNode;
    onClose: () => void;
    title: string;
    subtitle?: string;
}
const Modal = ({children, onClose, title, subtitle}: ModalProps) => {
    return(
        <div
            className="
                fixed
                inset-0
                z-50
                flex
                items-center
                justify-center
                bg-black/60
                backdrop-blur-sm
                overflow-hidden
            "
            onClick={onClose}
        >
            <div
                className="
                    mx-4
                    lg:mx-0
                    w-full
                    max-w-2xl
                    max-h-[70vh]
                    rounded-2xl
                    bg-panel
                    border
                    border-line
                    flex
                    flex-col
                "
                onClick={(e) => e.stopPropagation()}
            >
                <span className="p-4 flex w-full justify-between items-center">
                        <p className="text-3xl font-heading font-bold">{title}</p>
                        <FontAwesomeIcon icon={faX} className="cursor-pointer" onClick={() => onClose()} />
                    </span>
                {subtitle && (
                    <p className="px-4 font-code text-accent text-sm">{subtitle}</p>
                )}
                <hr className="my-4"/>
                <div className="
                    px-4
                    flex-1
                    overflow-y-auto
                    modal-scroll
                    pr-2
                    mb-8
                    ">
                    {children}
                </div>

            </div>
        </div>
    )
}
export default Modal;