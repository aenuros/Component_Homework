import React from 'react';
import {render} from 'react-dom';

class SocialLinks extends React.Component {
  render() {
    return (
      <div>
        <a href="https://facebook.com" target="_blank">
          <i class="fab fa-facebook-square fa-3x"></i>
        </a>
        <a href="https://twitter.com" target="_blank">
          <i class="fab fa-twitter-square fa-3x"></i>
        </a>
        <a href="https://github.com" target="_blank">
          <i class="fab fa-github-square fa-3x"></i>
        </a>
      </div>
    )
  }
};

export default SocialLinks;
