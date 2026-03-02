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

function Rewardly() {
    const log = () => {
        window.open("https://github.com/ThomasGillet75/rewardly", "_blank");
    }
    return (
        <div className="window-content">
            <header className="project-header">
                <h1>Rewardly</h1>
                <p className="tagline">
                    To-Do List Application
                </p>
            </header>
            <section className="padding">
                <p className="padding">
                    Rewardly is an application developed during my studies at HELHa, as part of the mobile development
                    course.
                    It is a To-Do List application that allows users to create groups, add members and share tasks
                    between them.
                    Each group can also define a reward that will be unlocked once all tasks have been completed.
                </p>
                <ButtonWindow color={EColor.GREEN} onClick={log}>
                    <text>GitHub Code</text>
                    <ArrowIcon/></ButtonWindow>
            </section>
            <section>
                <h3>
                    Technology
                </h3>
                <TagList>
                    <Tag color={EColor.GREEN} text="Flutter"/>
                    <Tag color={EColor.GREEN} text="Firebase"/>
                </TagList>
            </section>
            <section className="gallery">
                <Image src={connexion} alt={"image"}/>
                <Image src={task} alt={"image"}/>
                <Image src={taskCreation} alt={"image"}/>
                <Image src={taskModif} alt={"image"}/>
                <Image src={project} alt={"image"}/>
                <Image src={group} alt={"image"}/>
                <Image src={groupSuccess} alt={"image"}/>
                <Image src={friend} alt={"image"}/>
                <Image src={friendGroup} alt={"image"}/>
            </section>
        </div>
    );
}

export default Rewardly;