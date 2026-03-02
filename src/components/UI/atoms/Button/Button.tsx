import "./button.style.css"
import type {IButton} from "./IButton.ts";

function Button(buttonProps: IButton) {

    return (
        <button className={`button center ${buttonProps.color}`} onClick={buttonProps.onClick} style={{width:buttonProps.width, height:buttonProps.height}}>
            {buttonProps.children}
        </button>
    );
}

export default Button;