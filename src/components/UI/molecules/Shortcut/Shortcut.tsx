import { useRef } from "react";
import "./Shortcut.style.css";
import FileIcon from "../../atoms/Icons/FileIcon.tsx";
import type IShortcut from "./IShortcut.ts";

function Shortcut(shortcutProps: IShortcut) {
    const nodeRef = useRef(null);
    const handleClick = () => {
        if (shortcutProps.onClick) {
            shortcutProps.onClick(shortcutProps.name);
        }
    }

    const showIcon = () => {
        if(shortcutProps.icon) {
            return shortcutProps.icon;
        }
        else{
            return <FileIcon  width={"64px"} height={"64px"}/>
        }
    }

    const isMobile = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const eventHandlers = isMobile
        ? { onClick: handleClick }
        : { onDoubleClick: handleClick };

    return (
        <div>
            <button {...eventHandlers} ref={nodeRef} className={"shortcut"}>
                {showIcon()}
                <span className={"shortcut-label"}>{shortcutProps.name}</span>
            </button>
        </div>
    );
}

export default Shortcut;