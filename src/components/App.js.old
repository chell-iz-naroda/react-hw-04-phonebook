import { Component } from 'react';

import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { PhonebookList } from './PhonebookList/PhonebookList';
import { Filter } from './Filter/Filter';
import { Layout } from './Layout';


export class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };


  addContacts = newContact => {
    const { contacts } = this.state;
    contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase()) ?
      alert(`Contact ${newContact.name} already exists. Please, choose another name`)
      :
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, newContact],
        };
      });
  };

  onDelete = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== contactId),
      };
    });
  };

  changeFilter = newFilter => {
    this.setState ({filter: newFilter});
  };

  getContact = () => {
    const {contacts, filter} = this.state;
    const lowerCaseContact = filter.toLowerCase();
    return contacts.filter(cnt => {
      return cnt.name.toLowerCase().includes(lowerCaseContact);
    })
  }

  componentDidMount() {
    const savedConstacts = localStorage.getItem('contacts');

    if (savedConstacts !== null) {
      this.setState({
        contacts: JSON.parse(savedConstacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const visibleContactsItems = this.getContact();
    return (
      <>
      <Layout>
        <h1>Phonebook</h1>
        <PhonebookForm onAdd={this.addContacts} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter}/>
        <PhonebookList contacts={visibleContactsItems} onDelete={this.onDelete} />
        </Layout>
      </>
    );
  }


}