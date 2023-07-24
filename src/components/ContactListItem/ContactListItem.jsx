import React from 'react';
import propTypes from 'prop-types';
import { Button } from './ContactList.Styled';
import { ListItem } from './ContactListItem.Styled'
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/slice';
  const ContactListItem = ({ name, number, id }) => {
    const dispatch = useDispatch();
    const handleDeleteContact = () => {
        dispatch(deleteContact(id));
    };
  return (
    <ListItem>
      <li>
        {name}: {number}
      </li>
      <Button type="button" onClick={handleDeleteContact} 
      title="Delete">
        
      </Button>
    </ListItem>
  )}
export default ContactListItem;
ContactListItem.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
 number: propTypes.string.isRequired, 
  
}