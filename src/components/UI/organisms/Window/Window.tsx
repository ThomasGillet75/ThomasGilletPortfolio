import { Rnd } from "react-rnd"
import "./window.style.css"
import WindowHeader from "../../molecules/WindowHeader/WindowHeader.tsx";
import type IWindow from "./IWindow.ts";
import {type ReactNode, useEffect, useState} from "react";

function Window({ children, ...windowProps }: IWindow & { children?: ReactNode }) {
    const [isMounted, setIsMounted] = useState(false);
    const width = windowProps.width ?? (window.innerWidth < 1000 ? '100%' : 1000);
    const initialX = windowProps.x ?? (window.innerWidth - Number(String(width).replace('px', ''))) / 2;

    const [state, setState] = useState({

        width: windowProps.width || width,
        height: windowProps.height || "100%",
        x: windowProps.x || initialX,
        y: windowProps.y || 0,
    });

    const onCloseClick = () => {
        if(windowProps.onClose) {
            windowProps.onClose(windowProps.id)
        }
    }

    const handleFocus = () => {
        if(windowProps.onBringToFront)
        {
            windowProps.onBringToFront(windowProps.id);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => setIsMounted(true), 10);
        return () => clearTimeout(timer);
    },[])

    return (
        <>
            <Rnd
                style={{ zIndex: windowProps.z }}
                size={{ width: state.width, height: state.height }}
                position={{ x: state.x, y: state.y}}
                onDragStop={(_event, data) => {
                    setState({ ...state, x: data.x, y: data.y });
                }}
                onResizeStop={(_event, _direction, ref, _delta, position) => {
                    setState({
                        width: ref.style.width,
                        height: ref.style.height,
                        ...position,
                    });
                }}
                bounds="parent"
                dragHandleClassName={"window-header-container"}
                cancel=".no-drag"
            >
                <div className={`window-container ${isMounted ? "mounted" : ""}`} onMouseDown={handleFocus}>
                    <WindowHeader title={windowProps.title} onCloseClick={onCloseClick}/>
                    {children}
                </div>
            </Rnd>
        </>
    )
}

export default Window;