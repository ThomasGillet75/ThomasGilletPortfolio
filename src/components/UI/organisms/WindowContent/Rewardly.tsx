import ButtonWindow from "../../atoms/ButtonWindow/ButtonWindow.tsx";
import ArrowIcon from "../../atoms/Icons/ArrowIcon.tsx";
import TagList from "../../molecules/TagList/TagList.tsx";
import Tag from "../../atoms/Tag/Tag.tsx";
import Image from "../../atoms/Image/Image.tsx";
import connexion from "../../../../assets/Images/Rewardly/connexion.png";
import friendGroup from "../../../../assets/Images/Rewardly/friend_group.png";
import friend from "../../../../assets/Images/Rewardly/Friend.png";
import groupSuccess from "../../../../assets/Images/Rewardly/group_success.png";
import group from "../../../../assets/Images/Rewardly/group.png";
import project from "../../../../assets/Images/Rewardly/project.png";
import taskCreation from "../../../../assets/Images/Rewardly/task_creation.png";
import task from "../../../../assets/Images/Rewardly/task.png";
import taskModif from "../../../../assets/Images/Rewardly/tast_modif.png";
import {EColor} from "../../../../utils/enum/EColor.ts";

function Rewardly()
{
    const log = () => {
        window.open("https://github.com/ThomasGillet75/rewardly", "_blank");
    }
    return (
        <div className="window-content">
            <header className="project-header">
                <h1>Rewardly</h1>
                <p className="tagline">
                    Application to-do list
                </p>
            </header>

            <section className="padding">
                <p className="padding">
                    Application développée durant mon cursus à la HELHa, dans le cadre du cours de développement mobile.
                    Il s'agit d'une application To-Do List permettant de créer des groupes, d’y ajouter des utilisateurs et de partager des tâches entre eux.
                    Chaque groupe peut également définir une récompense qui sera débloquée une fois que toutes les tâches auront été complétées.
                </p>
                <ButtonWindow color={EColor.GREEN} onClick={log}><text>Code Github</text><ArrowIcon/></ButtonWindow>
            </section>
            <section>
                <h3>
                    Technologie
                </h3>
                <TagList>
                    <Tag color={EColor.GREEN} text="Flutter"/>
                    <Tag color={EColor.GREEN} text="Firebase"/>
                </TagList>
            </section>
            <section className="gallery">
                <Image src={connexion} alt={"image"}/>
                <Image src={task} alt={"image"} />
                <Image src={taskCreation} alt={"image"} />
                <Image src={taskModif} alt={"image"} />
                <Image src={project} alt={"image"} />
                <Image src={group} alt={"image"} />
                <Image src={groupSuccess} alt={"image"} />
                <Image src={friend} alt={"image"}/>
                <Image src={friendGroup} alt={"image"}/>
            </section>
        </div>
    );
}

export default Rewardly;