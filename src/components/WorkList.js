import projects from "../projects.json"
import { MdWork } from "react-icons/md"
import { CgWebsite } from "react-icons/cg"

const WorkList = () => {

    return (
        <div id="work" className="section">

            <h2 className="section__header">Work <CgWebsite /></h2>

            <div className="section__description">

            <p>As an agency developer with 8 years experience, I've had the opportunity to work on a variety of projects using different technologies such as <b>HTML5</b>, <b>CSS</b>, <b>PHP</b>, <b>C#</b>, <b>MySQL</b>, <b>JavaScript</b>, <b>AngularJS</b>, <b>React</b> and <b>Content</b> <b>Management</b> <b>Systems</b>. </p>
            <p>Here are a few examples from current and previous positions:</p>

            </div>
            

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