/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';

class PhoneForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  handleChange = e => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <form>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <div>{this.state.name}</div>
      </form>
    );
  }
}

export default PhoneForm;
