import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import Calories from "../../assets/calories.png"

const Hero = () => {
  return (
      <div className="hero">
          <div className="left-h">
              <Header/>

              <div className="the-best-ad">
                  <div> </div>
                  <span>The best fitness club in town</span>
                
              </div>
              {/*-- Hero Heading--*/}

              <div className="hero-text">
                  <div>
                      <span className='stroke-text'>Shape </span>
                      <span>Your</span>
                  </div>
                  <div><span>Ideal Body</span></div>
                  <div>
                      <span>
                        In here we will help you to shape and build
                         your body and live your life to  the fulliest.
                      </span>
                    </div>
              </div>

              {/*-- figures--*/}
              <div className="figures">
                  <div>
                      <span>+140</span>
                      <span>expert coachs</span>
                  </div>
                  <div>
                      <span>+978</span>
                      <span>members joined</span>
                  </div>
                  <div>
                      <span>+50</span>
                      <span>fitness programs</span>
                  </div>
              </div>

              {/*-- Hero  ---*/}
              <div className="hero-buttons">
                  <button className="btn"> Get Started</button>
                  <button className="btn"> Get Started</button>
            </div>

          </div>
        <div className="right-h">

          <button className="btn">Join Now</button>

          <div className="heart-rate">
              <img src={require('../../assets/heart.png')} alt="" />
              <span>Heart Rate </span>
              <span>116 bmp</span>
            </div>
              
           {/*  Hero Images */}

              <img src={require('../../assets/hero_image.png')} alt="" className="hero-image" />
              <img src={require('../../assets/hero_image_back.png')} alt="" className="hero-image-back" />

              {/*  Calories */}

            <div className="calories">
                  <img src={require('../../assets/calories.png')} alt="" />
                <div>
                  <span>Calories Burned</span>
                  <span>200 kcal</span>
              </div>
            </div>
              
        </div>
    </div>
  )
}

export default Hero