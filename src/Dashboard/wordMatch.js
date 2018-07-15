import React, { Component } from 'react';

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
export default WordMatch
