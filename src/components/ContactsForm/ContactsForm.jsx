import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FormStyle } from './ContactsForm.styled';

export const ContactsForm = ({ contacts, onSubmitAddInputValue }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const newId = nanoid();

  const resetContactInput = () => {
    setName('');
    setNumber('');
  };

  const checkNameForMath = () => {
    let flag = true;
    contacts.forEach(e => {
      if (e.name === name) {
        flag = false;
        return alert(`${this.state.name} is already in contacts`);
      }
    });
    return flag;
  };

  const formState = e => {
    e.preventDefault();
    if (!checkNameForMath()) {
      resetContactInput();
      return;
    }
    onSubmitAddInputValue(name, number);
    resetContactInput();
  };

  return (
    <>
      <FormStyle onSubmit={formState}>
        <label htmlFor={newId}>
          <span>Name</span>
        </label>
        <input
          id={newId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <label htmlFor={newId}>
          <span>Number</span>
        </label>
        <input
          id={newId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={e => setNumber(e.target.value)}
          value={number}
        />
        <button>Add contact</button>
      </FormStyle>
    </>
  );
};

ContactsForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onSubmitAddInputValue: PropTypes.func,
};
