import {Rnd} from "react-rnd"
import "./window.style.css"
import WindowHeader from "../../molecules/WindowHeader/WindowHeader.tsx";
import type IWindow from "./IWindow.ts";
import {type ReactNode, useCallback, useEffect, useMemo, useState} from "react";

interface WindowState {
    width: string | number;
    height: string | number;
    x: number;
    y: number;
}
const INITIAL_WIDTH = 1000;
const INITIAL_HEIGHT = "100%";

function Window({children, onClose, id, onBringToFront, ...windowProps}: IWindow & { children?: ReactNode }) {
    const [isMounted, setIsMounted] = useState(false);
    const initialX = useMemo(()=> windowProps.x ?? (window.innerWidth - INITIAL_WIDTH) / 2, [windowProps.x]);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const [state, setState] = useState<WindowState>({
        width: windowProps.width || INITIAL_WIDTH,
        height: windowProps.height || INITIAL_HEIGHT,
        x: windowProps.x || initialX,
        y: windowProps.y || 0,
    });

    const onCloseClick = useCallback(() => {
        onClose?.(id)
    }, [onClose, id]);

    const onFullScreenClick = useCallback(() => {
        setIsFullScreen(prev => !prev);
    }, []);

    const handleFocus = useCallback(() => {
        onBringToFront?.(id);
    }, [onBringToFront, id]);

    const handleFullScreenSize = isFullScreen
        ? {width: "100%", height: "100%"}
        : {width: state.width, height: state.height};

    const handleFullScreenPosition = isFullScreen
        ? {x: 0, y: 0}
        : {x: state.x, y: state.y};

    useEffect(() => {
        const timer = setTimeout(() => setIsMounted(true), 10);
        return () => clearTimeout(timer);
    }, [])

    return (
        <Rnd
            style={{zIndex: windowProps.z}}
            size={handleFullScreenSize}
            position={handleFullScreenPosition}
            onResizeStart={() => {
                if(isFullScreen){
                    setIsFullScreen(false);
                }
            }}
            onDragStop={(_event, data) => {
                setState(prev => ({ ...prev, x: data.x, y: data.y }));
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
                <WindowHeader title={windowProps.title} onCloseClick={onCloseClick}
                              onFullScreenClick={onFullScreenClick}/>
                {children}
            </div>
        </Rnd>
    )
}

export default Window;