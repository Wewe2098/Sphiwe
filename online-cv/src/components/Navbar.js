import React, { Component } from 'react'
import {HashLink as Link} from 'react-router-hash-link';

class Navbar extends Component {
  render() {
    return (
      <div className='light-blue darken-4'>
        <div className='container'>
            <div className='nav-wrapper'>
                <Link to='/' className='brand-logo'>
                    CV
                </Link>
                <Link to='/' data-target='side-nav' className='sidenav-trigger'>
                    <i className='meterial-icons'>menu</i>
                </Link>
            </div>
        </div>
      </div>
    )
  }
}

export default Navbar;
