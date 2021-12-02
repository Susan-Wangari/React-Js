import React from 'react';
import ReactDOM from 'react-dom';

//class component
export class NewFriend extends React.Component {
	render() {
		return (
      <div>
        <img src={this.props.src} />
      </div>
    );
	}
}

//functional component
//does not use this keyword
//props is used as a parameter
export const NewFriend = (props) => {
  return (
    <div>
        <img src={props.src} />
      </div>
  );
}

ReactDOM.render(
  <NewFriend src="https://content.codecademy.com/courses/React/react_photo-squid.jpg" />,
  document.getElementById('app')
);

