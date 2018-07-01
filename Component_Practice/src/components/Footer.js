import React from 'react';
import {render} from 'react-dom';
import SocialLinks from './SocialLinks';

class Footer extends React.Component {
  render() {
    return (
      <footer>
      <SocialLinks/>
      <p>All content copyright 2018 me</p>
      </footer>
    )
  }
};

export default Footer;
