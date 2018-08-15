import React from "react";
import {Link} from "react-router-dom";

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <div className="text-center">
        <h1>
            <a href="/#/">Machine Vision Inventory</a>
        </h1>
        <h3>Sample</h3>
        <ul className="nav-menu">
            <li className="lead">
                <Link to="/inventory">Inventory</Link>
            </li>
            <li className="lead">
                <Link to="/devices">Devices</Link>
            </li>
        </ul>
    </div>
);
export default Header;
