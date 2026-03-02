import "./button-window.style.css"
import type IButtonWindow from "./IButtonWindow.ts";
import * as React from "react";


function ButtonWindow({children, onClick,color} : IButtonWindow & {children:React.ReactNode}) {
    return (
        <button className={`button-window ${color}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default ButtonWindow;
