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
                <h1>ChatPreneurs</h1>
                <p className="tagline">
                    Un assistant IA pour les entrepreneurs.
                </p>
            </header>
            <section className="padding">
                <div className="padding">
                    ChatPreneurs est une application web développée pour Wikipreneurs lors de mon stage au MIC Belgique.
                    Son but est d'aider les entrepreneurs, qu'ils soient débutants ou expérimentés, en leur proposant un chatbot basé sur une architecture RAG et alimenté par le contenu du site de Wikipreneurs.
                    L'application intègre également des agents spécialisés dans des domaines comme la création d'un business plan, l'association ou la communication.
                </div>
                <ButtonWindow onClick={openVideoLink}>
                    <span>Témoignages de Wikipreneurs</span>
                    <ArrowIcon/>
                </ButtonWindow>
            </section>
            <section>
                <h3>
                    Technologie
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