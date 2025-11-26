import "./tag-list.style.css"

function TagList({children} : {children:React.ReactNode}) {
    return(
        <div className="tag-list">
            {children}
        </div>
    )
}

export default TagList;