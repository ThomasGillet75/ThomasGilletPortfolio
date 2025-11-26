import "./window-header.style.css"
import CloseIcon from "../../atoms/Icons/CloseIcon.tsx";
import type IWindowHeader from "./IWindowHeader.ts";

function WindowHeader(windowHeaderProps : IWindowHeader){
    return (
        <div className="window-header-container">
            <div></div>
            <text>{windowHeaderProps.title}</text>
            <button className="button-header no-drag" onClick={windowHeaderProps.onCloseClick} ><CloseIcon/></button>
        </div>
    )
}

export default WindowHeader;