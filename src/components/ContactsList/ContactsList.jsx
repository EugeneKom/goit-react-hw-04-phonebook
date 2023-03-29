import { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactsList extends Component {
  creatMarcup = objContacts => {
    return objContacts.map(({ name, id, number }) => {
      return (
        <li key={id} id={id}>
          <span>{name}:</span>
          <span>{number}</span>
          <button onClick={this.props.handleDelete}>Delete</button>
        </li>
      );
    });
  };
  renderFilterMarcup = () => {
    const newArr = this.props.contacts.filter(({ name }) => {
      const modifiedName = name.toLowerCase();
      return modifiedName.includes(this.props.filter.toLowerCase());
    });
    return newArr;
  };

  render() {
    return (
      <ul>
        {this.props.filter === ''
          ? this.creatMarcup(this.props.contacts)
          : this.creatMarcup(this.renderFilterMarcup())}
      </ul>
    );
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  handleDelete: PropTypes.func,
};
