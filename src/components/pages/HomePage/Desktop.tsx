import Header from "../../UI/organisms/Header/Header.tsx";
import './desktop.style.css';
import Shortcut from "../../UI/molecules/Shortcut/Shortcut.tsx";
import Window from "../../UI/organisms/Window/Window.tsx";
import {type ReactNode, useState} from "react";
import type IShortcut from "../../UI/molecules/Shortcut/IShortcut.ts";
import type IWindow from "../../UI/organisms/Window/IWindow.ts";
import {EShortcutName} from "../../../utils/enum/EShortcutName.ts";
import Lya from "../../UI/organisms/WindowContent/Lya.tsx"
import ColorburstStudio from "../../UI/organisms/WindowContent/ColorburstStudio.tsx";
import lyaIcon from './../../../assets/Images/lya.png';
import colorburstIcon from './../../../assets/Images/ColorBurst3.jpg';
import wikipreneursIcon from './../../../assets/Images/Wikipreneurs.png';
import confrerieIcon from './../../../assets/Images/Confrerie3.png';
import rewardlyIcon from './../../../assets/Images/Rewardly2.png';
import movieTinderIcon from './../../../assets/Images/MovieTinder.png';


const windowContentMap: Record<string, ReactNode> = {
    [EShortcutName.LYA]: <Lya/>,
    [EShortcutName.COLORBURST]: <ColorburstStudio/>

};
const shortcuts: IShortcut[] = [
    {
        name: EShortcutName.LYA,
        icon: <img className={"img-radius"} src={lyaIcon} alt="Lya Project Icon" width={64} height={64}
                   draggable={false}/>
    },
    {
        name: EShortcutName.COLORBURST,
        icon: <img className={"img-radius"} src={colorburstIcon} alt="ColorBurstProjectIcon" width={64} height={64}
                   draggable={false}/>
    },
    {
        name: EShortcutName.WIKIPRENEURS,
        icon: <img className={"img-radius"} src={wikipreneursIcon} alt="ColorBurstProjectIcon" width={64} height={64}
                   draggable={false}/>
    },
    {
        name: EShortcutName.CONFRERIE, icon : <img className={"img-radius"} src={confrerieIcon} alt="ColorBurstProjectIcon" width={64} height={64}
                                                   draggable={false}/>
    },
    {
        name: EShortcutName.MOVIETINDER, icon : <img src={movieTinderIcon} alt="ColorBurstProjectIcon" width={64} height={64}
                                                     draggable={false}/>
    },
    {
        name: EShortcutName.REWARDLY, icon : <img src={rewardlyIcon} alt="ColorBurstProjectIcon" width={64} height={64}
                                                  draggable={false}/>
    }
];

function Desktop() {
    const [activeWindows, setActiveWindows] = useState<IWindow[]>([]);
    const [windowIdCounter, setWindowIdCounter] = useState(0);
    const [zIndexCounter, setzIndexCounter] = useState(0);


    const showShortcuts = () => {
        const components = [];
        for (let i = 0; i < shortcuts.length; i++) {
            components.push(<Shortcut key={shortcuts[i].name} name={shortcuts[i].name} icon={shortcuts[i].icon}
                                      onClick={openWindow}/>);
        }
        return components;
    }

    const getWindowContent = (name: string): ReactNode => {
        return windowContentMap[name] || <div>Contenu par défaut</div>;
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
                activeWindows[i].z = zIndexCounter + 1;
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
        };
        setActiveWindows(prevWindows => [...prevWindows, newWindow]);
    };

    const closeWindow = (id: number) => {
        setActiveWindows(activeWindows.filter(window => window.id !== id))
    }


    return (
        <div className="home-page">
            <Header/>
            <div className="page-container desktop">
                {showShortcuts()}
                {showActiveWindows()}
            </div>
        </div>
    )
}

export default Desktop;