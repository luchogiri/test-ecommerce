
import React from 'react';
import './product.scss';

const Product = ({
    id,
    title = '...',
    price = '',
    stock = '',
    available = false,
    onPress,

    amount,
    onAdd,
    onSubtract
  }) => {

  return (
    <article
      className={`flex product-item ${!available && 'product-item--unavailable'}`}>
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
      {available ?
        onPress && <div className="flex product-item__add" onClick={() => onPress(id)}>
          <i className="fas fa-cart-plus"/> &nbsp; Agregar al carrito
        </div>:
        <div className="flex product-item__add">
          No disponible
        </div>}

      {onSubtract &&
        <div className="flex product-item__add-subtract">
          <div
            className="flex product-item__add-subtract__subtract"
            onClick={() => onSubtract(id)}
          >-</div>

          <div className="flex product-item__add-subtract__text">{amount}</div>
          <div
            className="flex product-item__add-subtract__add"
            onClick={() => onAdd(id)}
          >+</div>
        </div>}
    </article>
  );
};

export default Product;