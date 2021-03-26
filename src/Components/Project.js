import '../Styles/project.scss';
import '../Styles/animations.scss';

export default function Project(props) {
    return (
        <div className="project-content project-fade-in" style={{ height: props.height, width: props.width}}>
            <h2 className="project-content-name">{props.name}</h2>
            <p className="project-content-description">{props.description}</p>
        </div>
    );
}