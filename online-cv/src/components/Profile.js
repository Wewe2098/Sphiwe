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
      </div>
    )
  }
}
