import { Link } from "react-router-dom";
import {ImBooks} from 'react-icons/im';
import { IconContext } from "react-icons";
import { IoHome } from "react-icons/io5";
import {HiInformationCircle} from 'react-icons/hi';

export default function HomeSidebar() {
    return (
        <div className="home-content__sidebar-content">
                <ul className="home-content__sidebar-linklist">
                    <li><Link to="/home"><IconContext.Provider value={{ color: "white"}}><IoHome/></IconContext.Provider>Home</Link></li>
                    <li><Link to="/information"><IconContext.Provider value={{ color: "white"}}><HiInformationCircle/></IconContext.Provider>Information</Link></li>
                    <li><Link to="/project-slider"><IconContext.Provider value={{ color: "white"}}><ImBooks/></IconContext.Provider>Projects</Link></li>
                </ul>
        </div>
    );
}