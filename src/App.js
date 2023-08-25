import './App.css'
import './components/BookingForm.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Soon from './components/Soon'
import Reserve from './components/Reserve'
import Confirmed from './components/Confirmed'

import {Routes, Route} from 'react-router-dom'

import greek_salad from "./assets/greek_salad.jpg"
import bruchetta from "./assets/bruchetta.svg"
import lemon_dessert from "./assets/lemon_dessert.jpg"
import person from "./assets/person.png"

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
const loremSmall = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

const specials= [
    {name: "Greek salad", price: "$12.99",  description: lorem, img: greek_salad},
    {name: "Bruchetta", price: "$5.99",  description: lorem,  img: bruchetta},
    {name: "Lemon Dessert", price: "$4.99",  description: lorem,  img: lemon_dessert}
]

const testimonials = [
  {name: "John", rating:"9/10", img:person, review: loremSmall},
  {name: "Adam", rating:"10/10", img:person, review: loremSmall},
  {name: "Chris", rating:"8/10", img:person, review: loremSmall}
]

function App() {
  return (
    <div className="main">
      <Header/>
      <Routes>
        <Route path="/" element={<Main specials={specials} testimonials={testimonials}/>}/>
        <Route path="/reserve" element={<Reserve/>}/>
        <Route path="/coming-soon" element={<Soon/>}/>
        <Route path="/confirmed" element={<Confirmed/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
