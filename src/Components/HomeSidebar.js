import { Link } from "react-router-dom";
import { ImBooks } from 'react-icons/im';
import { IconContext } from "react-icons";
import { IoHome } from "react-icons/io5";
import { HiInformationCircle } from 'react-icons/hi';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { createUseStyles } from 'react-jss';
import { useState, useEffect } from 'react';
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
        },
        '@keyframes linkSlide': {
            from: { marginLeft: 0 },
            to: { marginLeft: 200 }
        },
        linkSlideAnimation: {
            animationName: '$linkSlide',
            zIndex: 1000
        },
    }));

    function removeAllButtonColor() {
        $('#home-btn').removeClass();
        $('#project-btn').removeClass();
        $('#contact-btn').removeClass();
        $('#info-btn').removeClass();
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

    function triggerPageSlide(e) {
        const slideDiv = e.target.closest('li').nextElementSibling;
        $(slideDiv).addClass(classes.linkSlideAnimation);
    }

    return (
        <div className="sidebar">
            <div className='portrait'>

            </div>
            <ul className="link-list">
                <Link to="/">
                    <li className="home-button" id='home-btn' onMouseEnter={() => { props.setAppColorOnHover(blue) }} onMouseLeave={() => { props.setAppColorOnHover('') }} onClick={(e) => { props.setAppColor(blue); setCurrentPage(1); triggerPageSlide(e); }}>
                        <div className="link-container"><IconContext.Provider value={{ color: iconColors.homeIconColor }}><IoHome /></IconContext.Provider>
                            <span>Home</span>
                        </div>
                    </li>
                    <div id='slideDiv'></div>
                </Link>
                <Link to="/project-slider">
                    <li className="project-button" id='project-btn' onMouseEnter={() => { props.setAppColorOnHover(red) }} onMouseLeave={() => { props.setAppColorOnHover('') }} onClick={(e) => { props.setAppColor(red); setCurrentPage(2); triggerPageSlide(e); }}>
                        <div className="link-container">
                            <IconContext.Provider value={{ color: iconColors.projectIconColor }}>
                                <ImBooks />
                            </IconContext.Provider>
                            <span>Projects</span>
                        </div>
                    </li>
                    <div id='slideDiv'></div>
                </Link>
                <Link to="/contact">
                    <li className="contact-button" id='contact-btn' onMouseEnter={() => { props.setAppColorOnHover(green) }} onMouseLeave={() => { props.setAppColorOnHover('') }} onClick={(e) => { props.setAppColor(green); setCurrentPage(3); triggerPageSlide(e); }}>
                        <div className="link-container">
                            <IconContext.Provider value={{ color: iconColors.contactIconColor }}>
                                <RiContactsBook2Fill />
                            </IconContext.Provider>
                            <span>Contact</span>
                        </div>
                    </li>
                    <div id='slideDiv'></div>
                </Link>
                <Link to="/information">
                    <li id='info-btn'>
                        <IconContext.Provider value={{ color: props.appColor }}>
                            <HiInformationCircle />
                        </IconContext.Provider>
                        <span>
                        </span>
                    </li>
                </Link>
            </ul>
            <div style={{ clear: 'both' }}></div>
        </div>
    );
}