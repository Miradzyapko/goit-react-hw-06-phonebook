
import React from "react";
import ContactListItem from "../ContactListItem/ContactListItem";


import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selector';
 const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

   
  
    return (
        <ul>   
        {contacts.map(({ id, name, number }) => (
            <li key={id}>
                <ContactListItem id={id} name={name} number={number}/>
             
            </li>
          ))}
       
        
          

    </ul>
          
       );
          };
     export default ContactList ;  
          

