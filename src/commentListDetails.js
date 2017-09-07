import React, { Component } from 'react';
import Utils from './beingExtra';

class CommentListDetail extends Component {
	constructor() {
		super();
		this.state = { edit : false, invalidClass : ''};
		this.utils = new Utils();
	}

	onClickDone(event) {
		let comment = this.props.comment;
		if(comment.text) {
			this.setState({edit : false})
			comment.date = this.utils.getFormattedDate();
			this.setState({invalidClass : ''});
		}
		else {
			this.setState({invalidClass : 'invalid-entry'});
		}
	}

	onClickBox(event) {
		if(event.target.getAttribute("class").indexOf('comment-edit') === -1) {
			this.props.highLightBox(this.props.comment.id);
		}
	}

	render() {
		let comment = this.props.comment;
		let commentBox;
		if(this.state.edit) {
			commentBox = (
			<div className = "panel panel-default row" id = {comment.id}>
				<div className = "panel-body">
					<textarea className = {`form-control ${this.state.invalidClass}`} rows = "2" onChange = {(event) => comment.text = event.target.value} defaultValue = {comment.text}></textarea>
				</div>
				<div className = "panel-footer">
					<span className = "comment-name"> {comment.name} </span>
					<span className = "comment-done pull-right" onClick = {this.onClickDone}>Done</span>
				</div>
			</div>)
		}
		else {
			commentBox = (
			<div className = "panel panel-default row comment-box" onClick = {this.onClickBox} id = {comment.id}>
				<div className = "panel-body">
					{comment.text}
				</div>
				<div className = "panel-footer"> 
					<span className = "comment-name">{comment.name} </span>
					<span className = "comment-date"> {comment.date} </span>
					<span className = "comment-edit pull-right" 
						onClick = {(event) => this.setState({edit : true})}>
						Edit
					</span>
				</div>
			</div>)
		}
		return (
			<div>
				{commentBox}
			</div> 
		);
	}
}

export default CommentListDetail;