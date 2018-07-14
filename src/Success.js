import React, { Component } from 'react';
class Success extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
     <div>
      <i>Congratulation</i>, You took {this.props.Tried} steps to Solve.
      </div>
    );
  }
}
export default Success
