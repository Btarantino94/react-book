import React, { Component } from 'react';
import './App.css';
import Comment from './Comment';
import CommentListDetail from './commentListDetails'
import Utils from './beingExtra';
import AddComment from './AddComment';

class App extends Component {
  render() {
    return (
        <div>
          <Comment 
            name="John Smith"
          />
          <AddComment/>
          <CommentListDetail/>
          <Utils/>
        </div>
    );
  }
}

export default App;
 