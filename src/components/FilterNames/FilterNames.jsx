import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const FilterNames = ({ onChangeName, filter }) => {
  const newId = nanoid();
  return (
    <>
      <label htmlFor={newId}>Find contacts by name</label>
      <input
        type="text"
        id={newId}
        name="filter"
        title="Find contacts by name"
        onChange={onChangeName}
        value={filter}
      ></input>
    </>
  );
};

FilterNames.propTypes = {
  filter: PropTypes.string,
  onChangeName: PropTypes.func,
};
