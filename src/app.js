import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';
function SimpleForm(props) {
  return (
    <div className="container">
      <div id="contact">
        <form>
          <fieldset>
            <legend>Contact Us</legend>
            <input type="text" name="name" placeholder="Your Name *"/>
            <input type="email" name="email" placeholder="Your Email *"/>
            <textarea name="content" placeholder="Tell us your issue"/>
          </fieldset>
        <button type="submit" value="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

ReactDOM.render(
    <SimpleForm/>,
    document.getElementById('root')
);
