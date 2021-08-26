// import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './contactListItem.module.css';

// import contactsOperations from "../redux/contacts/contacts-operations";

// // const ContactListItem = ({ name, number, id, onDelete }) => (
//  const ContactListItem = ({ name, number, id, onDelete }) => (
//   <li className={styles.contactListItem}>
//     <p className={styles.contact}>
//       {name}: {number}{' '}
//     </p>
//     <button
//      className={styles.buttonDelete}
//       type="button"
//       // onClick={() => onDelete(id)}
//       onClick={() => dispatch(contactsOperations.deleteContact(id))}
//     >
//       Delete
//     </button>
//   </li>
// );

// ContactListItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

// export default ContactListItem;











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