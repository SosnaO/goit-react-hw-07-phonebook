import { useState } from 'react';
import styles from './ContactForm.module.css';
import { useSelector, useDispatch } from "react-redux";
import { contactsSelectors, contactsOperations } from '../redux/contacts';
import LoaderComponent from '../../components/Loader/loader.js';
 function ContactForm({onSubmit}) {
    const contacts = useSelector(contactsSelectors.getContacts);
    const dispatch = useDispatch()
    const isLoading = useSelector(contactsSelectors.getLoading);

    const [name, setName]= useState('');
    const [number, setNumber]= useState('');

    const handleChange=event=>{
       const { name, value } = event.target;
       switch (name){
           case 'name':
            setName(value);
           break;
            case 'number':
             setNumber(value);
            break;
 
             default:   
             return;
        }
    }
   
    const findByName = name => {
        return contacts.find(
          contact => contact.name.toLowerCase() === name.toLowerCase(),
        );
    };
             
    const handleSubmit = e => {
        e.preventDefault();
        if (findByName(name)) {
          alert(` ${name} is already in the phonebook.`);
          reset();
          return;
        } 
          dispatch(contactsOperations.addContact(name, number));
           reset();
    };

    const reset = () => {
        setName("");
        setNumber("");
    };

    return (
        <>
        <form  className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.formLabel}>Name
        <input className={styles.formInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={name}
        onChange={handleChange}
        />
        </label>

        <label className={styles.formLabel}>Number
        <input className={styles.formInput}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        value={number}
        onChange={handleChange}
        />
        </label>
        {!isLoading && (
        <button className={styles.buttonSubmit} type="submit">Add contact</button>
        )}
        {isLoading && <LoaderComponent />}
        </form>
        </>
        );
};

export default ContactForm;