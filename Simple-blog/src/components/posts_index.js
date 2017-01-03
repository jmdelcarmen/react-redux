'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

//action-creators
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map(post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/post/${post.id}`}>
          <strong>{post.title}</strong>
          <p className="text-right">{post.categories}</p>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-right">
          <Link to="posts/new" className="btn btn-primary">
            Add a post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.all
  }
}

//mapDispatchToProps = { fetchPosts: fetchPosts };
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
