
import React, {PureComponent} from 'react';

import * as Query from '../helpers/query';
import './order.scss';


export const OrderMethod = {

  "": undefined,
  "price-asc": (a, b) => Number(a.price.replace(/[$|,]/g,'')) - Number(b.price.replace(/[$|,]/g,'')),
  "price-desc": (a, b) => Number(b.price.replace(/[$|,]/g,'')) - Number(a.price.replace(/[$|,]/g,'')),
  "stock": (a, b) => b.quantity - a.quantity,
  "availability": (a, b) => b.available - a.available
};



class Order extends PureComponent {

  state = {
    order: ''
  };

  componentDidMount() {

    const query = Query.Parse(this.props.location.search);
    if (query.order)
      this.setState({ order: query.order });
  }

  onChange = i => {
    const { value } = i.target;
    this.setState({ order: value });
    const query = Query.Parse(this.props.location.search);
    const params = Query.Stringify({ ...query, order: value });
    this.props.history.push(`${this.props.match.url}${params ? `?${params}`:''}`);
  };

  render() {

    return (
      <section className="main-order">
        <h3 className="main-order__title">Ordenar por</h3>
        <select className="main-order__select" onChange={this.onChange} value={this.state.order}>
          <option value="">Destacados</option>
          <option value="price-asc">Precio ascendente</option>
          <option value="price-desc">Precio descendente</option>
          <option value="stock">Cantidad</option>
          <option value="availability">Disponibilidad</option>
        </select>
      </section>
    );
  }
}

export default Order;