import React from 'react';
import ReactDOM from 'react-dom';
//JavaScript class
export class Friend extends React.Component {
  render() {
    return <img src="https://content.codecademy.com/courses/React/react_photo-octopus.jpg" />;
  }
};

//functional component
export const Friend = () => {
     return <img src="https://content.codecademy.com/courses/React/react_photo-octopus.jpg" />;
  };

ReactDOM.render(
	<Friend />,
	document.getElementById('app')
);
