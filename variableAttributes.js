mport React from 'react';
import ReactDOM from 'react-dom';

const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';

// Declare new variable here:
//When writing JSX, it’s common to use variables to set attributes.
//the curly braces represent a variable
const gooseImg = <img src={goose} />;
ReactDOM.render(gooseImg, document.getElementById('app'));
