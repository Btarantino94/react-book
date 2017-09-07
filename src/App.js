import React, { Component } from 'react';
import './App.css';
import Comment from './Comment';
import CommentListDetail from './commentListDetails'
import Utils from './beingExtra';

class App extends Component {
  render() {
    return (
        <div>
          <Comment 
            name="John Smith"
          />
        </div>
    );
  }
}

export default App;
 