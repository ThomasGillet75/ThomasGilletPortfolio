import './colorburst-studio.style.css';
import './window-content.style.css'
import ButtonWindow from "../../atoms/ButtonWindow/ButtonWindow.tsx";
import ArrowIcon from "../../atoms/Icons/ArrowIcon.tsx";
import TagList from "../../molecules/TagList/TagList.tsx";
import Tag from "../../atoms/Tag/Tag.tsx";
import Colorburst from "./../../../../assets/Images/ColorBurst_example.png"
import Colorburst2 from "./../../../../assets/Images/ColorBurst_example2.png"



function ColorburstStudio() {

    const log = () => {
        window.open("https://ushien.itch.io/colorburst-studio", "_blank");
    }
    return (
        <div className="window-content">
            <header className="project-header">
                <h1>Colorburst Studio : Jeu de Création de Feux d'Artifice</h1>
                <p className="tagline">
                    Un jeu de simulation de feux d'artifice développé en 72h lors d'une Game jam.
                </p>
            </header>

            <section className="padding">
                <p>
                    Colorburst Studio est un jeu où le joueur incarne un artificier. Le but est de mélanger différentes
                    poudres chimiques pour créer des feux d'artifice aux couleurs et effets spectaculaires. Le défi
                    réside dans la découverte des bonnes combinaisons pour faire les plus beau feux d'artifice.
                </p>
                <div className="padding">
                    Ce projet a été entièrement réalisé avec le moteur de jeu Unity dans le cadre d'une
                    Game jam de 72 heures sous le theme "Compound".
                </div>
                <ButtonWindow onClick={log}><text>Lien vers le jeux itch</text><ArrowIcon/></ButtonWindow>
            </section>
            <section>
                <h3>
                    Technologie
                </h3>
                <TagList>
                    <Tag text="Unity"/>
                    <Tag text="C#"/>
                </TagList>
            </section>
            <section className="gallery">
                <img className="image" src={Colorburst}/>
                <img className="image" src={Colorburst2}/>
            </section>
        </div>
    );
}

export default ColorburstStudio;