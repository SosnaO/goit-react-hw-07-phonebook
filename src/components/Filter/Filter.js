import React from 'react';
import styles from './filter.module.css'

import { useSelector, useDispatch } from "react-redux";
import contactsAction from '../redux/counter/counter-action';
import { getFilter  } from '../redux/counter/counter_selectors';
    
const Filter =() => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(contactsAction.changeFilter(e.target.value))
    return(

  <label className={styles.filterLabel}>
        Find contacts by name 
      <input className={styles.filterInput} type="text"
      value={value}
      onChange={onChange}
      />
     </label>
  )
  };
export default Filter;