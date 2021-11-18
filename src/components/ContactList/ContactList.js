import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchContacts,
  removeContact,
  // addContact,
} from '../../store/contactSlice';

import { getContacts, getFilter } from '../../store/contactsSelectors';

import s from '../ContactList/ContactList.module.css';
import { TiUserDeleteOutline } from 'react-icons/ti';

function ContactList() {
  // const contacts = useSelector(state => state.contacts.contacts);
  // const filter = useSelector(state => state.contacts.filter);
  const { status, error } = useSelector(state => state.contacts);

  const dispatch = useDispatch();
  // console.log('list contacts', contacts);
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  // console.log('list getContacts', contactsGet);

  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
  // console.log('visibleContacts', visibleContacts);
  // const visibleContacts = contacts;
  console.log('list contacts', visibleContacts);

  return (
    <div>
      {status === 'loading' && <h2>Loading</h2>}
      {status === 'rejected' && <h2>Ups..{error}</h2>}
      {/* {contacts.length > 0 &&( */}
      <ul className={s.list}>
        {/* {contacts && */}
        {/* {status === 'resolved' && */}

        {/* visibleContacts.map(contact => ( */}
        {contacts.length > 0 &&
          // contacts.map(contact => (
          visibleContacts.map(contact => (
            <li className={s.item} key={contact.id}>
              <p>
                <span>{contact.name}:</span> <span>{contact.phone}</span>
              </p>

              <button
                className={s.buttonDelete}
                type="button"
                // onClick={onDeleteContact(contact.id)}
                onClick={() => dispatch(removeContact(contact.id))}
              >
                <TiUserDeleteOutline color="red" size="18px" />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ContactList;

// ========================================================
// import { useSelector } from 'react-redux';

// import { useDispatch } from 'react-redux';
// import { deleteContact } from '../../store/contactSlice';

// // import PropTypes from 'prop-types';
// import s from '../ContactList/ContactList.module.css';
// import { TiUserDeleteOutline } from 'react-icons/ti';

// import { connect } from 'react-redux';
// // import * as actions from '../../redux/phonebook/phonebook-action';

// // function ContactList({ onDeleteContact, filter }) {
// function ContactList() {
//   const contacts = useSelector(state => state.contacts.contacts);
//   const filter = useSelector(state => state.contacts.filter);
//   console.log('list filter', filter);
//   console.log('list contacts', contacts);

//   // const visibleContacts = (contacts, filter) => {
//   // const normalizedFilter = filter.toLowerCase().trim();

//   // return contacts.filter(
//   //   contact =>
//   //     contact.name.toLowerCase().includes(normalizedFilter),
//   // );
//   // };

//   const normalizedFilter = filter.toLowerCase();
//   const visibleContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
//   console.log('visibleContacts', visibleContacts);

//   const dispatch = useDispatch();
//   // const onDeleteContact= (id) => dispatch(deleteContact(id))

//   return (
//     <div>
//       <ul className={s.list}>
//         {/* {contacts && */}
//         {visibleContacts.map(contact => (
//           <li className={s.item} key={contact.id}>
//             <p>
//               <span>{contact.name}:</span> <span>{contact.number}</span>
//             </p>

//             <button
//               className={s.buttonDelete}
//               type="button"
//               // onClick={onDeleteContact(contact.id)}
//               onClick={() => dispatch(deleteContact(contact.id))}
//             >
//               <TiUserDeleteOutline color="red" size="18px" />
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // ContactList.propTypes = {
// //   contacts: PropTypes.array.isRequired,
// //   onDeleteContact: PropTypes.func,
// // };
// const getVisibleContacts = ({ contacts, filter }) => {
//   // const normalizedFilter = filter.toLowerCase();
//   // return contacts.filter(contact =>
//   //   contact.name.toLowerCase().includes(normalizedFilter),
//   // );
//   return contacts;
// };

// // const getVisibleContacts = (allContacts, filter) => {
// //   const normalizedFilter = filter.toLowerCase();
// //   return allContacts.filter(contact =>
// //     contact.name.toLowerCase().includes(normalizedFilter),
// //   );
// // };
// // const mapStateToProps = ({ phoneBook: { contacts, filter } }) => ({
// const mapStateToProps = ({ contacts: { contacts, filter } }) => ({
//   contacts: getVisibleContacts(contacts, filter),
// });

// // const mapStateToProps = state => {
// //   const { filter, contacts } = state.contacts;
// //   const normalizedFilter = filter.toLowerCase();
// //   const visibleContacts =  contacts.filter(contact =>
// //       contact.name.toLowerCase().includes(normalizedFilter),
// //   );

// //   return {
// //     contacts: visibleContacts,
// //   }
// // };

// const mapDispatchToProps = dispatch => ({
//   // onDeleteContact: id => dispatch(actions.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
// // export default ContactList;
