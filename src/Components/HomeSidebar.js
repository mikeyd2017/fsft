import { Link } from "react-router-dom";
import {ImBooks} from 'react-icons/im';
import { IconContext } from "react-icons";
import { IoHome } from "react-icons/io5";
import {HiInformationCircle} from 'react-icons/hi';

export default function HomeSidebar() {
    return (
        <div className="home-content__sidebar-content">
                <ul className="home-content__sidebar-content__linklist">
                    <li><Link to="/home"><IconContext.Provider value={{ color: "white"}}><IoHome/></IconContext.Provider><span>Home</span></Link></li>
                    <li><Link to="/information"><IconContext.Provider value={{ color: "white"}}><HiInformationCircle/></IconContext.Provider><span>Information</span></Link></li>
                    <li><Link to="/project-slider"><IconContext.Provider value={{ color: "white"}}><ImBooks/></IconContext.Provider><span>Projects</span></Link></li>
                </ul>
        </div>
    );
}