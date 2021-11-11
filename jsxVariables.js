import React from 'react';
import ReactDOM from 'react-dom';

const theBestString = 'tralalalala i am da best';
//theBestString here is added as a variable but rendered as normal js

ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));
