import {NavLink} from "react-router-dom";
import '/src/assets/css/style.css'


const Menu = () => {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav  nav-item">
                    <header className="title">
                        My Blog
                    </header>
                    <li className="nav-link m-2">
                        <NavLink className="nav" to="/">Home</NavLink>
                    </li>
                    <li className="nav-link m-2">
                        <NavLink className="nav" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-link m-2">
                        <NavLink className="nav" to="/register">Register</NavLink>
                    </li>
                    <li className="nav-link m-2">
                        <NavLink className="nav" to="/blog">Create blog</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;