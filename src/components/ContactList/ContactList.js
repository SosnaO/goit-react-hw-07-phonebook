import React from "react";
import ContactlistItem from './ContactListItem'

import { useSelector, useDispatch } from "react-redux";
import contactsAction from '../redux/counter/counter-action';
import { getVisibleContacts } from '../redux/counter/counter_selectors';
    
const ContactList = () => {
    const contacts = useSelector(getVisibleContacts);
    const dispatch = useDispatch();
    const onDelete = id => dispatch(contactsAction.deleteContact(id))
        return (
        <ul>
        {contacts.map(({ name, number, id }) => ( 
         <ContactlistItem 
         key={id}
         id={id}
         name={name}
         number={number}
         onDelete={()=>onDelete(id)}
        />
         ))}
        </ul>
    )};
export default ContactList;