import React from 'react';

class Example extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      mood:   'great',
      hungry: false
    };
  }

  render() {
    return <div>this.setState({ hungry: true })</div>; 
    //sets the hungry state to true
  }
}

<Example />
