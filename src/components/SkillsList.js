import skills from "../skills.json"

const SkillsList = () => {

    return (
        <div className="section">

            <h2 className="section__header">Skills</h2>
            <div className="skills-list">
                {skills.map(skill => {
                    return (
                        <div key={skill.title} className="skills-list__item">
                            {skill.title}
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default SkillsList;