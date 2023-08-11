import React, { Component } from 'react';
import Profile from "../components/Profile";
import Contact from "../components/Contact";
import About from "../components/About";
import Skills from "../components/Skills";
import Experiences from "../components/Experiences";
import Educations from "../components/Educations";
import Portfolios from "../components/Portfolios";

export default class Home extends Component {
  render() {
    return (
      <section>
        <div className='row'>
          <div className='col s12 m6 l4 light-grey darken-4'>
            <Profile />
            <Contact />
            <Skills />
          </div>
          <div className='col s12 m6 l8 white'>
            <About />
            <Educations />
            <Experiences />
            <Portfolios />
          </div>
        </div>
      </section>
    );
  }
}
