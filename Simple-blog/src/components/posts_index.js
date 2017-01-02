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

//mapDispatchToProps = { fetchPosts: fetchPosts };
export default connect(null, { fetchPosts })(PostsIndex);
