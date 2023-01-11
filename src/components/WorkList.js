import projects from "../projects.json"

const WorkList = () => {

    return (
        <div id="work" className="section">

            <h2 className="section__header">Work</h2>

            {projects.map(project => {
                return (
                    <div key={project.title} className="work-list">
                        <div className="work-list__item">
                            <div className="work-list__image"></div>
                            <div className="work-list__content">
                                <h3>{project.title}</h3>
                                <p>{project.content}</p>
                                <div className="work-list__btns">
                                    {'urls' in project && project.urls.map(item => <a key={item.label} className="btn btn--accent" href={item.url}>View {item.label}</a>) }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div> 
    )
}

export default WorkList;