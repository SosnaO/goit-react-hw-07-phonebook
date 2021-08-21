import { useState } from 'react';
import styles from './ContactForm.module.css';
import { useSelector, useDispatch } from "react-redux";
import contactsAction from '../redux/counter/counter-action';
import { getContacts } from '../redux/counter/counter_selectors';

export default function ContactForm({onSubmit}) {

    const contacts = useSelector(getContacts);
    const dispatch = useDispatch()

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
      
    const findByName = contactName => {
     return contacts.some(({ name }) => name === contactName);
    };
    const reset = () => {
        setName("");
        setNumber("");
       };

    const handleSubmit=event=>{
      event.preventDefault();
        if (findByName(name)) {
            alert(`${name} is already in contacts!`);
            reset();
            return;
        }
        dispatch(contactsAction.addContact({name, number}))
        reset();
    };

    return(
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
        <button className={styles.buttonSubmit} type="submit">Add contact</button>
        </form>
        );
};
