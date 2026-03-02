import "./profile-container.style.css"
import Moi from "./../../../../assets/Images/moi_portfolio2.jpg"
import TagList from "../TagList/TagList.tsx";
import Tag from "../../atoms/Tag/Tag.tsx";
import Button from "../../atoms/Button/Button.tsx";
import LinkedinIcon from "../../atoms/Icons/LinkedinIcon.tsx";
import GithubIcon from "../../atoms/Icons/GithubIcon.tsx";
import MailIcon from "../../atoms/Icons/MailIcon.tsx";
import Image from "../../atoms/Image/Image.tsx";

function ProfileContainer() {
    const openInNewWindow = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="profile flex-column">
            <div className={"flex-row"}>
                <div className={"overlay"}/>
                <div className="profile-container flex-column">
                    <div className={"flex-row gap"}>
                        <Image src={Moi} alt={"profile_image"} className={"profile-image"}/>
                        <div>
                            <h2 className={"profile-title"}>Thomas Gillet</h2>
                            <p className={"profile-tagline"}>Full-Stack Developer Junior</p>
                            <TagList>
                                <Tag text={"React"}/>
                                <Tag text={"Angular"}/>
                                <Tag text={"Java"}/>
                                <Tag text={"C#"}/>
                                <Tag text={"C++"}/>
                                <Tag text={"TypeScript"}/>
                                <Tag text={"JavaScript"}/>
                                <Tag text={"html"}/>
                                <Tag text={"css"}/>
                                <Tag text={"Flutter"}/>
                                <Tag text={"Azure"}/>
                                <Tag text={"Asp.Net"}/>
                            </TagList>
                        </div>
                    </div>
                    <div className={"flex-row-center gap"}>
                        <div className={"email flex-row-center"}>
                            <a href={"mailto:thomasgillet06@gmail.com"}>
                                <Button>
                                    <MailIcon/>
                                </Button>
                            </a>
                            thomasgillet06@gmail.com
                        </div>
                        <Button width={"42px"} height={"42px"}
                                onClick={() => openInNewWindow('https://github.com/ThomasGillet75')}>
                            <GithubIcon width={"20px"} height={"20px"}/>
                        </Button>
                        <Button width={"42px"} height={"42px"}
                                onClick={() => openInNewWindow('https://www.linkedin.com/in/thomas-gillet-profile/')}>
                            <LinkedinIcon width={"20px"} height={"20px"}/>
                        </Button>
                    </div>

                </div>
            </div>
            <div className={"overlay"}/>
        </div>
    )
}

export default ProfileContainer;