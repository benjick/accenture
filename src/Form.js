import React from 'react';

export default class Form extends React.Component {
  state = {
    name: '',
    message: ''
  }
  handleName = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleMessage = (event) => {
    this.setState({
      message: event.target.value
    })
  }
  submit = (event) => {
    event.preventDefault();
    if (this.state.message.length < 1) {
      return;
    }
    console.log(this.state.message);
    this.setState({
      message: '',
    })
  }
  render() {
    return (
      <form onSubmit={this.submit}>
        <input placeholder="name input" onChange={this.handleName} value={this.state.name} />
        <input placeholder="message input" onChange={this.handleMessage} value={this.state.message} />
        <button>send</button>
      </form>
    )
  }
}
