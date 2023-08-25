import Nav from "./Nav"
// import "../index"
import logo from '../assets/logo.svg'

const Header = () => {
    return (
        <div className="header home-element">
            <head>
                <meta name="description" content="We are a family-owned Mediterranian restaurant, focused on traditional recipes served with a modern twist."/>
                <meta name="og:title" content="Little Lemon Restaurant"/>
                <meta name="og:description" content="We are a family-owned Mediterranian restaurant, focused on traditional recipes served with a modern twist."/>
                <meta name="og:image" content="./assets/logo_icon.png"/>
                <link rel="icon" href="../assets/logo_icon.png" />

                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;700&family=Markazi+Text:wght@400;500;700&display=swap" rel="stylesheet"/>

            </head>

            <img src={logo} className="nav-logo"/>

            <Nav/>
        </div>
    )
}

export default Header