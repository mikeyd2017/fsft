import { useEffect } from 'react/cjs/react.development';
import '../Styles/project.scss';

export default function Project(props) {
    return (
        <div className="project-content" style={{ height: props.height, width: props.width}}>
            <h2 className="project-content-name">{props.name}</h2>
            <p className="project-content-description">{props.description}</p>
        </div>
    );
}