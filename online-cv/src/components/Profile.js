import React, { Component } from 'react'
import ImgProfile from "../images/ProfilePic.jpg";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className='avartarImg'>
          <img className='circle responsive-img' src={ImgProfile} alt='Sphiwe Mkwatheni' />
        </div>
        <div className='card light-blue darken-4 z-depth-0 hide-on-large-only'>
            <div className='card-content center social'>
                <h2 className='grey-text text-lighten-3'>
                  <strong>Sphiwe Mkwatheni</strong>
                </h2>
                <h4 className='grey-text text-lighten-1'>Full Stack Developer</h4>
                <a href='https://www.linkedin.com/in/sphiwe-mkwatheni-a1952939?trk=contact-info' target='blank'>
                  <i className='fab fa-linkedin-square fa-2x'></i>
                </a>
                <a href='https://github.com/Wewe2098/Sphiwe' target='blank'>
                  <i className='fab fa-github-square fa-2x'></i>
                </a>
            </div>
        </div>
        <div className='card light-blue darken-4 z-depth-0'>
            <div className='card-content'>
                <h6 className='white-text'>
                  <strong>#PROFILE</strong>
                </h6>
                <p className='grey-text text-lighten-3 pt'>
                I am a 37-year-old professional with a passion for design and web development. With a creative mindset and self-motivated nature, I thrive on bringing innovative ideas to life. My ambition and goal-oriented approach drive me to continually push my limits and exceed expectations. I'm no stranger to handling pressure; in fact, I thrive under it, using it as a catalyst for delivering my best work
                </p>
            </div>
        </div>
      </div>
    )
  }
}
