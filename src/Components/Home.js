import Information from '../Components/Information';
import ProjectSlider from '../Components/ProjectSlider';
import HomeSidebar from '../Components/HomeSidebar';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function Home() {
    
    return (
        <Router>
            <div className="home-content">
                <div className="home-content__sidebar">
                    <HomeSidebar />
                </div>

                <div className="home-content__content">
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
                            <ProjectSlider />
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