import React, { Component } from 'react'
import Profile from "../components/Profile";
import Contact from "../components/Contact";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experiences";
import Education from "../components/Educations";
import Portfolio from "../components/Portfolios";

export default class Home extends Component {
  render() {
    return (
      <section>
        <div className='container'>
            <div className='row'>
                <div className='col s12 m6 l4 light-grey darken-4' >
                </div>
                <div className='col s12 m12 l9 white'>
                </div>
            </div>
        </div>
      </section>
    )
  }
}
