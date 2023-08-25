import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/coming-soon">ABOUT</Link></li>
            <li><Link to="/coming-soon">MENU</Link></li>
            <li><Link to="/reserve">RESERVATIONS</Link></li>
            <li><Link to="/coming-soon">ORDER ONLINE</Link></li>
            <li><Link to="/coming-soon">LOG IN</Link></li>
        </ul>
    )
}

export default Nav