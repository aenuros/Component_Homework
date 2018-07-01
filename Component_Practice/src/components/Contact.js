import React from 'react';
import { render} from 'react-dom';

class Contact extends React.Component {
  render() {
    return (
      <aside id="contact-me">
        <header>
          <h1>Contact Me</h1>
          <p>Call me, beep me, if you have a good lead on a job!</p>
        </header>

        <form action="#" method="#">
          <div class="form-field">
            <label for="user_name">Name</label><br />
            <input type="text" name="user_name" required/>
          </div>
          <div class="form-field">
            <label for="user_email">Email</label><br/>
            <input type="text" name="user_email" required/>
          </div>
          <div class="form-field">
            <textarea name="message"></textarea>
          </div>
          <input type="submit" value="Send!"/>
        </form>
      </aside>
    )
  }
}

export default Contact;
