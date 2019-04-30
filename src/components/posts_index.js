import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div className="text-xs-right">
        <Link to="/post/new" className="btn btn-primary">
          Add a Post
        </Link>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchPosts }
)(PostsIndex);
