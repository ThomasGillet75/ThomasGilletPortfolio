import type IIcon from "./IIcon.ts";

function CloseIcon(iconProps: IIcon) {

    const {height, width, color} = iconProps;
    const svgStyle = {
        height: height || '24px',
        width: width || '24px',
        fill: color || '#000000',
    };

    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             height={svgStyle.height}
             width={svgStyle.width}
             fill={svgStyle.fill} viewBox="0 -960 960 960" >
            <path
                d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"/>
        </svg>
    );
}

export default CloseIcon;