import { Component } from 'react';
import styles from './App.module.css';
import List from './List';
import ContactForm from './Form';
import Notification from './Notification';
import Filter from './Filter';


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
			{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
			{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
			{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSameName = data => {
    return this.state.contacts.find(({ name }) => name === data.name);
  };

  onFormSubmit = data => {
    if (this.state.contacts.length === 0) {
      this.setState({ contacts: [data] });
      return;
    } else if (this.onSameName(data)) {
      alert(`${data.name} is already in contacts.`);
      return;
    } else {
      this.setState(prevState => ({
        contacts: [data, ...prevState.contacts],
      }));
      return;
    }
  };

  onInputHandler = e => {
    this.setState({ filter: e.target.value });
  };

  filterReset = () => {
    this.setState({ filter: '' });
  };

  onDeleteHandle = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <div className={styles.div}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onFormSubmit} />
        <h2>Contacts</h2>
        <Filter
          onFilterInput={this.onInputHandler}
          value={this.state.filter}
        />
        {this.state.contacts.length > 0 ? (
          <List contacts={filteredContacts} onDelete={this.onDeleteHandle} />
        ) : (
          <Notification />
        )}
      </div>
    );
  }
}

export default App;