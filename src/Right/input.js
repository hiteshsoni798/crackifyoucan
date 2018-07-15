import React, { Component } from 'react'

const regex= /^\s*([0-9]{0,4})$/;
class Input extends Component {
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

export default Input
