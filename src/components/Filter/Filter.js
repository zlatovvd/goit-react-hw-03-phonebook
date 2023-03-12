import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, filterChange }) => (
  <label className={css.filter}>
    Find contacts by name
    <input
      type="text"
      id="filter"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      value={filter}
      onChange={filterChange}
    />
  </label>
);

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
};
