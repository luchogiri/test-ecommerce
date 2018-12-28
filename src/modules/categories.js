
import React, {PureComponent} from 'react';

import Category from '../components/category';
import './categories.scss';


export default class Categories extends PureComponent {

  render() {
    return (
      <section className="main-categories">
        <h1 className="main-categories__title">Nuestras categorías</h1>
        <nav className="main-categories__list">
          <Category to="/">Bebidas</Category>
          <Category to="/">Almuerzos</Category>
          <Category to="/">Desayunos</Category>
          <Category to="/">Vinos</Category>
        </nav>
      </section>
    );
  }
}