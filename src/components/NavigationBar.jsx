import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
    return ( 
        <nav>
            <ul>
                {/* Use NavLink for active route highlighting */}
                <li>MoviesDB</li>
                <li><Link to="/films" activeClassName="active">Movies</Link></li>
                <li><Link to="/wishlist" activeClassName="active">Wishlist</Link></li>
            </ul>
        </nav>
    );
}
 
export default NavigationBar;
