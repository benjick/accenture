import React from 'react';

class Layer1 extends React.Component {
  state = {
    name: 'Max'
  }
  render() {
    return <Layer2 name={this.state.name} />
  }
}
class Layer2 extends React.Component {
  render() {
    return <Layer3 name={this.props.name} />
  }
}
class Layer3 extends React.Component {
  render() {
    return <p>Hello {this.props.name}</p>
  }
}
