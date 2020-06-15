import React from 'react';
import LandingPreview from '../img/LandingPreview.png';
import Insight from '../img/Insight.png';
import Audience from '../img/Audience.png';
import Lifestyle from '../img/Lifestyle.png';
import Github from '../img/github.png';


export default function Landing() {
  return (
    <div className="Landing">
      <div className="Landing-header">
        <h1 className="Landing-h1">Social media research made easy</h1>
        <label className="Landing-h3">Analyze Facebook audiences with ease!</label>
        <a className="Landing-access" href="/access">GET ACCESS</a>
        <div className="Landing-preview-background">
          <img className="Landing-preview" src={LandingPreview}/>
        </div>
      </div>
      
      <div className="Landing-features">
        <h2 className="Landing-features-h2">Features:</h2>
        <div className="Landing-features-divs">
          <div className="Landing-features-single-div">
            <img className="Landing-features-icon" src={Insight}/>
            Get insights from the largest social media database in the world.
          </div>
          <div className="Landing-features-single-div">
          <img className="Landing-features-icon" src={Lifestyle}/>
            Explore Facebook's vast interest catalogue.
          </div>
          <div className="Landing-features-single-div">
          <img className="Landing-features-icon" src={Audience}/>
            Target your audience research by geolocation, age, and interest.
          </div>
        </div>
      </div>

      <div className="Landing-creators">
        <div className="Landing-titles">
          <span>Concept/Development:</span>
          <span>Development:</span>
          <span>Development:</span>
        </div>
        <div className="Landing-names">
          <span>Andrew Zapotochnyi</span>
          <span>Isabella Panagrosso</span>
          <span>Michael Matich </span>
        </div>
        <div className="Landing-github-bunch">
          <a href="https://github.com/AndrewZapotochnyi"><img className="Landing-github" src={Github}/></a>
          <a href="https://github.com/izzybella12"><img className="Landing-github" src={Github}/></a>
          <a href="https://github.com/matichmike"><img className="Landing-github" src={Github}/></a>
        </div>
      </div>
     
    </div>
  )
}