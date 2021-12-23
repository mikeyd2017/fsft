import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { ImBooks } from 'react-icons/im';
import { IoHome } from "react-icons/io5";
import { HiInformationCircle } from 'react-icons/hi';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { Link } from "react-router-dom";
import { createUseStyles } from 'react-jss';
import { useState, useEffect } from 'react';
import { IconContext } from "react-icons";
import $ from 'jquery';

function MobileMenu(props) {
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
                color: `${theme.appColorOnHover}`
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
        $('#mobile-home-btn').removeClass();
        $('#mobile-project-btn').removeClass();
        $('#mobile-contact-btn').removeClass();
        $('#mobile-info-btn').removeClass();
    }

    const classes = useStylesFromThemeFunction(props);

    removeAllButtonColor();

    switch (props.appColorOnHover) {
        case red:
            if (currentPage != 2) {
                $('#mobile-project-btn').addClass(classes.appColorOnHover);
                iconColors.projectIconColor = red;
            }
            break;
        case blue:
            if (currentPage != 1) {
                $('#mobile-home-btn').addClass(classes.appColorOnHover);
                iconColors.homeIconColor = blue;
            }
            break;
        case green:
            if (currentPage != 3) {
                $('#mobile-contact-btn').addClass(classes.appColorOnHover);
                iconColors.contactIconColor = green
            }
            break;
        case '':

    }

    switch (currentPage) {
        case 1:
            $('#mobile-home-btn').addClass(classes.backgroundColor);
            break;
        case 2:
            $('#mobile-project-btn').addClass(classes.backgroundColor);
            break;
        case 3:
            $('#mobile-contact-btn').addClass(classes.backgroundColor);
            break;
        case 4:
            $('#mobile-info-btn').addClass(classes.backgroundColor);
            break;
    }

    useEffect(() => {
        $('#home-btn').addClass(classes.backgroundColor);
    }, []);

    function triggerPageSlide(e) {
        const slideDiv = e.target.closest('li').nextElementSibling;
        $(slideDiv).addClass(classes.linkSlideAnimation);
    }

    const [menuOpen, setMenuOpen] = useState(false);


    return (
            <div className='mobile'>
                <div className='menu'>                
                    <div className='mobile-links'>
                        <div className='mobile-icons' onClick={(e) => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>}
                        </div>
                        {menuOpen ?
                        <ul>
                            <li id='mobile-home-btn' onMouseEnter={() => { props.setAppColorOnHover(blue) }} onMouseLeave={() => { props.setAppColorOnHover('') }} onClick={(e) => { props.setAppColor(blue); setCurrentPage(1); triggerPageSlide(e); }}>
                                <Link to="/">
                                    <IconContext.Provider value={{ color: iconColors.homeIconColor }}>
                                        <IoHome />
                                    </IconContext.Provider>
                                </Link>
                            </li>
                            <li id='mobile-project-btn' onMouseEnter={() => { props.setAppColorOnHover(red) }} onMouseLeave={() => { props.setAppColorOnHover('') }} onClick={(e) => { props.setAppColor(red); setCurrentPage(2); triggerPageSlide(e); }}>
                                <Link to="/project-slider">
                                    <IconContext.Provider value={{ color: iconColors.projectIconColor }}>
                                        <ImBooks />
                                    </IconContext.Provider>
                                </Link>
                            </li>
                            <li id='mobile-contact-btn' onMouseEnter={() => { props.setAppColorOnHover(green) }} onMouseLeave={() => { props.setAppColorOnHover('') }} onClick={(e) => { props.setAppColor(green); setCurrentPage(3); triggerPageSlide(e); }}>
                                <Link to="/contact">
                                    <IconContext.Provider value={{ color: iconColors.contactIconColor }}>
                                        <RiContactsBook2Fill />
                                    </IconContext.Provider>
                                </Link>
                            </li>
                            <li>
                                <Link to="/information">
                                    <IconContext.Provider value={{ color: props.appColor }}>
                                        <HiInformationCircle />
                                    </IconContext.Provider>
                                </Link>
                            </li>
                        </ul>
                        : ''}
                    </div>
                </div>
            </div>
    );
}

export default MobileMenu;