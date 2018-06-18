import React from 'react';

export default class State extends React.Component {
  state = {
    value: 0,
  }
  shouldComponentUpdate(newProps, newState) {
    if (newState.value === 5) {
      return false;
    }
    return true;
  }
  componentDidUpdate() {
    console.log('Updated!');
  }
  increase = () => {
    this.setState({
      value: this.state.value + 1
    });
  }
  decrease = () => {
    this.setState({
      value: this.state.value - 1
    });
  }
  render() {
    return (
      <div style={{marginLeft: 100}}>
        <button onClick={this.decrease} type="button">-</button>
        <span>{this.state.value}</span>
        <button onClick={this.increase} type="button">+</button>
      </div>
    )
  }
}
