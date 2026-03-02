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
                    Virtual Belgian Brotherhood Card Collection Game
                </p>
            </header>
            <section className="padding">
                <div className="padding">
                    Confrérie TCG is a project made in 48 hours during the Hackathon organized by the CSLab of Namur,
                    under the theme "Heritage". It is a trading card game where the goal is to visit the city of Namur,
                    discover its monuments and enter participating shops. By scanning QR Codes, players can obtain card
                    packs and enrich their collection inspired by Belgian brotherhoods.
                </div>
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

