import React, { Component } from 'react';
import Utils from './beingExtra';

class Comment extends Component {
	
	constructor(props) {
		super (props);
		this.state = {
			name: this.props.name,
			text: this.props.text,
			date: new Utils().getFormattedDate(new Date()),
			id: new Date().getTime().toString(),
		}

	}

	render() {
		return (
			<p>{this.state.name}</p>
		);
	}
}

export default Comment;