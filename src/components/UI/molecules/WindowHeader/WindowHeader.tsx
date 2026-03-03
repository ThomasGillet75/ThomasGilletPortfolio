import "./window-header.style.css"
import CloseIcon from "../../atoms/Icons/CloseIcon.tsx";
import type IWindowHeader from "./IWindowHeader.ts";
import { memo } from "react";

const WindowHeader = memo(function WindowHeader(windowHeaderProps: IWindowHeader) {
    return (
        <div className="window-header-container">
            <div></div>
            <span>{windowHeaderProps.title}</span>
            <div className={"flex-row-center"}>
                <button className="button-header no-drag" onClick={windowHeaderProps.onFullScreenClick}>_</button>
                <button className="button-header no-drag" onClick={windowHeaderProps.onCloseClick}><CloseIcon/></button>
            </div>

        </div>
    )
})

export default WindowHeader;