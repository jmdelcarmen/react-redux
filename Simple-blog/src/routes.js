'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';

//components
import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/post_new';
import PostShow from './components/post_show';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex}/>
    <Route path="posts/new" component={PostsNew} />
    <Route path="post/:id" component={PostShow} />
  </Route>
);
