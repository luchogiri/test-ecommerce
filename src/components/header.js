
import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss';

const Header = () => (
  <header className="main-header">
    <h1 className="main-header__title">
      <Link to="/">El Baratón</Link>
    </h1>
    <h3 className="main-header__breadcrumbs">
      <Link to="/">Inicio</Link>
      {/*<a href="#">Categoría</a> &nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;*/}
      {/*<a href="#">Subcategoria</a>*/}
    </h3>
  </header>
);

export default Header;