
import HomeSidebar from './HomeSidebar';
import Information from './Information';
import ProjectSlider from './ProjectSlider';
import {createUseStyles} from 'react-jss';
import {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function Home(props) {

    const useStylesFromThemeFunction = createUseStyles(theme => ({
        appBorderColor: {
            borderLeft: `5px solid ${theme.appColor}`,
            boxShadow: `inset 0 7.5px 0 ${theme.appColor}, inset 0 -20px 0px 0px ${theme.appColor}`
        },
        appColorInline: {
            color: `${theme.appColor}`
        }
    }));

    
    const classes = useStylesFromThemeFunction(props);

    return (
            <Router>
                <div className='home-content'>
                    <div className="home-content__sidebar">
                        <HomeSidebar setAppColor={props.setAppColor} appColor={props.appColor} />
                    </div>

                    <div className={`home-content__content ` + classes.appBorderColor}>
                    <div className="bg"></div>
                    <div className="bg bg2"></div>
                    <div className="bg bg3"></div>
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
                    <div className="home-content__breadcrumbs">

                    </div>
                </div>
            </Router>

    );
}

export default Home;