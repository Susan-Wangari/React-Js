import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
//gives the text a default value of I am button if no text is passed in
Button.defaultProps = {text:'I am a button'};

ReactDOM.render(
  <Button text =""/>,  //overrides the default prop
  document.getElementById('app')
);
