import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  handleSubmit(formValues) {
    return formValues;
    //do what ever you want
  }

  render() {
    const {
      fields: { title, categories, content }
    } = this.props;

    return (
      <form onSubmit={this.handleSubmit(createPost)}>
        <h3>Create a new Post</h3>

        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">{title}</div>
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content} />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  console.log(values.title);
  if (!values.title) {
    errors.title = 'Enter a username';
  }
  return errors;
}

export default reduxForm(
  {
    form: 'PostsNewForm',
    validate,
    fields: ['title', 'categories', 'content']
  },
  null,
  { createPost }
)(PostsNew);
