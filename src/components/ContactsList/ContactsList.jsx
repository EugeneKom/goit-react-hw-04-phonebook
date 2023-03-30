import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, filter, handleDelete }) => {
  const creatMarcup = objContacts => {
    return objContacts.map(({ name, id, number }) => {
      return (
        <li key={id} id={id}>
          <span>{name}:</span>
          <span>{number}</span>
          <button onClick={handleDelete}>Delete</button>
        </li>
      );
    });
  };

  const renderFilterMarcup = () => {
    const newArr = contacts.filter(({ name }) => {
      const modifiedName = name.toLowerCase();
      return modifiedName.includes(filter.toLowerCase());
    });
    return newArr;
  };
  return (
    <ul>
      {filter === ''
        ? creatMarcup(contacts)
        : creatMarcup(renderFilterMarcup())}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  handleDelete: PropTypes.func,
};
