import React from 'react'
import stats from '../../assets/stats.jpg'
import './SectionsStats.css'
const SectionsStats = () => {
  return (
    <div className="sections-Stats" id="stats">
    <img src={stats} alt=""/>
    <div className="header">
        <h1>Our Awesome Stats</h1>
    </div>
        <div className="container">
                <div className="col">
                    <i className="far fa-user fa-2x fa-fw"></i>
                    <h1>150</h1>
                    <i><p>Clients</p></i>
                </div>
                <div className="col">
                    <i className="fas fa-code fa-2x fa-fw"></i>
                    <h1>135</h1>
                    <i><p>Projects</p></i>
                </div>
                <div className="col">
                    <i className="fas fa-globe-asia fa-2x fa-fw"></i>
                    <h1>50</h1>
                    <i><p>Countries</p></i>
                </div>
                <div className="col">
                    <i className="far fa-money-bill-alt fa-2x fa-fw"></i>
                    <h1>500</h1>
                    <i><p>Money</p></i>
                </div>
        </div>
</div>
  )
}

export default SectionsStats