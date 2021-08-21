import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('counter/formSubmitHandler', ({ name, number }) => ({
    payload: {
        id: shortid.generate(),
        name,
        number,
    }, 
}));
const deleteContact = createAction('counter/deleteContacts');
const changeFilter = createAction('counter/changeFilter');

// eslint-disable-next-line
export default { addContact, deleteContact, changeFilter };


















//Redux

// const changeFilter = element => ({
//     type:types.CHANGE_FILTER,
//     payload:element,
// });

// const deleteContacts = contactId =>({
//     type:types.DELETE_CONTACTS,
//     payload:contactId,
//   });

//   const formSubmitHandler =  ({ name, number }) => ({
//         type: types.SUBMIT_HANDLER,
//         payload: {
//             id: shortid.generate(),
//             name,
//             number,
//         },
//     });

// const exportedObject = {
//     changeFilter,
//     deleteContacts,
//     formSubmitHandler,
//   };
  
//   export default exportedObject;
