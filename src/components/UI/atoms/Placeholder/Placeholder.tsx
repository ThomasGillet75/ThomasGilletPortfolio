import type IPlaceholder from "./IPlaceholder.ts";
import "./placeholder.style.css"


function Placeholder({className}: IPlaceholder) {
    return (<div className={`${className} placeholder`}>
    </div>)
}

export default Placeholder;