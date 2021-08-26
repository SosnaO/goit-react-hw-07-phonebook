import React from 'react';
import styles from './filter.module.css'
import { contactsActions, contactsSelectors } from '../redux/contacts';
import { useSelector, useDispatch } from "react-redux";
// import contactsAction from '../redux/counter/counter-action';
// import { getFilter  } from '../redux/counter/counter_selectors';
    
function Filter() {

  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);
  const contacts = useSelector(contactsSelectors.getContacts);
  const error = useSelector(contactsSelectors.getError);

  // const value = useSelector(getFilter);
  // const dispatch = useDispatch();
  // const onChange = e => dispatch(contactsAction.changeFilter(e.target.value))
    return(
<>
{contacts.length > 0 && !error && (
  <label className={styles.filterLabel}>
        Find contacts by name 
      <input className={styles.filterInput} type="text"
      value={filter}
      // onChange={onChange}
      onChange={e =>
        dispatch(contactsActions.filterContact(e.target.value))}
      />
     </label>
)}
  </>
  );
  }
 export default Filter;