
import React from "react";
import ContactListItem from "../ContactListItem/ContactListItem";
import { List } from  '../ContactList/ContactList.Styled'

import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selector';
 const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

   
  
    return (
        <List>   
        {contacts.map(({ id, name, number }) => (
            <li key={id}>
                <ContactListItem id={id} name={name} number={number}/>
             
            </li>
          ))}
       
        
          

    </List>
          
       );
          };
     export default ContactList ;  
          

