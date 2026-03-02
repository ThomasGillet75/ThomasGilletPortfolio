import TagList from "../../molecules/TagList/TagList.tsx";
import Tag from "../../atoms/Tag/Tag.tsx";
import Image from "../../atoms/Image/Image.tsx";
import StartTCG from "../../../../assets/Images/Start_TCG.png"
import CardTCG from "../../../../assets/Images/Card_TCG.png"
import ScanTCG from "../../../../assets/Images/Scan_TCG.png"
import CollectionTCG from "../../../../assets/Images/Collection_TCG.png"
import OpeningTCG from "../../../../assets/Images/Opening_TCG.png"
import {EColor} from "../../../../utils/enum/EColor.ts";

function ConfrerieTCG() {
    return (
        <div className="window-content">
            <header className="project-header">
                <h1>Confrerie TCG</h1>
                <p className="tagline">
                    Jeu de collection de cartes virtuelles de confrerie Belge
                </p>
            </header>
            <section className="padding" >
                <div className="padding">
                    Confrérie TCG est un projet réalisé en 48 heures lors du Hackathon organisé par le CSLab de Namur, sur le thème « Le Patrimoine ».
                    C’est un jeu de cartes à collectionner dont l’objectif est de visiter la ville de Namur, découvrir ses monuments et entrer dans les commerces participants.
                    En scannant des QR Codes, les joueurs peuvent obtenir des paquets de cartes et enrichir leur collection inspirée des confréries belges
                </div>
            </section>
            <section>
                <h3>
                    Technologie
                </h3>
                <TagList>
                    <Tag color={EColor.RED} text="Unity"/>
                    <Tag color={EColor.RED} text="C#"/>
                </TagList>
            </section>

            <section className="gallery">
                <Image src={StartTCG} alt={"TCG Image"}/>
                <Image src={CollectionTCG} alt={"Collection Image"}/>
                <Image src={ScanTCG} alt={"TCG image"}/>
                <Image src={OpeningTCG} alt={"Opening TCG Image"}/>
                <Image src={CardTCG} alt={"Card TCG Image"}/>
            </section>
        </div>
    )
}

export default ConfrerieTCG;

