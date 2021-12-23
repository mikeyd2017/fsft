
import HomeSidebar from './HomeSidebar';
import Information from './Information';
import ProjectSlider from './ProjectSlider';
import MobileMenu from './MobileMenu';
import {createUseStyles} from 'react-jss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function Home(props) {

    const useStylesFromThemeFunction = createUseStyles(theme => ({
        appBorderColor: {
            borderLeft: `7.5px solid ${theme.appColor}`,
            boxShadow: `inset 0 7.5px 0 ${theme.appColor}, inset 0 -15px 0px 0px ${theme.appColor}`
        },
        appColorInline: {
            color: `${theme.appColor}`
        },
        backgroundImageColor: {
            backgroundImage: `linear-gradient(-60deg, ${theme.backgroundColor} 50%, ${theme.darkBackgroundColor} 50%)`
        }
    }));

    const classes = useStylesFromThemeFunction(props);

    return (
        <>
            <div id='inDevelopment'><p>IN DEVELOPMENT</p></div>
            <div className={`bg ` + classes.backgroundImageColor}></div>
            <div className={`bg bg2 ` + classes.backgroundImageColor}></div>
            <div className={`bg bg3 ` + classes.backgroundImageColor}></div>
            
            <Router>
                <MobileMenu setAppColor={props.setAppColor} appColor={props.appColor} setAppColorOnHover={props.setAppColorOnHover} appColorOnHover={props.appColorOnHover} />

                <div className='home-content'>
                    <div className="sidebar-container">
                        <HomeSidebar setAppColor={props.setAppColor} appColor={props.appColor} setAppColorOnHover={props.setAppColorOnHover} appColorOnHover={props.appColorOnHover} />
                    </div>

                    <div className={`content ` + classes.appBorderColor}>
                        <Switch>
                            <Route exact path="/">

                            </Route>
                            <Route exact path="/information">
                                <Information />
                            </Route>
                            <Route exact path="/project-slider">
                                <ProjectSlider appColor={props.appColor}/>
                            </Route>
                        </Switch>
                    </div>
                    <div className="breadcrumbs">

                    </div>
                </div>
            </Router>
        </>
    );
}

export default Home;