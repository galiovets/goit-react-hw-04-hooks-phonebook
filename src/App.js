import { Component } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Container from './components/Container';
import { PhonebookTitle, ContactTitle } from './components/Title/Title.styled';
import Form from './components/Form';
import ContactsList from './components/Contacts/ContactList';
import Filter from './components/Filter';

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

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    if (
      contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase() ||
          contact.number === newContact.number,
      )
    ) {
      return alert(`${newContact.name} is added`);
    }
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  filter = evt => {
    this.setState({ filter: evt.target.value });
  };

  filterChange = () => {
    const { contacts, filter } = this.state;
    const filterNormalized = filter.toLocaleLowerCase();
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filterNormalized));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <Container>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <Form onSubmit={this.addContact} />
        <ContactTitle>Contacts</ContactTitle>
        <Filter value={filter} onChange={this.filter}></Filter>
        <ContactsList contacts={this.filterChange()} onDelete={this.deleteContact}></ContactsList>
      </Container>
    );
  }
}

export default App;
