import React, { Component } from 'react';

class Timer extends Component {
	constructor (props) {
		super(props);
		this.state = {
			min:3,
			sec:0,
			interval : setInterval(this.clock,1000)
		}
	}

	clock = () => {
		 var sec = this.state.sec;
		 var min = this.state.min;
		 if(sec == 0) {
			 this.setState({min:min-1,sec:59});
		 } else {
			 this.setState({sec:sec-1});
		 }
		 if(min == 0 && sec == 1){
			 clearInterval(this.state.interval);
		 }
     if(this.state.sec == 0 && this.state.min==0) {
       this.props.fail();
     }
	}

	render () {
			return (
			<div id="timer">{this.state.min}:{this.state.sec}</div>
		);
	}
}

export default Timer
