import type {ReactNode} from "react";

export interface ModalContextStates {
    content: React.ReactNode;
    show: boolean;
}

export interface ModalContextMethod {
    showModal: (content?: ReactNode) => void;
    hideModal: () => void;
}

export type ModalContextTypes = ModalContextStates & ModalContextMethod