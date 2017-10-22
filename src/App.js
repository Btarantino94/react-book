import React, { Component } from 'react';//import React from 'react' is the above is a default import. 
//brings in the main React library so we can start work.
//component is composed of layout code and behavoral code.
import './App.css';

  class App extends Component {
    constructor(){
      //When used in a constructor, the super keyword appears alone and must be used before the this keyword is used.
      // The super keyword can also be used to call functions on a parent object.
      //basically super gives you access to state.
      super();
      //.bind changes what "this" is referencing.
      // When you bind functions to events, your input variables 
      //will be called first and then you will get whatever the API of the event is defined to return.
        this.HandleComment = this.HandleComment.bind(this);
        this.PostComment = this.PostComment.bind(this);
        this.DeleteComment = this.DeleteComment.bind(this);
        this.AddLike = this.AddLike.bind(this);
        this.AddDislike = this.AddDislike.bind(this);
        this.HandleReply = this.HandleReply.bind(this);
        this.PostReply = this.PostReply.bind(this);
        this.ShowReplies = this.ShowReplies.bind(this);
        this.state = {
        userComment: '',
        commentList: []
    }
  };
//
  HandleComment(event){
    let Comment = event.target.value;
    // The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
    let newState = Object.assign({}, this.state);
    newState = Comment;
    //triggering a setState on a component will not only cause cascaded rendering but will also cause repeated rendering in components.
    this.setState({
    userComment: newState
  })
  }

  PostComment(){
    let nuevoComment = this.state.userComment;
      if (nuevoComment === ''){
        alert("Your comment is empty.")
          return;
          }
            let newComment = {
            comment: nuevoComment,
            likes: 0,
            dislikes: 0,
            userReply: '',
            replies: [],
            repliesShown: false
            }
              let commentList = [...this.state.commentList];
              commentList.push(newComment);
              this.setState({
              commentList: commentList,
              userComment: ''
    })
  }

  HandleReply(event, index){
    let Reply = event.target.value;
      let newState = Object.assign({}, this.state);
        newState.commentList[index].userReply = Reply;
        this.setState(newState);
  }

  PostReply(index){
    let newState = Object.assign({}, this.state);
      let newReply = {
        reply: newState.commentList[index].userReply,
        likes: 0,
        dislikes: 0,
  }
      if (newReply.reply === ''){
      alert("Your reply is empty!")
      return;
      }
        newState.commentList[index].replies.push(newReply);
        newState.commentList[index].userReply = '';
        this.setState(newState);
        }

  ShowReplies(index){
    let commentList = [...this.state.commentList];
      commentList[index].repliesShown = !commentList[index].repliesShown
      this.setState({
      commentList: commentList
  })
  }

  ReplyAddLike(pIndex, bIndex){
    let commentList = [...this.state.commentList];
      commentList[pIndex].replies[bIndex].likes++;
      this.setState({
      commentList: commentList
  })
  }

  ReplyAddDislike(pIndex, bIndex){
    let commentList = [...this.state.commentList];
      commentList[pIndex].replies[bIndex].dislikes++;
      this.setState({
      commentList: commentList
  })
  }

  DeleteReply(pIndex, bIndex){
    let commentList = this.state.commentList;
    // .splice changes the contents of an array by removing existing elements and/or adding new elements.
      commentList[pIndex].replies.splice(bIndex, 1);
      this.setState({
      commentList: commentList
  })
  }

  AddLike(index){
    let commentList = [...this.state.commentList];
      // The ++ notation is the increment operators.
      commentList[index].likes++;
      this.setState({
      commentList: commentList
  })
  }

  AddDislike(index){
    let commentList = [...this.state.commentList];
      commentList[index].dislikes++;
      this.setState({
      commentList: commentList
  })
  }

  DeleteComment(index){
    let commentList = this.state.commentList;
      commentList.splice(index, 1);
      this.setState({
      commentList: commentList
  })
  }
//putting everything to the page.
  render() {
    const showComments = this.state.commentList.map(function(commentObj, index){
    var pIndex = index;
    const showReplies = commentObj.replies.map(function(replyObj, bIndex){
      return(
        <div key={bIndex} className="reply">
        <p className="replyText">{replyObj.reply}</p>
        <button className="likeButton" onClick={()=>{this.ReplyAddLike(pIndex, bIndex)}}>{replyObj.likes} Like{replyObj.likes === 1? "":"s"}</button>
        <button className="dislikeButton" onClick={()=>{this.ReplyAddDislike(pIndex, bIndex)}}>{replyObj.dislikes} Dislike{replyObj.dislikes === 1? "":"s"}</button>
        <button className="deleteButton" onClick={()=>{this.DeleteReply(pIndex, bIndex)}}>Delete</button>
        </div>
        )
        }, this)

        return (
          <div className="comment" key={index}>

          <p className="commentText">{commentObj.comment}</p>

          <button className="deleteButton" onClick={()=>{this.DeleteComment(index)}}>Delete</button>
          <button className="likeButton"
          onClick={
          ()=>{this.AddLike(index)}}>
          {commentObj.likes} Like{commentObj.likes === 1? "":"s"}
          </button>
          <button className="showReplyButton" onClick={()=>this.ShowReplies(index)}>{this.state.commentList[index].replies.length} {this.state.commentList[index].replies.length === 1? "Reply":"Replies"}</button>
          <button className="dislikeButton" onClick={()=>{this.AddDislike(index)}}>{commentObj.dislikes} Dislike{commentObj.dislikes === 1? "":"s"}</button>
          {this.state.commentList[index].repliesShown &&
          <div className="replyContainer" id="replyContainer">
          <input className="replyBox" type="text" placeholder="Leave a reply!" value={this.state.commentList[pIndex].userReply} onChange={(event)=>{this.HandleReply(event, index)}}/>
          <input className="replyButton" type="submit" value="Reply" onClick={()=>{this.PostReply(index)}}/>
          {showReplies}
          </div>
          }

        </div>
        )
        }, this)

          return (
            <div className="App">
            <h1>Space Book</h1>

            <div className="commentSubmit">
            <input className="commentBox" type="text" placeholder="Comment if you wish.." onChange={this.HandleComment} value={this.state.userComment}/>
            <input className="commentButton" type="submit" onClick={this.PostComment} />
            </div>

            <div className="commentList">
            {showComments}
            </div>

            </div>
      );
    }
    }

  export default App;