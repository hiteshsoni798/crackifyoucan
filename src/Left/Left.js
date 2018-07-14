import React, { Component } from 'react';

class Tried extends Component {
constructor (props) {
	super(props);

}
	render() {
		const numbers = this.props.value;
		const listItems = numbers.map(
			(number) => <li>{number}</li>
		);

		return (
			<div id="tried">Tried Password
				<ul>
					{listItems}
				</ul>
			</div>
		);

	}
}

class WordMatch extends Component {
	constructor (props) {
		super(props);
	}
	render() {
		const char_match = this.props.char_match;
		const listChar = char_match.map(
			(number) => <li>{number}</li>
		);
		return <div id="word-match">charecter match
				 <ul>
				 	{listChar}
				 </ul>
			   </div>;
	}
}

class PositionMatch extends Component {
	render() {
		const pos_match = this.props.pos_match;
		const listPos = pos_match.map(
			(number) => <li>{number}</li>
		);
		return (
			<div id="position-match">
				Position match
				<ul>
				{listPos}
				</ul>
			</div>
		);

	}
}

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
