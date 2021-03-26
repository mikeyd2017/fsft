import { Link } from "react-router-dom";
import {ImBooks} from 'react-icons/im';
import { IconContext } from "react-icons";
import { IoHome } from "react-icons/io5";
import {HiInformationCircle} from 'react-icons/hi';
import {RiContactsBook2Fill} from 'react-icons/ri';

export default function HomeSidebar() {
    return (
        <div className="home-content__sidebar-content">
           <div className="home-content__sidebar-content__portrait">
                
            </div>
            <ul className="home-content__sidebar-content__linklist">
                <Link to="/"><li><IconContext.Provider value={{ color: "#f3f3f3"}}><IoHome/></IconContext.Provider><span>Home</span></li></Link>
                <Link to="/project-slider"><li><IconContext.Provider value={{ color: "#f3f3f3"}}><ImBooks/></IconContext.Provider><span>Projects</span></li></Link>
                <Link to="/contact"><li><IconContext.Provider value={{ color: "#f3f3f3"}}><RiContactsBook2Fill/></IconContext.Provider><span>Contact</span></li></Link>
                <Link to="/information"><li><IconContext.Provider value={{ color: "#f3f3f3"}}><HiInformationCircle/></IconContext.Provider><span></span></li></Link>
            </ul>
            <div style={{ clear: 'both'}}></div>
        </div>
    );
}