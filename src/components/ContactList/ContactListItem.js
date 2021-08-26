import React from 'react';
import PropTypes from 'prop-types';
import styles from './contactListItem.module.css';

const ContactListItem = ({ name, number, id, onDelete }) => (
  <li className={styles.contactListItem}>
    <p className={styles.contact}>
      {name}: {number}{' '}
    </p>
    <button
     className={styles.buttonDelete}
      type="button"
      onClick={() => onDelete(id)}
    >
      Delete
    </button>
  </li>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;