import React from 'react';
import {render} from 'react-dom';

class Resume extends React.Component {
  render() {
    return (

      <aside id="resume">
        <h1>Resume</h1>

        <header>
          <h2>Karen Burgos</h2>
          <address>
            <a href="tel:3055555555">(305) 555-5555</a><br/>
            <a href="mailto:kburgos@alumni.ufl.edu">kburgos@alumni.ufl.edu</a><br/>
            <a href="http://www.karenburgos.com" rel="nofollow">{`http://www.karenburgos.com`}</a><br/>
            18546 NW 5 ST<br/>
            Miami, FL<br/>
            United States of America
          </address>
        </header>

        <ol>
          <li>
            <h3>Technical Skills</h3>
            <ul>
              <li>Web development: HTML, CSS, Javascript, ReactJS, Ruby</li>
              <li>Other: C, SQL, PHP</li>
            </ul>
            <p>I have been using HTML and CSS since 2008. I have been using C, SQL, and PHP since 2017. I have been using Javascript, React, and Ruby since 2018.</p>
          </li>
          <li><h3>Experience</h3>
              <ul><h4>Account Manager, Hotel Connections - <small>2016-2018</small></h4>
                <li>Communicated daily with client to ensure SLAs were met</li>
                <li>Updated databases to ensure quality of service</li>
                <li>Quality assurance for CSUI software</li>
              </ul>
              <ul><h4>Researcher, University of Florida - <small>2015-2016</small></h4>
                <li>Met bi-weekly with team to discuss division of research responsibilities</li>
                <li>Used FLeX software to handle database of Timucua lexicon</li>
              </ul>
            </li>


          </ol>

        </aside>




    )
  }
};

export default Resume;
