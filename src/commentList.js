import React, { Component } from 'react';
import CommentListDetail from './commentListDetail'

class CommentList extends Component {
	constructor() {
		super();
		this.state = { selectedId : ''};
	}

	highLightBox(id) {
		let commentBox;
		let classList;
		console.log(this.state);
		if(this.state.selectedId) {
			commentBox = document.getElementById(this.state.selectedId);
			classList = commentBox.classList;
			classList.remove('box-highlight');
		}
		commentBox = document.getElementById(id);
		classList = commentBox.classList;
		classList.add('box-highlight');
		this.setState({selectedId : id});

	}

	render() {
		let that = this;
		let commentList = this.props.comments.map (function(comment, i) {
			return <CommentListDetail key={i} comment = {comment} highLightBox = />
		})

		return (
			<div className = "comment-list"> {commentList} </div>
		);
	}
}

// const CommentList = ({comments}) => {
// 	let prevId = '';
// 	if(!comments.length) {
// 		return <div></div>
// 	}
// 	let commentList = comments.map (function(comment, i) {
// 		return <CommentListDetail key={i} comment = {comment} />
// 	})
// 	return (
// 		<div className = "comment-list"> {commentList} </div>
// 	);
// }

export default CommentList;