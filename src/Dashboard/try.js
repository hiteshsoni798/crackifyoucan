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
export default Tried
