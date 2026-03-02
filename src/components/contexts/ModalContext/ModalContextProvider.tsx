import type {ModalContextStates, ModalContextTypes} from "./ModalContextTypes.ts";
import {createContext, type ReactNode, useContext, useState} from "react";

const ModalContext = createContext<ModalContextTypes>({
    show: false,
    content: <></>,
    showModal: () => {
    },
    hideModal: () => {
    },
});

export default function ModalContextProvider(props: { children: ReactNode }) {
    const [state, setState] = useState<ModalContextStates>({
        show: false,
        content:<></>
    });

    const showModal = (content?: ReactNode) => {
        setState(prev => ({
            ...prev,
            show: true,
            content: content,
        }));
    }

    const hideModal = () => {
        setState(prev => ({...prev, show: false}));
    };

    return (
        <ModalContext.Provider
            value={{
                ...state,
                showModal,
                hideModal,
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export const useModalContext = () => useContext(ModalContext);