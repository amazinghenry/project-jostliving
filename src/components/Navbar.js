import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="container-fluid">
            <div className="nav-bar-group container">
            <Link to="/" className="main-logo">JostLiving</Link>
            <div className="link-group">
                <Link to="/" className="link-item">Home</Link>
                <Link to="/about" className="link-item">About</Link>
                <Link to="/contact" className="link-item">Contact</Link>
            </div>
            </div>
        </nav>
     );
}
 
export default Navbar;