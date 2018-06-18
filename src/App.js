import React from 'react';
import Hello from './Hello';
import State from './State';
import Dom from './Dom';
import Form from './Form';

const array = [1,2,3,4,5];

class App extends React.Component {
  render() {
    return (
      <span>
        <Form />
        <Dom />
        <State />
        <p>{Math.random() > 0.5 ? 'Yes' : 'No'}</p>
      </span>
    )
  }
}

export default App;
