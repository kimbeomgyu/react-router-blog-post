import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reducers from './reducers';
import App from './components/app';
import PostsNew from './components/posts_new';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/posts/new" component={PostsNew} />
    </Router>
  </Provider>,
  document.querySelector('.container')
);
