/*import { nanoid } from 'nanoid';
const addContact = ({ name, number }) => {
    const contacts = {
      id: nanoid(),
      name,
      number,
    };

    const checkContact = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());
    if (checkContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    setContacts(prevState => 
       [contact, ...prevState]
    );

  }
  const handleDeleteContact = id => {
    setContacts(prevState => 
      prevState.filter(el => el.id !== id),
    );
  };
  export const setFilter = value => {
    return {
      type: "filter/setFilter",
      payload: value,
    };
  };*/

  