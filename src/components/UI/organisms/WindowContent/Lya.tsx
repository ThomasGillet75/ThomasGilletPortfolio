import "./window-content.style.css";
import LyaImage2 from "./../../../../assets/Images/lya_example2.png"
import TagList from "../../molecules/TagList/TagList.tsx";
import Tag from "../../atoms/Tag/Tag.tsx"
import ButtonWindow from "../../atoms/ButtonWindow/ButtonWindow.tsx";
import ArrowIcon from "../../atoms/Icons/ArrowIcon.tsx";
import Image from "../../atoms/Image/Image.tsx";

function Lya() {
    const log = () => {
        window.open("https://www.youtube.com/live/o1eKuJIHzN4?si=VIV_eGgwMgqu3IAi&t=1624", "_blank");
    }
    return (
        <div className="window-content">
            <header className="project-header">
                <h1>Lya</h1>
                <p className="tagline">
                    Un guide IA intégré au navigateur pour améliorer l’accessibilité web pour les personnes en fracture
                    numérique.
                </p>
            </header>
            <section className="padding" >
                <div className="padding">
                    Lya est une extension de navigateur conçue pour assister les utilisateurs ayant des difficultés avec
                    l'informatique.
                    En analysant le contenu des pages web, elle offre une aide contextuelle pour simplifier la
                    navigation et la compréhension.
                    Ce projet a été développé en 48 heures lors du hackathon "AI4Good" organisé par le MIC Belgique.
                </div>
                <ButtonWindow onClick={log}><text>Présentation lors du Hackathon</text><ArrowIcon/></ButtonWindow>
            </section>
            <section>
                <h3>
                    Technologie
                </h3>
                <TagList>
                    <Tag text="JavaScript"/>
                    <Tag text="Gemini API"/>
                    <Tag text="WebExtension"/>
                </TagList>
            </section>

            <section>
                <Image src={LyaImage2} alt={"lya_image"}/>
            </section>
        </div>
    );
}

export default Lya;