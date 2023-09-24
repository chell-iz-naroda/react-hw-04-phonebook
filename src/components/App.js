import { useEffect, useState } from 'react';

import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { PhonebookList } from './PhonebookList/PhonebookList';
import { Filter } from './Filter/Filter';
import { Layout } from './Layout';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? initialContacts;
  });
  const [filter, setFilter] = useState('');

  const addContacts = newContact => {
    contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())
      ? alert(`Contact ${newContact.name} already exists. Please, choose another name`)
      : setContacts([...contacts, newContact]);
  };

  const onDelete = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => {
        return contact.id !== contactId
      }))
  }

  const changeFilter = newFilter => {
    setFilter( newFilter);
  };

  const getContact = () => {
    const lowerCaseContact = filter.toLowerCase();
    return contacts.filter(cnt => {
      return cnt.name.toLowerCase().includes(lowerCaseContact);
    })
  };

  const visibleContactsItems = getContact();


  useEffect(() => {

    return localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Layout>
        <h1>Phonebook</h1>
        <PhonebookForm onAdd={addContacts} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <PhonebookList contacts={visibleContactsItems} onDelete={onDelete} />
      </Layout>
    </>
  );


}