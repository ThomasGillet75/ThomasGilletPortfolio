import {EShortcutName} from "../../../../utils/enum/EShortcutName.ts";
import type IShortcut from "../Shortcut/IShortcut.ts";
import lyaIcon from '../../../../assets/Images/lya.png';
import colorburstIcon from '../../../../assets/Images/ColorBurst3.jpg';
import wikipreneursIcon from '../../../../assets/Images/Wikipreneurs.png';
import confrerieIcon from '../../../../assets/Images/Confrerie3.png';
import rewardlyIcon from '../../../../assets/Images/Rewardly2.png';
import movieTinderIcon from '../../../../assets/Images/MovieTinder2.png';
import whatsupIcon from '../../../../assets/Images/WhatsUp.png';
import Shortcut from "../Shortcut/Shortcut.tsx";
import type IDock from "./IDock.ts";
import "./dock.style.css"

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
        name: EShortcutName.CONFRERIE,
        icon: <img className={"img-radius"} src={confrerieIcon} alt="ColorBurstProjectIcon" width={64} height={64}
                   draggable={false}/>
    },
    {
        name: EShortcutName.WIKIPRENEURS,
        icon: <img className={"img-radius"} src={wikipreneursIcon} alt="ColorBurstProjectIcon" width={64} height={64}
                   draggable={false}/>
    },
    {
        name: EShortcutName.MOVIETINDER,
        icon: <img className={"img-radius"} src={movieTinderIcon} alt="ColorBurstProjectIcon" width={64} height={64}
                   draggable={false}/>
    },
    {
        name: EShortcutName.REWARDLY, icon: <img src={rewardlyIcon} alt="ColorBurstProjectIcon" width={64} height={64}
                                                 draggable={false}/>
    },
    {
        name: EShortcutName.WHATSUP, icon: <img className={"img-radius"} src={whatsupIcon} alt={"whatsupProjectIcon"} width={64} height={64}/>
    },
];

function Dock(dockProps : IDock) {
    return (
        <div >
            <div className="overlay1"/>
            <div className={"dock"}>
                <div className={"text"}>Projet</div>
                <div className={"dock-grid"}>
                    {shortcuts.map((shortcut) => {
                        return (
                            <Shortcut
                                key={shortcut.name}
                                name={shortcut.name}
                                icon={shortcut.icon}
                                onClick={dockProps.shortcutAction}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="overlay2"/>
        </div>
    )
}

export default Dock;