import React, { Component } from 'react';
import WordMatch from '/home/soni/Music/React/my-app/src/Dashboard/wordMatch';
import Tried from '/home/soni/Music/React/my-app/src/Dashboard/try';
import PositionMatch from '/home/soni/Music/React/my-app/src/Dashboard/positionMatch';

class Left extends Component {
	constructor (props) {
		super(props);
	}
  render () {
    return (
      <div id="left" >
        <Tried {...this.props}/>
        <WordMatch char_match={this.props.char_match}/>
        <PositionMatch pos_match={this.props.pos_match}/>

     </div>

    );
  }
}
export default Left;
