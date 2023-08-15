import mainLogo from '../logo.svg'

const Header = (props) => {
    return ( 
        <header className="container-fluid">
            <div className="container">
            <img src={mainLogo} alt="" className="header-logo" />
            <h1 className="header-title">Jost Living</h1>
            <p className="header-text">Providing property owners and guest a revolutionary customer service experience</p>
            </div>
        </header>
     );
}
 
export default Header;