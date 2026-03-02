import "./window-content.style.css";
import TagList from "../../molecules/TagList/TagList.tsx";
import Tag from "../../atoms/Tag/Tag.tsx"
import ButtonWindow from "../../atoms/ButtonWindow/ButtonWindow.tsx";
import ArrowIcon from "../../atoms/Icons/ArrowIcon.tsx";

function Wikipreneurs() {
    const openVideoLink = () => {
        window.open("https://www.youtube.com/watch?v=xh3_VcVypMc&list=PLGxtOkgUc8FdcxrxpR_eSsMqmG5LDJFCf&index=4", "_blank");
    }
    return (
        <div className="window-content">
            <header className="project-header">
                <h1>Wikipreneurs</h1>
                <p className="tagline">
                    AI-powered chatbot assistant for entrepreneurs.
                </p>
            </header>
            <section className="padding">
                <div className="padding">
                    Wikipreneurs is a web application developed during my internship at MIC Belgium.
                    Its goal is to assist entrepreneurs, whether beginners or experienced, by providing a chatbot based
                    on a RAG architecture fed by the content of the Wikipreneurs website.
                    The application also integrates specialized agents in domains such as business plan creation,
                    association and communication.
                </div>
                <ButtonWindow onClick={openVideoLink}>
                    <span>Wikipreneurs Testimonials</span>
                    <ArrowIcon/>
                </ButtonWindow>
            </section>
            <section>
                <h3>
                    Technology
                </h3>
                <TagList>
                    <Tag text="TypeScript"/>
                    <Tag text="C#"/>
                    <Tag text="React"/>
                    <Tag text="ASP.NET"/>
                    <Tag text="Azure"/>
                    <Tag text="RAG"/>
                    <Tag text="Qdrant"></Tag>
                </TagList>
            </section>
            <section>
            </section>
        </div>
    );
}

export default Wikipreneurs;