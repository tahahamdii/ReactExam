import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
    return ( 
        <nav>
            <ul>
                <li><Link  > Accueil</Link ></li>
                <li><Link  > Films</Link ></li>
            </ul>
        </nav>
     );
}
 
export default NavigationBar;