import React from 'react'
import './HowItWorks.css'
import work from '../../assets/work-steps.png'
import work1 from '../../assets/work-steps-1.png'
import work2 from '../../assets/work-steps-2.png'
import work3 from '../../assets/work-steps-3.png'
import BottonHover from '../BottonHover/BottonHover'
const HowItWorks = () => {
  return (
    <div className="HOW-IT-WORKS" id="HOW-IT-WORKS" >
    <BottonHover>HOW IT WORKS?</BottonHover>
    <div className="sections-HOW-IT-WORKS">
        <div className="container">
            <div className="col">
                <img src={work} alt=""/>
            </div>
            <div className="col col-text">
                <div className="block">
                    <div className="image"><img src={work1} alt=""/></div>
                    <div className="text">
                        <h2>Business Analysis</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel</p>
                    </div>
                </div>
                <div className="block">
                    <div className="image"><img src={work2} alt=""/></div>
                    <div className="text">
                        <h2>Architecture</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel</p>
                    </div>
                </div>
                <div className="block">
                    <div className="image"><img src={work3} alt=""/></div>
                    <div className="text">
                        <h2>
                            Developement</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum recusandae debitis vel</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default HowItWorks