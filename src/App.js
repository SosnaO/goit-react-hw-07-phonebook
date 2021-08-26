import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'
import Filter from './components/Filter/Filter'
import styles from './components/ContactForm/ContactForm.module.css'


  function App(){
   return (
    <div className={styles.phonebook}>
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />
    <ContactList /> 
    </div>
  );
}
  export default App;