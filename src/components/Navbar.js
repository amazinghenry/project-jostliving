import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="container-fluid">
            <div className="nav-bar-group container">
            <h1 className="main-logo">JostLiving</h1>
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