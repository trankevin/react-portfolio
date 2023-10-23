import { FaWrench, FaHtml5, FaReact, FaCss3Alt, FaWordpress, FaPhp, FaGithub, FaAngular, FaMicrosoft } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiIllustrator, DiMysql } from "react-icons/di";
import { SiWoo,SiJquery } from "react-icons/si";
import skills from "../skills.json"

const SkillsList = () => {
    let icons = { 
        FaHtml5,
        IoLogoJavascript,
        FaReact,
        FaCss3Alt,
        FaWordpress,
        FaPhp,
        SiJquery,
        DiMysql,
        SiWoo,
        FaGithub,
        FaAngular,
        DiIllustrator,
        FaMicrosoft


     };
    return (
        <div className="section">

            <h2 className="section__header">Skills <FaWrench className="wrench-icon"/></h2>
            <div className="skills-list">
                {skills.map(skill => {
                    const IconComponent = icons[skill.logo];
                    return (
                        <div key={skill.title} className="skills-list__item">
                            {skill.title} {IconComponent ? <IconComponent /> : ''}
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default SkillsList;