

import React from "react";
import ContactListItem from "../ContactListItem/ContactListItem";
import { List, Button } from  '../ContactList/ContactList.Styled'
import { deleteContact } from "redux/slice";
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selector';
 const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
 
  const onDel = id => {
      dispatch(deleteContact(id))};
   
  return (
    <List>   
    {contacts.map(({ id, name, number }) => (
        <li key={id}>
            <ContactListItem   id={id} name={name} number={number}/>
          
       </li>
    ))}
</List>
);
    };      

     export default ContactList ;  
          

