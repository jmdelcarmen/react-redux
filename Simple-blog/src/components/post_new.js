'use strict';

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
  render() {
    const { fields: { title, categories, content }, handleSumbit } = this.props;

    return (
      <form onSubmit={handleSumbit}>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
        </div>
        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...cateories}/>
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content}></textarea>
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsNew', //does not have to match the component
  fields: [ 'title', 'categories', 'content' ],
})(PostsNew);
