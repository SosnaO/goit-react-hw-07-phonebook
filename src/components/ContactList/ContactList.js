import { useSelector, useDispatch } from "react-redux";

import { contactsOperations, contactsSelectors} from '../redux/contacts'; 
import ContactlistItem from './ContactListItem'
// import styles from './contactListItem.module.css';

function  ContactList ()  { 
  const dispatch = useDispatch();
  const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);
  // const contacts = useSelector(contactsSelectors.getContacts);
  //   const isLoading = useSelector(contactsSelectors.getLoading);
  // const error = useSelector(contactsSelectors.getError);

   const onDelete = id => dispatch(contactsOperations.deleteContact(id))
      
   return (
    <ul>
    {visibleContacts.map(({ name, number, id }) => ( 
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
   
   
   
   
   
   
   
   
   
   //  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);
       
      // return (
      // <>
      //     {contacts.length > 0 && !error && (
      //  <ul>
      //     {/* {visibleContacts.map(({ name, number, id }) => (  */}
      //     {visibleContacts.map(({ name, number, id }) => ( 
      //       //  <ContactlistItem 
      //       <li className={styles.contactListItem} key={id}>
      //           <p>
      //             <b>{name}</b>
      //             <em>{number}</em>
      //           </p>
      //           <button
      //             className={styles.buttonDelete}
      //             type="button"
      //             onClick={()=>onDelete(id)}
      //               // onClick={() => dispatch(contactsOperations.deleteContact(id))}
      //           >
      //              Delete
      //           </button>
      //       </li>



                //  id={id}
                //  name={name}
                //  number={number}
                // onDelete={()=>onDelete(id)}

                //  onDelete={() => dispatch(contactsOperations.deleteContact(id))}
                // />
        //  ))}
//         </ul>
//     )}

//           {!contacts.length && !error && !isLoading && (
//               <p>
//             Your phonebook is empty. Please add contact.
//           </p>
//            )}

//       {/* {error && <error>} />} */}
//     </>
      
//   );
// }

// export default ContactList;















// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { contactsOperations, contactsSelectors } from '../../redux/contacts';
// import { motion, AnimatePresence } from 'framer-motion';
// import { variants } from '../../utils/motionVar';
// import ErrorView from '../ErrorView';
// import { ReactComponent as DeleteIcon } from '../../img/delete.svg';
// import s from './ContactList.module.css';

// function ContactList() {
//   const dispatch = useDispatch();
//   const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);
//   const contacts = useSelector(contactsSelectors.getContacts);
//   const isLoading = useSelector(contactsSelectors.getLoading);
//   const error = useSelector(contactsSelectors.getError);

//   useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

//   return (
//     <>
//       {contacts.length > 0 && !error && (
//         <motion.ul className={s.list}>
//           <AnimatePresence>
//             {visibleContacts.map(({ id, name, number }) => (
//               <motion.li
//                 className={s.item}
//                 key={id}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 transition="transition"
//                 variants={variants}
//               >
//                 <p className={s.info}>
//                   <b>{name}</b>
//                   <em>{number}</em>
//                 </p>
//                 <button
//                   className={s.btn}
//                   type="button"
//                   onClick={() => dispatch(contactsOperations.deleteContact(id))}
//                 >
//                   <DeleteIcon width="26" height="26" />
//                 </button>
//               </motion.li>
//             ))}
//           </AnimatePresence>
//         </motion.ul>
//       )}

//       {!contacts.length && !error && !isLoading && (
//         <AnimatePresence>
//           <motion.p
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             transition="transition"
//             variants={variants}
//           >
//             Your phonebook is empty. Please add contact.
//           </motion.p>
//         </AnimatePresence>
//       )}

//       {error && <ErrorView message={error.message} />}
//     </>
//   );
// }

// export default ContactList;