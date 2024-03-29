//import img from "../assets/imgs/bw-kevin-square.png";
import img from "../assets/imgs/bw-kevin-square-no-bg-adobe-edited.jpeg";
import {ReactComponent as LinkedIn} from "../assets/icons/linkedin.svg";
import {ReactComponent as Github} from "../assets/icons/github.svg";
import { CgWebsite } from "react-icons/cg";
import { HiEnvelope } from "react-icons/hi2";

const ProfileCard = () => {

    const onAnchorClick = (e) => {
        e.preventDefault();

        const id = e.target.getAttribute('href');
        
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <div className="profile-card">
            <div className="profile-card__img-circle" 
                alt="Kevin Tran Profile Image" 
                style={{backgroundImage: `url(${img})`}}>
            </div>
            <div className="profile-card__text-content">
                <h1>Kevin Tran</h1>
                <p>Full Stack Web Developer</p>

                <div className="profile-card__sub-bar">
                    <div className="profile-card__social-icons">
                        <a href="https://www.linkedin.com/in/kevintrandev/" target="_blank" title="LinkedIn Profile"><LinkedIn aria-hidden="true"/></a>
                        <a href="https://github.com/trankevin" target="_blank" title="Github Profile"><Github aria-hidden="true"/></a>
                        
                    </div>
                    <span>|</span>
                    <p className="profile-card__location">Toronto, Canada</p>
                </div>
                
                
            </div>
            <div className="profile-card__buttons">
                <a href="work" onClick={onAnchorClick} className="btn btn--accent">View Work <CgWebsite /></a>
                <a href="contact-me" onClick={onAnchorClick} className="btn">Contact Me <HiEnvelope /></a>
            </div>
        </div>
    )
}

export default ProfileCard;