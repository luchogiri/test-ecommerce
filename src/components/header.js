
import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss';

const Header = ({ category, tree = [] }) => (
  <header className="main-header">

    <h1 className="main-header__title">
      <Link to="/">Test Ecommerce</Link>
    </h1>

    <h3 className="main-header__breadcrumbs">
      <Link to="/">Inicio</Link>
      {category &&
        <React.Fragment>
          &nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;
          <Link to={`/${category.name.toLowerCase()}-${category.id}`}>{category.name}</Link>
        </React.Fragment>}

      {category && Array.isArray(tree) && tree.map((s,i) =>
        <React.Fragment key={s.id}>
          &nbsp;&nbsp;&nbsp;&gt;&nbsp;&nbsp;&nbsp;
          <Link
            to={`/${category.name.toLowerCase()}-${category.id}${tree.reduce((a,b,c) =>c<=i? `${a}/${b.name.toLowerCase()}-${b.id}`: a,'')}`}>
            {s.name}
          </Link>
        </React.Fragment>)}
    </h3>
  </header>
);

export default Header;