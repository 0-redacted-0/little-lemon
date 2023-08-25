import footerImg from "../assets/restauranfood.jpg"
import {Link} from 'react-router-dom'

const Footer = () => {
    return(
        <div className="footer">
            <img src={footerImg}/>
            <ul>
                <li id="footer-heading">NAVIGATION LINKS</li>
                <Link to="/"><li>Home</li></Link>
                <Link to="/coming-soon"><li>About</li></Link>
                <Link to="/coming-soon"><li>Menu</li></Link>
                <Link to="/reserve"><li>Reservations</li></Link>
                <Link to="/coming-soon"><li>Order Online</li></Link>
                <Link to="/coming-soon"><li>Log In</li></Link>
            </ul>
            <ul>
                <li id="footer-heading">CONTACT US</li>
                <Link to="/coming-soon"><li>Address</li></Link>
                <Link to="/coming-soon"><li>Phone</li></Link>
                <Link to="/coming-soon"><li>Email</li></Link>
            </ul>
            <ul>
                <li id="footer-heading">SOCIALS</li>
                <Link to="/coming-soon"><li>Instagram</li></Link>
                <Link to="/coming-soon"><li>Twitter</li></Link>
                <Link to="/coming-soon"><li>Facebook</li></Link>
            </ul>
        </div>
    )
}

export default Footer