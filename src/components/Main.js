import homeImg from "../assets/restaurant.jpg"
import basket from "../assets/basket.svg"
import aboutImg from "../assets/owners.jpg"
import {Link} from 'react-router-dom'

const Main = (props) => {
    return (
        <div className="main">
            <div className="hero">
                <div className="info">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family-owned Mediterranian restaurant, focused </p>
                    <p>on traditional recipes served with a modern twist.</p>
                    <button><Link to="/reserve">Reserve a Table</Link></button>
                </div>
                <img src={homeImg}/>
            </div>

            <div className="highlights">
                <div className="heading">
                    <h1>This week's specials!</h1>
                    <button><Link to="/coming-soon">Online Menu</Link></button>
                </div>
                <div className="specials">
                    {props.specials.map(special => {
                        return (
                            <div className="specials-card">
                                <img src={special.img}/>
                                <div className="card-heading">
                                    <h2>{special.name}</h2>
                                    <h3>{special.price}</h3>
                                </div>
                                <p>{special.description}</p>
                                <Link to="coming-soon">
                                    <div className="card-order">
                                        <p>Order a delivery</p>
                                        <img src={basket}/>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="testimonials">
                <h1 className="testimonials-heading">Testimonials</h1>
                <div className="testimonials-cards">
                    {props.testimonials.map(testimonial => {
                        return(
                            <div className="testimonial-card">
                                <div className="person">
                                    <img src={testimonial.img}/>
                                    <h3>{testimonial.name}</h3>
                                </div>
                                <h4>{testimonial.rating}</h4>
                                <p>{testimonial.review}</p>
                            </div>
                        )
                    })}
                </div>
            
            </div>

            <div className="aboutUs">
                <div className="info">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <img src={aboutImg}/>
            </div>
        </div>
    )
}

export default Main