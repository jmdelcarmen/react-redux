'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
         key={book.title}
         onClick={() => this.props.selectBook(book)}
         className="list-group-item">{book.title}
         </li>
      );
    });
  }

  render() {
    return (
      <ul className="col-sm-4 list-group">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //whatever is returned will show up as props
  return {
    books: state.books
  };
}

//anything returned from this function will end up as
//props in this container
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, result should map
  //to all reducers

  return bindActionCreators({ selectBook }, dispatch);
}

//promote booklist from a component to a container
//it needs to know about this new dispatch method, selectBook
//available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
