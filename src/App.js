import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import Container from './components/Container';
import { PhonebookTitle, ContactTitle } from './components/Title/Title.styled';
import Form from './components/Form';
import ContactsList from './components/Contacts/ContactList';
import Filter from './components/Filter';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
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
    setContacts(prevState => [...prevState, newContact]);
  };

  const onFilter = evt => {
    setFilter(evt.target.value);
  };

  const filterChange = () => {
    const filterNormalized = filter.toLocaleLowerCase();
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filterNormalized));
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <Container>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <Form onSubmit={addContact} />
      <ContactTitle>Contacts</ContactTitle>
      <Filter value={filter} onChange={onFilter}></Filter>
      <ContactsList contacts={filterChange()} onDelete={deleteContact}></ContactsList>
    </Container>
  );
}
