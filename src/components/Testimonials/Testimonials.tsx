import React from 'react'
import './Testimonials.css';

import BottonHover from '../BottonHover/BottonHover';
import BoxTestimonials from './Box-testimonials/BoxTestimonials';
import { dataTestimonials } from '../../Data';
const Testimonials = () => {
    const data=dataTestimonials
  return (
    <div className="TESTIMONIALS" id="TESTIMONIALS" >
    <BottonHover>TESTIMONIALS</BottonHover>
    <div className="sections-TESTIMONIALS">
        <div className="container">
            {data.map((item,index)=><BoxTestimonials image={item.image} countStars={item.countstars} key={index} />)}
        </div>
    </div>
</div>
  )
}

export default Testimonials