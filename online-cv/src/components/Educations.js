import React, { Component } from 'react';

export default class Educations extends Component {
  render() {
    return (
      <div>
        <div className='card z-depth-0'>
          <div className='card-content'>
            <h6>
              <strong>
                <i className='fas fa-graduation-cap'></i> EDUCATION
              </strong>
            </h6>
            <hr />
            <div className='row mt'>
              <div className='col s12'>
                <blockquote className='left-align'>
                  <h6 className='no-pad mt-bottom'>
                    <strong>FULL STACK DEVELOPER</strong>
                    <span>2023 - Present</span>
                  </h6>
                  <p className='pt'>Still in training and studying</p>
                </blockquote>
              </div>
            </div>
            <div className='row mt'>
              <div className='col s12'>
                <blockquote className='left-align'>
                  <h6 className='no-pad mt-bottom'>
                    <strong>DTP Publication</strong>
                    <span>2018</span>
                  </h6>
                  <p className='pt'>Vaga</p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}