import { NavLink } from "react-router-dom";
import "./Header.css"
const Navbar = () => {
    return (
        <div>
            <nav className="all-link">
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to='/users'> Users</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/'>Home</NavLink>
                
            </nav>
        </div>
    );
};

export default Navbar;