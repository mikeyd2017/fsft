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

    const iconColors = {
        homeIconColor: '#f3f3f3',
        projectIconColor: '#f3f3f3',
        contactIconColor: '#f3f3f3',
        informationIconColor: '#f3f3f3'
    }

    const [currentPage, setCurrentPage] = useState(1);

    const useStylesFromThemeFunction = createUseStyles(theme => ({
        backgroundColor: {
            backgroundColor: `${theme.appColor}`
        },
        appColorOnHover: {
            '&:hover': {
                color: `${theme.appColorOnHover}`,
                boxShadow: `inset 3.5px 0px 0 ${theme.appColorOnHover}`,
                fontWeight: '600 !important'
            }
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

    switch (props.appColorOnHover) {
        case red:
            if (currentPage != 2) {
                $('#project-btn').addClass(classes.appColorOnHover);
                iconColors.projectIconColor = red;
            }
            break;
        case blue:
            if (currentPage != 1) {
                $('#home-btn').addClass(classes.appColorOnHover);
                iconColors.homeIconColor = blue;
            }
            break;
        case green:
            if (currentPage != 3) {
                $('#contact-btn').addClass(classes.appColorOnHover);
                iconColors.contactIconColor = green
            }
            break;
        case '':

    }

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
                <Link to="/"><li className="home-content__sidebar-content__linklist-homeButton" id='home-btn' onMouseEnter={() => {props.setAppColorOnHover(blue)}} onMouseLeave={() => {props.setAppColorOnHover('')}} onClick={() => {props.setAppColor(blue); setCurrentPage(1);}}><IconContext.Provider value={{ color: iconColors.homeIconColor}}><IoHome/></IconContext.Provider><span>Home</span></li></Link>
                <Link to="/project-slider"><li className="home-content__sidebar-content__linklist-projectButton" id='project-btn' onMouseEnter={() => {props.setAppColorOnHover(red)}} onMouseLeave={() => {props.setAppColorOnHover('')}} onClick={() => {props.setAppColor(red); setCurrentPage(2);}}><IconContext.Provider value={{ color: iconColors.projectIconColor}}><ImBooks/></IconContext.Provider><span>Projects</span></li></Link>
                <Link to="/contact"><li className="home-content__sidebar-content__linklist-contactButton" id='contact-btn' onMouseEnter={() => {props.setAppColorOnHover(green)}} onMouseLeave={() => {props.setAppColorOnHover('')}} onClick={() => {props.setAppColor(green); setCurrentPage(3);}}><IconContext.Provider value={{ color: iconColors.contactIconColor}}><RiContactsBook2Fill/></IconContext.Provider><span>Contact</span></li></Link>
                <Link to="/information"><li id='info-btn'><IconContext.Provider value={{ color: props.appColor}}><HiInformationCircle/></IconContext.Provider><span></span></li></Link>
            </ul>
            <div style={{ clear: 'both'}}></div>
        </div>
    );
}