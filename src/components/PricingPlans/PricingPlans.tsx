import React from 'react'
import './PricingPlans.css'
import basic from '../../assets/hosting-basic.png'
import advanced from '../../assets/hosting-advanced.png'
import professional from '../../assets/hosting-professional.png'
import BottonHover from '../BottonHover/BottonHover'
import { dataPricing } from '../../Data'
import CardPlans from './CardPlans/CardPlans'
const PricingPlans = () => {
    const data=dataPricing
  return (
    <div className="PRICING-PLANS" id="PRICING-PLANS" >
    <BottonHover>PRICING PLANS</BottonHover>
    <div className="sections-PRICING-PLANS">
            <div className="container">
                {/* <div className="col active">
                    <div className="most">Most Popular</div>
                    <div className="icon">
                        <h2>Basic</h2>
                        <img src={basic} alt=""/>
                        <h1>$15</h1>
                        <p>Per Month</p>
                    </div>
                    <div className="text">
                        <div className="block">
                            <i className="fa-solid fa-check"></i> 10GB HDD Space
                        </div>
                        <div className="block">
                            <i className="fa-solid fa-check"></i> 5 Email Addresses
                        </div>
                        <div className="block">
                            <i className="fa-solid fa-check"></i> 2 Subdomains
                        </div>
                        <div className="block">
                            <i className="fa-solid fa-check"></i> 4 Databases
                        </div>
                        <div className="block">
                            <i className="fa-solid fa-check"></i> Basic Support
                        </div>
                    </div>
                    <button>Choose Plan</button>
                </div>
                <div className="col">
                    <div className="most">Most Popular</div>
                    <div className="icon">
                        <h2>Advanced</h2>
                        <img src={advanced} alt=""/>
                        <h1>$25</h1>
                        <p>Per Month</p>
                    </div>
                    <div className="text">
                            <i className="fa-solid fa-check"></i> 20GB HDD Space
                       
                            <i className="fa-solid fa-check"></i> 10 Email Addresses
                        
                        
                            <i className="fa-solid fa-check"></i> 5 Subdomains
                      
                        <div className="block">
                            <i className="fa-solid fa-check"></i> 8 Databases
                        </div>
                        <div className="block">
                            <i className="fa-solid fa-check"></i> Advanced Support
                        </div>
                    </div>
                    <button>Choose Plan</button>
                </div>
                <div className="col">
                    <div className="most">Most Popular</div>
                    <div className="icon">
                        <h2>Professional</h2>
                        <img src={professional} alt=""/>
                        <h1>$45</h1>
                        <p>Per Month</p>
                    </div>
                    <div className="text">
                        <div className="block">
                            <i className="fa-solid fa-check"></i> 10GB HDD Space
                        </div>
                        <div className="block">
                            <i className="fa-solid fa-check"></i> 20Email Addresses
                        </div>
                        <div className="block">
                            <i className="fa-solid fa-check"></i> 10Subdomains
                        </div>
                        <div className="block">
                            <i className="fa-solid fa-check"></i> 20 Databases
                        </div>
                        <div className="block">
                            <i className="fa-solid fa-check"></i> Professional Support
                        </div>
                    </div>
                    <button>Choose Plan</button>
                </div> */}
                {data.map(data=><CardPlans data={data}/>)}
            </div>
    </div>
</div>
  )
}

export default PricingPlans