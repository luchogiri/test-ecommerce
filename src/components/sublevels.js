
import React from 'react';
import {Link} from 'react-router-dom';

import './sublevels.scss';


const Sublevels = ({ category = {}, match = {} }) => (

  <React.Fragment>
    <h3 className="sublevels-side__title">Subcategorías</h3>
    {category.sublevels &&
    category.sublevels.map(s =>
      <Link
        key={s.id}
        className="sublevels-side__link"
        to={`${match.url}/${s.name.toLowerCase()}-${s.id}`}>
        • &nbsp; {s.name}
      </Link>
    )}
  </React.Fragment>
);

export default Sublevels;