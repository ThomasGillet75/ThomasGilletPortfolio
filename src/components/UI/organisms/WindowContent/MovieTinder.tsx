import TagList from "../../molecules/TagList/TagList.tsx";
import Tag from "../../atoms/Tag/Tag.tsx";
import Image from "../../atoms/Image/Image.tsx";
import {EColor} from "../../../../utils/enum/EColor.ts";
import connexionMovie from "../../../../assets/Images/MovieTinder/Connexion_Movie.png";
import detailMovie from "../../../../assets/Images/MovieTinder/Detail_Movie.png";
import groupGestion from "../../../../assets/Images/MovieTinder/Group_gestion.png";
import groupMovie from "../../../../assets/Images/MovieTinder/Groupe_Movie.png";
import homeMovie from "../../../../assets/Images/MovieTinder/Home_Movie.png";
import joinGroup from "../../../../assets/Images/MovieTinder/Join_Group.png";
import matchMovie from "../../../../assets/Images/MovieTinder/Match_Movie.png";
import parametreMovie from "../../../../assets/Images/MovieTinder/Parametre_Movie.png";
import parametreMovie2 from "../../../../assets/Images/MovieTinder/Parametre_Movie2.png";
import succesMovie from "../../../../assets/Images/MovieTinder/Success_Movie.png"



function Rewardly()
{
    return (
        <div className="window-content">
            <header className="project-header">
                <h1>MovieTinder</h1>
                <p className="tagline">
                    Page web pour trouver un film qui plait a tout le monde
                </p>
            </header>

            <section className="padding">
                <p className="padding">
                    MovieTinder est une application web développée durant mon cursus à la HELHa. Elle permet aux utilisateurs de découvrir, d'aimer et de "matcher" des films. Il est également possible de créer ou de rejoindre un groupe pour lancer une recherche commune et trouver un film qui plaît à tous les membres.
                </p>
            </section>
            <section>
                <h3>
                    Technologie
                </h3>
                <TagList>
                    <Tag color={EColor.Purple} text="React"/>
                    <Tag color={EColor.Purple} text="TypeScript"/>
                    <Tag color={EColor.Purple} text="NodeJs"/>
                    <Tag color={EColor.Purple} text="Worker"/>
                    <Tag color={EColor.Purple} text="SQLite"/>
                    <Tag color={EColor.Purple} text="TMDB API"/>
                </TagList>
            </section>
            <section className="gallery">
                <Image src={connexionMovie} alt={"image"}/>
                <Image src={homeMovie} alt={"image"} />
                <Image src={detailMovie} alt={"image"} />
                <Image src={groupMovie} alt={"image"} />
                <Image src={joinGroup} alt={"image"} />
                <Image src={groupGestion} alt={"image"} />
                <Image src={matchMovie} alt={"image"}/>
                <Image src={succesMovie} alt={"image"}/>
                <Image src={parametreMovie} alt={"image"}/>
                <Image src={parametreMovie2} alt={"image"}/>
            </section>
        </div>
    );
}

export default Rewardly;