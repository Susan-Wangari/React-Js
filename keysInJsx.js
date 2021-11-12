import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];
//automatically generate keys for the list items
const peopleLis = people.map((person,i) =><li key={'person_' + i}>{person}</li>
  // expression goes here:

);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));
