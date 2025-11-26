import type ITag from "./ITag.ts";
import "./tag.style.css"

function Tag(tagProps: ITag){
    return <div className={"tag"}>{tagProps.text}</div>
}

export default Tag;