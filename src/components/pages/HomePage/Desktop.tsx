import './desktop.style.css';
import Window from "../../UI/organisms/Window/Window.tsx";
import {type ReactNode, useEffect, useState} from "react";
import type IWindow from "../../UI/organisms/Window/IWindow.ts";
import {EShortcutName} from "../../../utils/enum/EShortcutName.ts";
import Lya from "../../UI/organisms/WindowContent/Lya.tsx"
import ColorburstStudio from "../../UI/organisms/WindowContent/ColorburstStudio.tsx";
import Wikipreneurs from "../../UI/organisms/WindowContent/Wikipreneurs.tsx";
import ProfileContainer from "../../UI/molecules/ProfileContainer/ProfileContainer.tsx";
import DefaultWindow from "../../UI/molecules/DefaultWindow/DefaultWindow.tsx";
import Dock from "../../UI/molecules/Dock/Dock.tsx";
import ConfrerieTCG from "../../UI/organisms/WindowContent/ConfrerieTCG.tsx";
import Rewardly from "../../UI/organisms/WindowContent/Rewardly.tsx";
import MovieTinder from "../../UI/organisms/WindowContent/MovieTinder.tsx";
import Modal from "../../UI/molecules/Modal/Modal.tsx";
import WhatsUP from "../../UI/organisms/WindowContent/WhatsUP.tsx";
import Snake from "../../UI/organisms/Application/Snake.tsx";
import Text from "../../UI/atoms/Text/Text.tsx";


const windowContentMap: Record<string, ReactNode> = {
    [EShortcutName.LYA]: <Lya/>,
    [EShortcutName.COLORBURST]: <ColorburstStudio/>,
    [EShortcutName.CONFRERIE]: <ConfrerieTCG/>,
    [EShortcutName.WIKIPRENEURS]: <Wikipreneurs/>,
    [EShortcutName.REWARDLY]: <Rewardly/>,
    [EShortcutName.MOVIETINDER]: <MovieTinder/>,
    [EShortcutName.WHATSUP]: <WhatsUP/>,
    [EShortcutName.SNAKE]: <Snake/>
};

function Desktop() {
    const [activeWindows, setActiveWindows] = useState<IWindow[]>([]);
    const [windowIdCounter, setWindowIdCounter] = useState(0);
    const [zIndexCounter, setzIndexCounter] = useState(0);
    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");

        const handleChange = (e: MediaQueryListEvent) => {
            setIsMobile(e.matches);
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);


    const getWindowContent = (name: string): ReactNode => {
        return windowContentMap[name] || <DefaultWindow/>;
    };

    const showActiveWindows = () => {
        return activeWindows.map(windowData => (
            <Window
                key={windowData.id}
                id={windowData.id}
                title={windowData.title}
                x={windowData.x}
                y={windowData.y}
                z={windowData.z}
                onClose={closeWindow}
                onBringToFront={bringToFront}
            >{getWindowContent(windowData.title)}</Window>
        ));
    };

    const bringToFront = (id: number) => {
        for (let i = 0; i < activeWindows.length; i++) {
            if (activeWindows[i].id === id) {
                setzIndexCounter(zIndexCounter + 1);
                activeWindows[i].z = zIndexCounter;
            }
        }
    }

    const openWindow = (name: string) => {
        const newId = windowIdCounter + 1;
        setWindowIdCounter(newId);
        setzIndexCounter(zIndexCounter + 1);
        const newWindow: IWindow = {
            id: newId,
            title: name,
            z: zIndexCounter,
        };
        setActiveWindows(prevWindows => [...prevWindows, newWindow]);
    };

    const closeWindow = (id: number) => {
        setActiveWindows(activeWindows.filter(window => window.id !== id))
    }

    useEffect(() => {
        setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    },[])


    return (
        isMobile ? <div className={"page-container flex-column-center-center"}><Text>This portfolio is only available on desktop</Text></div>
            : <div className="home-page">
                <Modal/>
                <div className="page-container desktop">
                    <div className={"flex-row-center dock-container"}>
                        <Dock shortcutAction={openWindow}/>
                    </div>
                    <ProfileContainer/>
                    {showActiveWindows()}
                </div>
            </div>
    )
}

export default Desktop;
