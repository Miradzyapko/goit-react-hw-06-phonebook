

import React from "react";

import {ListItem} from "../../components/ContactListItem/ContactListItem.Styled"
import { List, Button, Item} from  '../ContactList/ContactList.Styled'
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
            <ListItem key={id}>
                <Item>{name}: {number}</Item>
               <Button type="button" onClick={() => onDel(id)}>Delete</Button>
            </ListItem>
        ))}
    </List>
);

    };   
   

     export default ContactList ;  
          

