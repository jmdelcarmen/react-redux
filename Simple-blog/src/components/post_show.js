'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost, deletePost } from '../actions/index';
import { Link, browserHistory } from 'react-router';

class PostShow extends Component {
  componentWillMount() {
    this.props.getPost(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id);
  }

  render() {
    const { post } = this.props;
    //handling null props
    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container">
        <Link to="/" className="btn btn-secondary">Back To Index</Link>
        <button onClick={this.onDeleteClick.bind(this)}
                className="btn btn-danger pull-xs-right">Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.uniquePost
  }
}

export default connect(mapStateToProps, { getPost, deletePost })(PostShow);
