export default function Project(props) {
    return (
        <div className="project project-fade-in" style={{ height: props.height, width: props.width}}>
            <div className="content">
                <h2 className="name">{props.name}</h2>
                <div className="image-container">
                    <div className="image">
                        
                    </div>
                </div>
                <p className="description">{props.description}</p>
            </div>
        </div>
    );
}