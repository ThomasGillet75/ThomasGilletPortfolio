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
                    An AI-powered browser guide to improve web accessibility for people with digital literacy
                    challenges.
                </p>
            </header>
            <section className="padding">
                <div className="padding">
                    Lya is a browser extension designed to assist users who have difficulties with technology.
                    By analyzing web page content, it provides contextual help to simplify navigation and understanding.
                    This project was developed in 48 hours during the "AI4Good" hackathon organized by MIC Belgium.
                </div>
                <ButtonWindow onClick={log}>
                    <text>Hackathon Presentation</text>
                    <ArrowIcon/></ButtonWindow>
            </section>
            <section>
                <h3>
                    Technology
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