

export const selectContacts = state => state.contacts.contacts;
/*export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;*/


export const selectVisibleContacts = (state) => {
   const normalized = state.contacts.filter.toLowerCase();

   return state.contacts.contacts.filter(contact => {
       return contact.name.toLowerCase().includes(normalized);
   });
  }; 
