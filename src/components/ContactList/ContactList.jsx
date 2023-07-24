import {PropTypes} from "prop-types"; 
import nanoid from 'nanoid';
import React from "react";
import ContactListItem from "../ContactListItem/ContactListItem";
import { List, Button } from  '../ContactList/ContactList.Styled'
import { deleteContact } from "redux/slice";
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selector';
 const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const onDel = id => {
      dispatch(deleteContact(id))};
   
  return (
    <List>   
    {contacts.map(({ id, name, number }) => (
        <li key={id}>
            <ContactListItem id={id} name={name} number={number}/>
           <Button type="button" onClick={() => onDel(id)}>Delete</Button>
        </li>
    ))}
</List>
);
    };      

     export default ContactList ;  
          

