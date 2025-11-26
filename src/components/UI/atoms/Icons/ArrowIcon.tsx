import type IIcon from "./IIcon.ts";

function ArrowIcon(iconProps: IIcon) {

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
             fill={svgStyle.fill} viewBox="0 -960 960 960">
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
        </svg>
    );
}

export default ArrowIcon;