import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FormStyle } from './ContactsForm.styled';

export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  resetContactInput = () => {
    this.setState({ name: '', number: '' });
  };

  checkNameForMath = () => {
    let flag = true;
    this.props.contacts.forEach(e => {
      if (e.name === this.state.name) {
        flag = false;
        return alert(`${this.state.name} is already in contacts`);
      }
    });
    return flag;
  };

  formState = e => {
    e.preventDefault();
    if (!this.checkNameForMath()) {
      this.resetContactInput();
      return;
    }
    this.props.onSubmitAddInputValue(this.state.name, this.state.number);
    this.resetContactInput();
  };

  render() {
    const newId = nanoid();
    return (
      <FormStyle onSubmit={this.formState}>
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
          onChange={this.handleInputChange}
          value={this.state.name}
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
          onChange={this.handleInputChange}
          value={this.state.number}
        />
        <button>Add contact</button>
      </FormStyle>
    );
  }
}

ContactsForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onSubmitAddInputValue: PropTypes.func,
};
