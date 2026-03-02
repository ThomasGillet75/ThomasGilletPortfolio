import './window-content.style.css'
import ButtonWindow from "../../atoms/ButtonWindow/ButtonWindow.tsx";
import ArrowIcon from "../../atoms/Icons/ArrowIcon.tsx";
import TagList from "../../molecules/TagList/TagList.tsx";
import Tag from "../../atoms/Tag/Tag.tsx";
import Colorburst from "./../../../../assets/Images/ColorBurst_example.png"
import Colorburst2 from "./../../../../assets/Images/ColorBurst_example2.png"
import Image from "../../atoms/Image/Image.tsx";
import {EColor} from "../../../../utils/enum/EColor.ts";


function ColorburstStudio() {

    const log = () => {
        window.open("https://ushien.itch.io/colorburst-studio", "_blank");
    }
    return (
        <div className="window-content">
            <header className="project-header">
                <h1>Colorburst Studio</h1>
                <p className="tagline">
                    Fireworks Creation Game
                </p>
            </header>

            <section className="padding">
                <p>
                    Colorburst Studio is a game where the player takes on the role of a pyrotechnician. The goal is to
                    mix different chemical powders to create fireworks with spectacular colors and effects. The
                    challenge
                    lies in discovering the right combinations to create the most beautiful fireworks.
                </p>
                <div className="padding">
                    This project was entirely made with the Unity game engine as part of a
                    72-hour Game Jam under the theme "Compound".
                </div>
                <ButtonWindow color={EColor.RED} onClick={log}>
                    <text>Link to the itch game</text>
                    <ArrowIcon/></ButtonWindow>
            </section>
            <section>
                <h3>
                    Technology
                </h3>
                <TagList>
                    <Tag color={EColor.RED} text="Unity"/>
                    <Tag color={EColor.RED} text="C#"/>
                </TagList>
            </section>
            <section className="gallery">
                <Image alt={"colorburst_image1"} src={Colorburst}/>
                <Image alt={"colorburst_image2"} src={Colorburst2}/>
            </section>
        </div>
    );
}

export default ColorburstStudio;