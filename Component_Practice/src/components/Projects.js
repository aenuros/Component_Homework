import projects from '../data/projects.json';
import React from 'react';
import {render} from 'react-dom';
import Project from './Project';

class Projects extends React.Component {
  render() {
    return (
      <section id="portfolio">
        <Project title="Pig Latin" description="I made a Pig Latin translator for my blog." imgName="gambit" />
        <Project title="Big Mama" description="A turn-based adventure game for Node js." imgName="iron-man" />
        <Project title="PNR Generator" description="C-based program to generate PNRs for Hotel Connections." imgName="storm" />
        <Project title="Dialect Quiz" description="Web app that asks users questions to determine what their dialect is and store it in a database." imgName="phoenix" />
      </section>
    )
  }
};

export default Projects;
