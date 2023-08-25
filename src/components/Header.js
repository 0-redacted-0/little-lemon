import Nav from "./Nav"

const Header = () => {
    return (
        <>
            <head>
                <meta name="description" content="We are a family-owned Mediterranian restaurant, focused on traditional recipes served with a modern twist."/>
                <meta name="og:title" content="Little Lemon Restaurant"/>
                <meta name="og:description" content="We are a family-owned Mediterranian restaurant, focused on traditional recipes served with a modern twist."/>
                <meta name="og:image" content="./assets/logo_icon.png"/>
            </head>

            <img src="../assets/Logo.svg"/>
            
            <Nav/>
        </>
    )
}