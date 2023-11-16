import React from 'react'
import './Services.css'
import BottonHover from '../BottonHover/BottonHover'
const Services = () => {
  return (
    <div className="SERVICES" id="SERVICES" >
    <BottonHover>SERVICES</BottonHover>
    <div className="sections-SERVICES">
        <div className="container">
            <div className="col">
                <i className="fas fa-user-shield fa-4x"></i>
                <h2>Security</h2>
                <div className="block-footer">
                    <a href="">Details</a>
                </div>
            </div>
            <div className="col">
                <i className="fas fa-tools fa-4x"></i>
                <h2>Fixing Issues</h2>
                <div className="block-footer">
                    <a href="">Details</a>
                </div>
            </div>
            <div className="col">
                <i className="fas fa-map-marked-alt fa-4x"></i>
                <h2>Location</h2>
                <div className="block-footer">
                    <a href="">Details</a>
                </div>
            </div>
            <div className="col">
                <i className="fas fa-laptop-code fa-4x"></i>
                <h2>Coding</h2>
                <div className="block-footer">
                    <a href="">Details</a>
                </div>
            </div>
            <div className="col">
                <i className="fas fa-palette fa-4x"></i>
                <h2>Security</h2>
                <div className="block-footer">
                    <a href="">Details</a>
                </div>
            </div>
            <div className="col">
                <i className="fas fa-bullhorn fa-4x"></i>
                <h2>Marketing</h2>
                <div className="block-footer">
                    <a href="">Details</a>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Services