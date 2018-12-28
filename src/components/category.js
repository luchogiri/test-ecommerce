
import React from 'react';
import {Link} from 'react-router-dom';
import './category.scss';

const Category = props => (
  <Link
    to={props.to}
    className="flex main-category-item"
    style={{backgroundImage: `url(${require(`../images/${String(props.children).toLowerCase()}.jpeg`)})`}}>
    <h2 className="flex">
      {props.children}
    </h2>
  </Link>
);

export default Category;