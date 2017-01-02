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

  render() {
    console.log(this.props.posts);
    return (
      <div>
        <div className="text-right">
          <Link to="posts/new" className="btn btn-primary">
            Add a post
          </Link>
        </div>
        List of blog posts.
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

//mapDispatchToProps = { fetchPosts: fetchPosts };
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
