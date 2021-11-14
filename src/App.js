import './App.css';

import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

function App() {
  return (
    <div className="App">
      <h1>Phonebook</h1>

      <Container>
        <ContactForm />
      </Container>

      <Container title="Contacts">
        <Filter />
        <ContactList />
      </Container>
    </div>
  );
}

export default App;
