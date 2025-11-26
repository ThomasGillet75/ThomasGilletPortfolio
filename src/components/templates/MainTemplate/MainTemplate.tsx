import * as React from "react";
import './MainTemplate.style.css';

function MainTemplate({children}: {children: React.ReactNode}) {
    return (
        <div className="main-template">
            {children}
        </div>
    );
}

export default MainTemplate;