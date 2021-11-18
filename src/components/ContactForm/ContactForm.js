import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../store/contactSlice';

import s from '../ContactForm/ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(state => state.contacts.contacts);

  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  }

  const reset = () => {
    setName('');
    setPhone('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      name: name,
      phone: phone,
    };

    if (contacts) {
      if (contacts.some(contact => contact.name.includes(name))) {
        alert(`${name} is already in contacts!`);
        reset();
        return;
      }
    }

    dispatch(addContact(newContact));
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className={s.contactForm}>
      <label className={s.label}>
        Name:
        <input
          className={s.input}
          type="text"
          name="name"
          autoComplete="off"
          value={name}
          onChange={handleChange}
          placeholder="Tom Smit"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label className={s.label}>
        Phone:
        <input
          className={s.input}
          type="tel"
          name="phone"
          autoComplete="off"
          value={phone}
          onChange={handleChange}
          placeholder="050-50-50"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>

      <input className={s.submitButton} type="submit" value="Add contact" />
    </form>
  );
}

export default ContactForm;
