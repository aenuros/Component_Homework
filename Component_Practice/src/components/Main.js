import React from 'react';
import {render} from 'react-dom';



class Main extends React.Component {
  render() {
    return (
      <main id="about-me">
        <a href="#">
          <i class="far fa-arrow-alt-circle-up"></i>
        </a>
        <h1>About Me</h1>
        <div>
          <p>{`My name is Karen Burgos. I have a Bachelor's Degree in Linguistics and I'm ready to start making fires in web development.`}</p>
          <p>{`My interest in the web extends way back into childhood, when I learned how to make websites using Microsoft FrontPage. How far we've come since then!
          Today I use a more modern approach to the web, using ReactJS, Javascript, SQL, and PHP.`}</p>
          <p>{`I'm on a roll and I can't be stopped. If you don't believe me, check out my sweet pictures below. They're tarot cards of superheroes. Did I make them? No, but they definitely came with this template.`}</p>          
        </div>
      </main>
    )
  }
};

export default Main;
