import React, { Component } from 'react'

export default class Experiences extends Component {
  render() {
    return (
      <div>
        <div className='card z-depth-0'>
          <div className='card-content'>
              <h6>
                <strong>
                  <i className='fas fa-tools'></i> EXPERIENCE
                </strong>
              </h6>
              <hr />
              <div className='row mt'>
                <div className='col s12'>
                  <blockquote className='content-right'>
                    <h6 className='no-pad mt-bottom'>
                      <strong>FULL STACK DEVELOPER</strong>
                      <span>2023 - Till Date</span>
                    </h6>
                    <p className='pt'>
                      Still in training and studing
                    </p>
                  </blockquote>
                </div>
            </div>
            <div className='row mt'>
                <div className='col s12'>
                  <blockquote className='content-right'>
                    <h6 className='no-pad mt-bottom'>
                      <strong>DIGITAL DESIGNER</strong>
                      <span>2018 - Till Date</span>
                    </h6>
                    <p className='pt'>
                      I design banners, websites and logo's
                    </p>
                  </blockquote>
                </div>
            </div>
        </div>
        </div>
      </div>
    )
  }
}
