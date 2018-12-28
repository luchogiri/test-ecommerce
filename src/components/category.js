
import React from 'react';
import {Link} from 'react-router-dom';
import './category.scss';

const Category = props => {

  const img = props.children ?
    require(`../images/${String(props.children).toLowerCase()}.jpeg`):
    '';

  return (
    <Link
      to={props.to}
      className="flex main-category-item"
      style={{backgroundImage: `url(${img})`}}>
      <h2 className="flex">
        {props.children || '...'}
      </h2>
    </Link>
  );
};

export default Category;