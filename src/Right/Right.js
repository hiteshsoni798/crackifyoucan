import React, { Component } from 'react'
import Left from '/home/soni/Music/React/my-app/src/Left/Left';
import Fail from '/home/soni/Music/React/my-app/src/success';
import styled from 'styled-components';
import { BrowserRouter, Route} from 'react-router-dom'



const regex= /^\s*([0-9]{0,4})$/;
class Button extends Component {
	constructor (props) {
		super(props);
		this.state={
      value:"",
      error:"",
  	}
	}

	onchange = (e) => {
		if (!this.isValid(e.target.value)) {
			this.setState({error:'Not valid Password',valid:false});
		} else {
			this.setState({error:'',valid:true});
		}
		this.setState({value:e.target.value});

  }

	isValid = (input) => {
		return regex.test(input);

	}

	onkeypress = (e) => {
		if(e.key=='Enter'){
			this.action();
		}
	}

	action = () => {
		if(this.state.error=='' && this.state.value.length==4) {
			this.props.handle_password(this.state.value);
			this.setState({value : ""});
		} else if (this.state.error=='') {
			this.setState({error:'password should be 4 digits'});
		}
	}

	render () {
		return (
			<div>
				<div>
	        <input id = "input"
						onChange = {this.onchange}
						value = {this.state.value}
						onKeyPress = {this.onkeypress}
						style = {
								this.isValid(this.state.value) ? {border: 'solid thin black'} :  {border: 'solid thin red'}
						}
					 />
	         <h6 style={{marginTop:'0px',color:'red',align:'Left'}}>
					 		{this.state.error}
					 </h6>
      	</div>
				<div id="button">
        		<button onClick={this.action}>
						 	Submit
						</button>
      	</div>
      </div>
		);
	}
}

class Timer extends Component {
	constructor (props) {
		super(props);
		this.state = {
			min:3,
			sec:0,
			interval : setInterval(this.clock,1000)
		}
		// var interval = setInterval(this.clock,1000);
		// console.log(interval);
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
	}

	render () {
		if(this.state.min==0 && this.state.sec==0) {
			return (
				<BrowserRouter>
					<Route exact path="/fail" component={Fail} />
				</BrowserRouter>
			);
		} else {
			return (
			<div id="timer">{this.state.min}:{this.state.sec}</div>
		);
	}
}
}


class Right extends Component {
	constructor (props) {
		super(props);
	}
	render () {
		return(
			<div id="right">
      			<Button {...this.props}/>
      			<Timer />

       		</div>
		);
	}
}

 export default Right
