import { useRef } from "react";
import Draggable from "react-draggable";
import "./Shortcut.style.css";
import FileIcon from "../../atoms/Icons/FileIcon.tsx";
import type IShortcut from "./IShortcut.ts";

function Shortcut(shortcutProps: IShortcut) {
    const nodeRef = useRef(null);

    const onDoubleClick = () => {
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

    return (
        <Draggable
            nodeRef={nodeRef}
            bounds="parent"
            axis="both"
            scale={1}
        >
            <button onDoubleClick={onDoubleClick} ref={nodeRef} className={"shortcut"}>
                {showIcon()}
                <span className={"shortcut-label"}>{shortcutProps.name}</span>
            </button>
        </Draggable>
    );
}

export default Shortcut;