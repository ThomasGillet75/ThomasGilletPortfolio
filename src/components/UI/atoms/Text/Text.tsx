import * as React from "react";


function Text({ children }: { children: React.ReactNode }) {
    return (<div className={"text"}>{children}</div>)
}

export default Text;

