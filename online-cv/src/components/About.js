import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='card z-depth-0 hide-on-med-and-down pt'>
            <div className='card-content social'>
              <h2 className='grey-text text-darken-3'>
                <strong>Sphiwe Mkwatheni</strong>
              </h2>
              <h4 className='grey-text text-lighten-1'>Full Stack Developer</h4>
                <a href='https://www.linkedin.com/in/sphiwe-mkwatheni-a1952939?trk=contact-info' target='blank'>
                  <i className='fab fa-linkedin fa-2x'></i>
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
