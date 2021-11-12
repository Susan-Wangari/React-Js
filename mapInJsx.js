import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];
//used mostly for list items in jsx
const peopleLis = people.map(person =><li>{person}</li>
  // expression goes here:

);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));
                
