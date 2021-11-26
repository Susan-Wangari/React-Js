import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}</h1>; //this lets you display info on the screen/web page
  }
}

ReactDOM.render(
  <Greeting firstName='Wangari' />, //the real value of the prop
  document.getElementById('app')
);
