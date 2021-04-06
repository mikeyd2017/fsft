export default function Project(props) {
    return (
        <div className="project-content project-fade-in" style={{ height: props.height, width: props.width}}>
            <h2 className="project-content-name">{props.name}</h2>
            <div className="project-content__imagecontainer">
                <div className="project-content__imagecontainer-image">
                    
                </div>
            </div>
            <p className="project-content-description">{props.description}</p>
        </div>
    );
}