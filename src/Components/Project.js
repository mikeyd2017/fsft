export default function Project(props) {
    return (
        <div className="project-content project-fade-in" style={{ height: props.height, width: props.width}}>
            <div className="project-content__container">
                <h2 className="project-content__container-name">{props.name}</h2>
                <div className="project-content__container__imagecontainer">
                    <div className="project-content__container__imagecontainer-image">
                        
                    </div>
                </div>
                <p className="project-content__container-description">{props.description}</p>
            </div>
        </div>
    );
}