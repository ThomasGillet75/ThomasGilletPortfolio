import "./window-content.style.css";
import TagList from "../../molecules/TagList/TagList.tsx";
import Tag from "../../atoms/Tag/Tag.tsx"
import ConnectionImage from "../../../../assets/Images/Whatsup/ConnectionWhatsup.png"
import AccountCreationImage from "../../../../assets/Images/Whatsup/AccountCreationWhatsup.png"
import MessageImage from "../../../../assets/Images/Whatsup/MessageWhatsup.png"
import Image from "../../atoms/Image/Image.tsx";
import {EColor} from "../../../../utils/enum/EColor.ts";

function Lya() {
    return (
        <div className="window-content">
            <header className="project-header">
                <h1>Whatsup</h1>
                <p className="tagline">
                    Messaging Application
                </p>
            </header>
            <section className="padding">
                <div className="padding">
                    Whatsup is a desktop application developed during my studies at HELHa as part of an exam.
                    It enables secure communication between multiple users.
                </div>
            </section>
            <section>
                <h3>
                    Technology
                </h3>
                <TagList>
                    <Tag color={EColor.GREEN} text="MAUI"/>
                    <Tag color={EColor.GREEN} text="Socket"/>
                    <Tag color={EColor.GREEN} text="TCP/IP"/>
                    <Tag color={EColor.GREEN} text="Worker"/>
                    <Tag color={EColor.GREEN} text="Entity Framework"/>
                    <Tag color={EColor.GREEN} text="SQLite"/>
                </TagList>
            </section>

            <section className="gallery">
                <Image src={ConnectionImage} alt={"connectionImage"}/>
                <Image src={AccountCreationImage} alt={"creationImage"}/>
                <Image src={MessageImage} alt={"messageImage"}/>
            </section>
        </div>
    );
}

export default Lya;