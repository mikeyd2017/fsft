import { useEffect, useState, useLayoutEffect, useCallback} from "react";
import Project from '../Components/Project';
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai';
import { IconContext } from "react-icons";

function ProjectSlider() {
    const [projectHeight, setProjectHeight] = useState(0);
    const [projectWidth, setProjectWidth] = useState(0);
    const [sliderMargin, setSliderTopMargin] = useState(0);
    const [projects, setProjects] = useState([]);
    const [maxProjectCount, setMaxProjectCount] = useState(0);
    const [projectCount, setProjectCount] = useState(0);
    const [status, setStatus] = useState('idle');

    const setLayoutProjectSize = useCallback(()=>{
        let projectDiv = document.querySelector('.projectslider-content__project');
        let divWidth = projectDiv.clientWidth;
        let divHeight = projectDiv.clientHeight;

        setProjectHeight(divHeight);
        setProjectWidth(divWidth);

        return divHeight;
    },[]);

    useLayoutEffect(()=> {
        setLayoutProjectSize();
    },[setLayoutProjectSize]);

    const setProjectSize = () => {
        let divHeight = setLayoutProjectSize();
        setSliderTopMargin(-(projectCount * divHeight));
    };

    window.addEventListener('resize', setProjectSize);
    
    const getProjects = async () => {
        await fetch('projects.json',
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(async (res) => {
            if (res.ok) {
                const data = await res.json();
                setProjects(data.projects);
                setStatus('processed');
            }
        });
    }

    useEffect(()=> {
        setStatus('fetching');
        setTimeout(getProjects, 450);
    },[]);
    
    useEffect(()=> {
        setMaxProjectCount(projects.length);
    },[projects]);

    const moveSliderUp=()=> {
        if (projectCount > 0)
        {
            setSliderTopMargin(sliderMargin + projectHeight);
            setProjectCount(projectCount - 1);
        }
    }

    const moveSliderDown=()=> {
        if(projectCount < maxProjectCount - 1)
        {
            setSliderTopMargin(sliderMargin - projectHeight);
            setProjectCount(projectCount + 1);
        } 
    }

    useEffect(()=> {
        const setContainerTopMargin=()=> {
            let projectContainer = document.querySelector('.projectslider-content__project-container');
            projectContainer.setAttribute("style", "margin-top: " + sliderMargin + "px;");
        }
        setContainerTopMargin();
    },[sliderMargin]);
    
    return (
        <div className="projectslider-content">
            <div className="projectslider-content__menu">

            </div>

            <div className="projectslider-content__project">
                {status === "fetching" && <div id="spinner"></div>}
                <button className="projectslider-content__project-leftbutton arrows-fade-in" onClick={moveSliderUp}><IconContext.Provider value={{ color: '#424965f8'}}><AiFillCaretLeft/></IconContext.Provider></button>
                <button className="projectslider-content__project-rightbutton arrows-fade-in" onClick={moveSliderDown}><IconContext.Provider value={{ color: '#424965f8'}}><AiFillCaretRight/></IconContext.Provider></button>
                <div className="projectslider-content__project-container">
                    {status === "processed" && projects && projects.length > 0 && projects.map((project)=> <Project {...project} key={project.name} height={projectHeight} width={projectWidth}/>) }
                </div>
            </div>
            
        </div>
    )
}

export default ProjectSlider;