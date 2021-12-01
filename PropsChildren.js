import React from 'react';
import { LilButton } from './LilButton';

class BigButton extends React.Component {
  render() {
    console.log(this.props.children); //return everything in between a component’s opening and closing JSX tags.
    return <button>Yo I am big</button>;
  }
}


// Example 1
<BigButton>
  I am a child of BigButton. //returns I am a child of BigButton
</BigButton>


// Example 2
<BigButton>
  <LilButton /> //returns <LilButton /> component.
</BigButton>


// Example 3
<BigButton /> //returns undefined
