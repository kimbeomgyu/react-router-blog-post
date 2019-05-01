// 테스트를 위해서 제작
import React from 'react';
import { Field } from 'redux-form';

const CreateField = ({ text, name, component, type }) => (
  <div className="form-group">
    <label htmlFor={name}>{text}</label>
    <Field
      name={name}
      className="form-control"
      component={component}
      type={type}
    />
  </div>
);

export default CreateField;
