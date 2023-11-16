import React, { useState } from "react";
import "./Topvideos.css";
import video from "../../assets/video-preview.jpg";
import { dataVidoe } from "../../Data";
import BoxSelect from "./BoxSelect/BoxSelect";
const Topvideos = () => {
  const [select, setselect] = useState(0);
  const video = dataVidoe;
  const src=video.find((item,index)=>index==select)
  return (
    <div className="TOP-VIDEOS" id="TOP-VIDEOS">
      <div className="sections">
        <div className="container">
          <div className="block">TOP VIDEOS</div>
        </div>
      </div>
      <div className="sections-TOP-VIDEOS">
        <div className="container">
          <div className="container1">
            <div className="col-block">
              <div className="block-header">
                <h2>Top Videos</h2>
                <div className="icon">
                  {" "}
                  <i className="fas fa-random"></i>
                </div>
              </div>
              {/* <div className="block">
                            How To Create Sub Domain
                            <p>05:18</p>
                        </div>
                        <div className="block">
                            Playing With The DNS
                            <p>03:18</p>
                        </div>
                        <div className="block">
                            Everything About The Virtual Hosts
                            <p>05:25</p>
                        </div>
                        <div className="block">
                            How To Monitor Your Website
                            <p>04:16</p>
                        </div>
                        <div className="block">
                            Uncharted Beating The Last Boss
                            <p>07:48</p>
                        </div>
                        <div className="block">
                            Ys Oath In Felghana Overview
                            <p>03:12</p>
                        </div>
                        <div className="block">
                            Ys Series All Games Ending
                            <p>08:10</p>
                        </div> */}
              {video.map((item, index) => (
                <BoxSelect
                  address={item.address}
                  date={item.date}
                  active={select == index ? true : false}
                  click={() => setselect(index)}
                />
              ))}
            </div>
            <div className="col-img">
              <img src={src?.video} alt="" />
              <div className="text">Everything About The Virtual Hosts</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topvideos;
