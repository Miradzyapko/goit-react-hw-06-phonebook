import { ContactForm } from './ContactForm/ContactForm';

import { Container, Title } from './ContactForm/ContactForm.styled';

import  ContactList  from './ContactList/ContactList';
import { Filter } from './Filter/Filter';




export const App = () => {


    

    


     
 
  
    return (
      <Container>
      <ContactForm title="Phonebook" /* onSubmit={addContact}*//>
      
       <Title>Contacts</Title>
       <Filter
       /* onChange={changeFilter}
  value={filterValue}*/
/>
       <ContactList title="Contacts"
     />



</Container>
  )

  };
  