import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class FilterNames extends Component {
  render() {
    const newId = nanoid();
    return (
      <>
        <label htmlFor={newId}>Find contacts by name</label>
        <input
          type="text"
          id={newId}
          name="filter"
          title="Find contacts by name"
          onChange={this.props.onChangeName}
          value={this.props.filter}
        ></input>
      </>
    );
  }
}

FilterNames.propTypes = {
  filter: PropTypes.string,
  onChangeName: PropTypes.func,
};
