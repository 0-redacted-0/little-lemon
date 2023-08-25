import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const BookingForm = (props) => {
<script src="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"></script>

    // const [times, dispatch] = useReducer(reducer, {});

    // const reducer = (times, action) => {
    //     switch(action.type) {
    //         case 'initialize':
    //             const defaultTimes = ["7:00pm", "7:30pm", "8:00pm", "8:30pm", "9:00pm", "9:30pm"]
    //             return times[date] = defaultTimes

            
    //     }
    // }

    // const initializeTimes = () => {
    //     dispatch({type:'initialize'})
    // }

    // const updateTimes = (date) => {

    // }

    const times = ["7:00pm", "7:30pm", "8:00pm", "8:30pm", "9:00pm", "9:30pm"]

    const [date, setDate] = useState({ value: "", isTouched: false });
    const [time, setTime] = useState({ value: "", isTouched: false });
    const [guests, setGuests] = useState({ value: "", isTouched: false });
    const [occasion, setOccasion] = useState("occasion");



    // useEffect(() => {
    //     let [realTimes] = fetchAPI(new Date())
    //     console.log(realTimes)
    //   }, [date]);

    const getIsFormValid = () => {
      // Implement this function
        if (date.value && time.value && guests.value && guests.value < 9 && guests.value > 0) 
        {
            return true
        }
        return false;
        };

    const clearForm = () => {
      // Implement this function
      setDate("")
      setTime("")
      setGuests("")
      setOccasion("occasion")
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault()
    //   alert("Booking Confirmed");
      clearForm();
      navigate('/confirmed');
    };

    const BlankErrorMessage = () => {
        return (
          <p className="FieldError">Input required</p>
        );
      };

    const GuestsErrorMessage = () => {
        return (
          <p className="FieldError">Number of guests must be between 1 and 8</p>
        );
      };

    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <fieldset>

            <div className="Field">
              <label>Date <sup>*</sup></label>
              <input type="date" placeholder="Date" value={date.value} onChange={e=>setDate({ ...date, value: e.target.value })} onBlur={e => { setDate({ ...date, isTouched: true })}}/>
              { !date.value.length && date.isTouched ? <BlankErrorMessage /> : null }
            </div>


            <div className="Field">
              <label>Time <sup>*</sup></label>
              <select value={time.value} onChange={e=>setTime({ ...time, value: e.target.value })} onBlur={e => { setTime({ ...time, isTouched: true })}}>
                <option value="0">Choose an option</option>
                {times.map(time => {
                    return (
                        <option value={time}>{time}</option>
                    )
                })}
              </select>
              { time.value==="0" && time.isTouched ? <BlankErrorMessage /> : null }
            </div>

            <div className="Field">
              <label>Number of Guests <sup>*</sup></label>
              <input type ="number" min="1" max="10" placeholder="Number of Guests" value={guests.value} onChange={e=>setGuests({ ...guests, value: e.target.value })} onBlur={e => { setGuests({ ...guests, isTouched: true })}}/>
              { !guests.value.length && guests.isTouched ? <BlankErrorMessage /> : null }
              { guests.isTouched && (guests.value > 8)? <GuestsErrorMessage /> : null }
            </div>

            <div className="Field">
              <label>
                Are you celebrating a special occasion?
              </label>
              <select placeholder="Date" value={occasion.value} onChange={e=>setOccasion(e.target.value)}>
                <option value="occasion">None</option>
                <option value="birthday">Birthday</option>
                <option value="anniverasy">Anniversary</option>
              </select>
            </div>

            <button aria-label="On Click" type="submit" disabled={!getIsFormValid()}>
              Book
            </button>

          </fieldset>
        </form>
      </div>
    );
}

export default BookingForm