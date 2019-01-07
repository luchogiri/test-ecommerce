
import React, {PureComponent} from 'react';

import * as Query from '../helpers/query';
import './filter.scss';


export const FilterMethod = filters => {

  const AVAILABLE = {
    "available": a => a.available,
    "unavailable": a => !a.available
  };

  const PRICE = (min, max) => i => {
    const price = Number(i.price.replace(/[$|,]/g, ''));
    return price > min && price < max;
  };

  const STOCK = (from, to) => i => {
    const stock = i.quantity;
    return stock > from && stock < to;
  };

  return data => {

    let filterApplied = true, priceApplied = true, stockApplied = true;

    if (filters.filter)
      filterApplied = AVAILABLE[filters.filter](data);

    if (filters.min && filters.max)
      priceApplied = PRICE(filters.min, filters.max)(data);

    if (filters.from && filters.to)
      stockApplied = STOCK(filters.from, filters.to)(data);

    return filterApplied && priceApplied && stockApplied;
  }
};



class Filter extends PureComponent {

  state = {
    filter: '',
    from: '',
    min: '',
    max: '',
    to: ''
  };

  componentDidMount() {

    const {filter = '', min = '', max = '', from = '', to = ''} = Query.Parse(this.props.location.search);
    this.setState({ filter, min, max, from, to });
  }

  setUrl = () => {
    const query = Query.Parse(this.props.location.search);
    const params = Query.Stringify({ ...query, ...this.state });
    this.props.history.push(`${this.props.match.url}${params && params !== '-' ? `?${params}`:''}`);
  };

  onChangeFilter = i => {
    const { value } = i.target;
    this.setState({ filter: value }, this.setUrl);
  };

  onChange = i => {
    const {target} = i;
    this.setState({ [target.name]: target.value || '' });
  };

  resetPrice = () => {
    this.setState({ min: '', max: '' }, this.setUrl);
  };

  resetStock = () => {
    this.setState({ from: '', to: '' }, this.setUrl);
  };

  applyPrice = () => {
    const {min, max} = this.state;
    this.compareAndSet(min, max);
  };

  applyStock = () => {
    const {from, to} = this.state;
    this.compareAndSet(from, to);
  };

  compareAndSet = (a,b ) => {
    if (!a || !b) return;
    const f = Number(a);
    const t = Number(b);
    if (isNaN(f) || isNaN(t)) return;
    if (f > t) return;
    this.setUrl();
  };


  render() {

    return (
      <section className="main-filter">
        <h3 className="main-filter__title">Filtrar por</h3>

        <h3 className="main-filter__subtitle">Disponibilidad:</h3>
        <select className="main-filter__select" onChange={this.onChangeFilter} value={this.state.filter}>
          <option value="">Todos</option>
          <option value="available">Disponibles</option>
          <option value="unavailable">No disponibles</option>
        </select>

        <h3 className="main-filter__subtitle">Precio:</h3>
        <section className="main-filter__inputs">
          <input
            type="number"
            value={this.state.min}
            onChange={this.onChange}
            name="min"
            placeholder="Desde" />

          <input
            type="number"
            value={this.state.max}
            onChange={this.onChange}
            name="max"
            placeholder="Hasta" />
        </section>
        <section className="main-filter__inputs">
          <a className="main-filter__btn" onClick={this.resetPrice}>Borrar</a>
          <a className="main-filter__btn" onClick={this.applyPrice}>Aplicar</a>
        </section>

        <h3 className="main-filter__subtitle">Cantidad:</h3>
        <section className="main-filter__inputs">
          <input
            type="number"
            value={this.state.from}
            onChange={this.onChange}
            name="from"
            placeholder="Desde" />

          <input
            type="number"
            value={this.state.to}
            onChange={this.onChange}
            name="to"
            placeholder="Hasta" />
        </section>
        <section className="main-filter__inputs">
          <a className="main-filter__btn" onClick={this.resetStock}>Borrar</a>
          <a className="main-filter__btn" onClick={this.applyStock}>Aplicar</a>
        </section>
      </section>
    );
  }
}

export default Filter;