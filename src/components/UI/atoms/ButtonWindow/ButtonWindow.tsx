import "./button-window.style.css"
import type IButtonWindow from "./IButtonWindow.ts";
import * as React from "react";


function ButtonWindow({children, onClick} : IButtonWindow & {children:React.ReactNode}) {
    return (
        <button className="button-window" onClick={onClick}>
            {children}
        </button>
    )
}

export default ButtonWindow;
