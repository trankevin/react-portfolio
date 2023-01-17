import projects from "../projects.json"

const WorkList = () => {

    return (
        <div id="work" className="section">

            <h2 className="section__header">Work</h2>

            <p className="section__description">Some work examples from current and previous positions.</p>

            <div className="work-list">
                {projects.map(project => {
                    return (
                        <div key={project.title} className="work-list__item">
                            <div className="work-list__image" style={{backgroundImage: `url(${project.image})`}}></div>
                            <div className="work-list__content">
                                <h3>{project.title}</h3>
                                <p>{project.content}</p>
                                <div className="work-list__btns">
                                    {'urls' in project && project.urls.map(item => {
                                    return (    
                                        <a key={item.label} 
                                            className="btn btn--accent" 
                                            href={item.url} 
                                            target="_blank" 
                                            title={`View ${item.label} - ${project.title}` } 
                                            aria-label={`View ${item.label} - ${project.title}` }>View {item.label}</a>
                                    )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div> 
    )
}

export default WorkList;