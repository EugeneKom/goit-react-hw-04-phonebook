import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Wrapper } from './App.styled';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactsWrapper } from './ContactsList/ContactsList.styled';
import { FilterNames } from './FilterNames/FilterNames';
import localStorageCustom from './utils/storage.js';

const LS_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    if (localStorageCustom.load(LS_KEY)) {
      this.setState({ contacts: localStorageCustom.load(LS_KEY) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorageCustom.save(LS_KEY, this.state.contacts);
    }
  }

  onClickDeleteContact = evt => {
    this.setState(prevState => {
      const newArrContacts = prevState.contacts.filter(el => {
        return el.id !== evt.target.parentElement.id;
      });
      return { contacts: newArrContacts };
    });
  };

  onInputFind = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  onSubmitAddInputValue = (name, number) => {
    const nameId = nanoid();
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            name: `${name}`,
            number: `${number}`,
            id: nameId,
          },
        ],
      };
    });
  };

  render() {
    return (
      <Wrapper>
        <Wrapper>
          <h1>Phonebook</h1>
          <ContactsForm
            onSubmitAddInputValue={this.onSubmitAddInputValue}
            contacts={this.state.contacts}
          />
        </Wrapper>
        <ContactsWrapper>
          <div>
            <h2>Contacts</h2>
            <FilterNames
              filter={this.state.filter}
              onChangeName={this.onInputFind}
            />
          </div>
          <div>
            <ContactsList
              contacts={this.state.contacts}
              filter={this.state.filter}
              handleDelete={this.onClickDeleteContact}
            />
          </div>
        </ContactsWrapper>
      </Wrapper>
    );
  }
}
