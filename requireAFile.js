import React from 'react';
import ReactDOM from 'react-dom';
//the file being imported
import {NavBar} from './NavBar.js'

class ProfilePage extends React.Component {
  render() {
    return (
      <div>
      //inluding the component in another component
      //instance of that class
      <NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}
