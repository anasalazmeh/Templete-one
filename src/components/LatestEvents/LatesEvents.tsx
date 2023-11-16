import React from 'react'
import './LatesEvents.css'
import event from '../../assets/events.png'
import BottonHover from '../BottonHover/BottonHover'
const LatesEvents = () => {
  return (
    <div className="LATEST-EVENTS" id="LATEST-EVENTS" >
    <BottonHover>LATEST EVENTS</BottonHover>
    <div className="sections-LATEST-EVENTS">
        <div className="container">
            <div className="col">
                <img src={event} alt=""/>
            </div>
            <div className="col">
                <div className="forms">
                    <div className="form">
                        <span className="time">79</span>
                        <span className="button">Days</span>
                    </div>
                    <div className="form">
                        <span className="time">79</span>
                        <span className="button">Hours</span>
                    </div>
                    <div className="form">
                        <span className="time">79</span>
                        <span className="button">Minutes</span>
                    </div>
                    <div className="form">
                        <span className="time">79</span>
                        <span className="button">Seconds</span>
                    </div>
                </div>
                <div className="text">
                    <h1>Tech Masters Event 2021</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero tenetur doloremque iusto ut adipisci quam ratione aliquam excepturi nulla in harum, veritatis porro</p>
                </div>
            </div>
        </div>
        <div className="box-email">
            <div className="email">
                <input type="text" placeholder="Enter Your Email"/>
                <button>Subscribe</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default LatesEvents