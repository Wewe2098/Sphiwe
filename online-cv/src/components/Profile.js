import React, { Component } from 'react'
import ImgProfile from "../components/images/ProfilePic.jpg";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className='avartarImg'>
          <img className='circle responsive-img' src={ImgProfile} alt='Sphiwe Mkwatheni' />
        </div>
      </div>
    )
  }
}
