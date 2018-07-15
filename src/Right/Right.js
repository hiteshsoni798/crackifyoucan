import React, { Component } from 'react'
import Timer from '/home/soni/Music/React/my-app/src/Right/timer';
import Input from '/home/soni/Music/React/my-app/src/Right/input';

class Right extends Component {
	constructor (props) {
		super(props);
	}
	render () {
		return(
			<div id="right">
      			<Input {...this.props}/>
      			<Timer  {...this.props}/>
   		</div>
		);
	}
}

export default Right
