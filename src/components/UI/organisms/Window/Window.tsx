import { Rnd } from "react-rnd"
import "./window.style.css"
import WindowHeader from "../../molecules/WindowHeader/WindowHeader.tsx";
import type IWindow from "./IWindow.ts";
import {type ReactNode, useState} from "react";

function Window({ children, ...windowProps }: IWindow & { children?: ReactNode }) {

    const onCloseClick = () => {
        if(windowProps.onClose) {
            windowProps.onClose(windowProps.id)
        }
    }
    const initialWidth = windowProps.width || 1000;

    const initialX = windowProps.x ?? (window.innerWidth - initialWidth) / 2;

    const [state, setState] = useState({
        width: windowProps.width || 1000,
        height: windowProps.height || "100%",
        x: windowProps.x || initialX,
        y: windowProps.y || 0,
    });
    const handleFocus = () => {
        if(windowProps.onBringToFront)
        {
            windowProps.onBringToFront(windowProps.id);
        }
    };

    return (
        <>
            <Rnd
                style={{ zIndex: windowProps.z }}
                size={{ width: state.width, height: state.height }}
                position={{ x: state.x, y: state.y}}
                onDragStop={(event, data) => {
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
                <div className="window-container" onMouseDown={handleFocus}>
                    <WindowHeader title={windowProps.title} onCloseClick={onCloseClick}/>
                    {children}
                </div>
            </Rnd>
        </>
    )
}

export default Window;