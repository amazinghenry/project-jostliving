const Footer = () => {
    const thisYear = new Date()

    return ( 
        <footer className="container-fluid">
            Copyright © {thisYear.getFullYear()} JostLiving. All Rights Reserved 
        </footer>
     );
}
 
export default Footer;