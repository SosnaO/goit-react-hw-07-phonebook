import React from 'react';
import styles from './filter.module.css'
import { contactsActions, contactsSelectors } from '../redux/contacts';
import { useSelector, useDispatch } from "react-redux";

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);
  const contacts = useSelector(contactsSelectors.getContacts);
  const error = useSelector(contactsSelectors.getError);
    return(
    <>
      {contacts.length > 0 && !error && (
        <label className={styles.filterLabel}>
             Find contacts by name 
           <input className={styles.filterInput} type="text"
           value={filter}
            onChange={e =>
          dispatch(contactsActions.changeFilter(e.target.value))}
       />
     </label>
)}
  </>
  );
  }
 export default Filter;