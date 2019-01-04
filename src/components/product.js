
import React from 'react';
import './product.scss';

const Product = ({ title = '...', price = '', stock = '' }) => {

  return (
    <article
      className="flex product-item">
      <div className="flex product-item__content">
        <figure className="flex product-item__img">
          {title.substr(0,1)}
        </figure>
        <h1 className="flex product-item__title">
          {title}
        </h1>
        <h2 className="flex product-item__price">
          {price}
        </h2>
        <h3 className="flex product-item__stock">
          {stock && `Stock: ${stock}`}
        </h3>
      </div>
      <div className="flex product-item__add">
        Agregar al carrito
      </div>
    </article>
  );
};

export default Product;