import { useEffect, useState, useLayoutEffect, useCallback } from "react";
import Project from '../Components/Project';
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai';
import { IconContext } from "react-icons";
import '../Styles/project-slider.scss';

function ProjectSlider() {
    const [projects, setProjects] = useState([]);
    const [projectWidth, setProjectWidth] = useState(0);
    const [projectHeight, setProjectHeight] = useState(0);
    const [sliderMargin, setSliderTopMargin] = useState(0);
    let [projectCount, setProjectCount] = useState(0);
    const [status, setStatus] = useState('idle');
    const [maxProjectCount, setMaxProjectCount] = useState(0);
    const [showLoading, setLoading] = useState(false);

    useEffect(()=> {
        setMaxProjectCount(projects.length);
    });

    const setProjectSize=()=>{
        let projectDiv = document.querySelector('.projectslider-content__project');
        let divWidth = projectDiv.clientWidth;
        let divHeight = projectDiv.clientHeight;

        setProjectHeight(divHeight);
        setProjectWidth(divWidth);

        setSliderTopMargin(-(projectCount * divHeight))
        //Need to round the top margin to display the nearest project properly (on resize and first load)
    }

    useLayoutEffect(()=> {
        setProjectSize();
    }, [projects.length]);

    window.addEventListener('resize', setProjectSize);

    const getProjects = async () => {
        setStatus('fetching');
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
        getProjects();
    }, []);

    const setContainerTopMargin=()=> {
        let projectContainer = document.querySelector('.projectslider-content__project-container');
        projectContainer.setAttribute("style", "margin-top: " + sliderMargin + "px;");
    }

    useEffect(()=>{
        setContainerTopMargin();
    },[sliderMargin]);

    const moveSliderUp=()=> {
        if (projectCount > 0)
        {
            setSliderTopMargin(sliderMargin + projectHeight);
            setProjectCount(projectCount -= 1);
        }
    }

    const moveSliderDown=()=> {
        if(projectCount < maxProjectCount - 1)
        {
            setSliderTopMargin(sliderMargin - projectHeight);
            setProjectCount(projectCount += 1);
        } 
    }
    
    return (
        <div className="projectslider-content">
            <div className="projectslider-content__menu">

            </div>

            <div className="projectslider-content__project fade-in">
                <a href="#" className="projectslider-content__project-leftbutton" onClick={moveSliderUp}><IconContext.Provider value={{ color: "black"}}><AiFillCaretLeft/></IconContext.Provider></a>
                <a href="#" className="projectslider-content__project-rightbutton" onClick={moveSliderDown}><IconContext.Provider value={{ color: "black"}}><AiFillCaretRight/></IconContext.Provider></a>
                <div className="projectslider-content__project-container">
                    {status === "fetching" && <div id="spinner"></div>}
                    {status === "processed" && projects && projects.length > 0 && projects.map((project)=> <Project {...project} key={project.name} height={projectHeight} width={projectWidth}/>) }
                </div>
            </div>
            
        </div>
    )
}

export default ProjectSlider;