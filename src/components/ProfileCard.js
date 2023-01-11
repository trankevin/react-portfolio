import img from "../assets/imgs/bw-kevin-square.png";
import {ReactComponent as LinkedIn} from "../assets/icons/linkedin.svg";
import {ReactComponent as Github} from "../assets/icons/github.svg";

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
                <p>Front End Developer</p>
                <div className="profile-card__social-icons">
                    <a href=""><LinkedIn /></a>
                    <a href=""><Github /></a>
                </div>
            </div>
            <div className="profile-card__buttons">
                <a href="work" onClick={onAnchorClick} className="btn btn--accent">View Work</a>
                <a href="contact-me" onClick={onAnchorClick} className="btn">Contact Me</a>
            </div>
        </div>
    )
}

export default ProfileCard;