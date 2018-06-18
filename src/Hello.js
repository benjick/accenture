import React from 'react';
import PropTypes from 'prop-types';

export default class Hello extends React.Component {
  static defaultProps = {
    name: 'Max'
  }
  static propTypes = {
    name: PropTypes.string,
    person: PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired
    }).isRequired
  }
  componentDidMount() {
    console.log('Hello Im available in the DOM now');
  }
  render() {
    console.log(this.props);
    return <p>Hello {this.props.name}!</p>
  }
}
