import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  //event handler
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    //event listener
    return <button onClick ={this.scream}>AAAAAH!</button>;
  }
}
ReactDOM.render(<Button />, document.getElementById('app'));
