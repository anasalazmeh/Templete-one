import React from 'react'
import discount1 from '../../assets/discount-background1.jpg'
import discount2 from '../../assets/discount.png'
import './Discount.css'
const Discount = () => {
  return (
    <div className="discount" id="discount">
    <div className="image">
    <img src={discount1} alt="" className="background"/>
      <div className="content">
        <h1>We Have A Discount</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi asperiores consectetur, recusandae
          ratione provident necessitatibus, cumque delectus commodi fuga praesentium beatae. Totam vel similique
          laborum dicta aperiam odit doloribus corporis.
        </p>
        <img src={discount2} alt=""/>
      </div>
    </div>
    <div className="form">
      <div className="content">
        <h1>Request A Discount</h1>
        <form action="">
        <div className="forms">
            <input className="input" type="text" placeholder="Your Name" name="name"/>
            <input className="input" type="email" placeholder="Your Email" name="email"/>
            <input className="input" type="text" placeholder="Your Phone" name="mobile"/>
            <textarea className="input" placeholder="Tell Us About Your Needs" name="message"></textarea>
            <input type="submit" value="Send"/>
        </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Discount