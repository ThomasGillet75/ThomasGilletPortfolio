import {useState} from "react";
import type IImage from "./IImage.ts";
import Placeholder from "../Placeholder/Placeholder.tsx";
import "./image.style.css"
import {useModalContext} from "../../../contexts/ModalContext/ModalContextProvider.tsx";

function Image(imageProps: IImage) {
    const [isLoaded, setIsLoaded] = useState(false);
    const modalContext = useModalContext();
    const toggleFocus = () => {
        modalContext.showModal( <img
            className={`image-focus ${isLoaded ? "loaded" : ""} ${imageProps.className}`}
            src={imageProps.src}
            alt={imageProps.alt}
            onLoad={() => setIsLoaded(true)}
            onClick={toggleFocus}
        />)
    }

    return (
        <>
            {!isLoaded && <Placeholder className={`image ${imageProps.className}`}/>}
            <img
                className={`image ${isLoaded ? "loaded" : ""} ${imageProps.className}`}
                src={imageProps.src}
                alt={imageProps.alt}
                onLoad={() => setIsLoaded(true)}
                onClick={toggleFocus}
            />
        </>
    )
}

export default Image