import React, { Component } from 'react';

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
export default PositionMatch
