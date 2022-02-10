import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

function Filter({ value, onChange }) {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" name="name" value={value} onChange={onChange}></FilterInput>
    </FilterLabel>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
