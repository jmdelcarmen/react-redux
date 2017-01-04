'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
    renderComments() {
        return this.props.comments.map(comment => <li key={comment}>{comment}</li>);
    }

    render() {
        return(
            <ul className="comment-list">
                {this.renderComments()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps)(CommentList);