import { Link } from "react-router-dom";
import {ImBooks} from 'react-icons/im';
import { IconContext } from "react-icons";
import { IoHome } from "react-icons/io5";
import {HiInformationCircle} from 'react-icons/hi';
import {RiContactsBook2Fill} from 'react-icons/ri';
import {createUseStyles} from 'react-jss';
import {useState, useEffect} from 'react';
import $ from 'jquery';


export default function HomeSidebar(props) {
    const blue = '#3E96FD';
    const red = '#e5383b';
    const green = '#76c893';

    const [currentPage, setCurrentPage] = useState(1);

    const useStylesFromThemeFunction = createUseStyles(theme => ({
        backgroundColor: {
            backgroundColor: `${theme.appColor}`
        }
    }));

    function removeAllButtonColor() {
        $('#home-btn').removeClass();
        $('#project-btn').removeClass();
        $('#contact-btn').removeClass();
        $('#info-btn').removeClass();
        $('#home-btn').addClass('home-content__sidebar-content__linklist-homeButton');
        $('#project-btn').addClass('home-content__sidebar-content__linklist-projectButton');
        $('#contact-btn').addClass('home-content__sidebar-content__linklist-contactButton');
        $('#info-btn').addClass('home-content__sidebar-content__linklist-informationButton');

    }

    const classes = useStylesFromThemeFunction(props);

    removeAllButtonColor();
    switch (currentPage) {
        case 1:
            $('#home-btn').addClass(classes.backgroundColor);
            break;
        case 2:
            $('#project-btn').addClass(classes.backgroundColor);
            break;
        case 3:
            $('#contact-btn').addClass(classes.backgroundColor);
            break;
        case 4:
            $('#info-btn').addClass(classes.backgroundColor);
            break;
    }

    useEffect(() => {
        $('#home-btn').addClass(classes.backgroundColor);
    }, []);

    return (
        <div className="home-content__sidebar-content">
           <div className='home-content__sidebar-content__portrait'>
                
            </div>
            <ul className="home-content__sidebar-content__linklist">
                <Link to="/"><li className="home-content__sidebar-content__linklist-homeButton" id='home-btn' onClick={() => {props.setAppColor(blue); setCurrentPage(1);}}><IconContext.Provider value={{ color: "#f3f3f3"}}><IoHome/></IconContext.Provider><span>Home</span></li></Link>
                <Link to="/project-slider"><li className="home-content__sidebar-content__linklist-projectButton" id='project-btn' onClick={() => {props.setAppColor(red); setCurrentPage(2);}}><IconContext.Provider value={{ color: "#f3f3f3"}}><ImBooks/></IconContext.Provider><span>Projects</span></li></Link>
                <Link to="/contact"><li className="home-content__sidebar-content__linklist-contactButton" id='contact-btn' onClick={() => {props.setAppColor(green); setCurrentPage(3);}}><IconContext.Provider value={{ color: "#f3f3f3"}}><RiContactsBook2Fill/></IconContext.Provider><span>Contact</span></li></Link>
                <Link to="/information"><li id='info-btn'><IconContext.Provider value={{ color: props.appColor}}><HiInformationCircle/></IconContext.Provider><span></span></li></Link>
            </ul>
            <div style={{ clear: 'both'}}></div>
        </div>
    );
}