import { createSlice } from '@reduxjs/toolkit';
const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        filter: '',
    },
    reducers: {
    addContact (state, action) {
        state.contacts.push({
          id: new Date().toISOString(),
          name: action.payload.name,
          number: action.payload.number,
      });
  },
        
      
      deleteContact(state,action) {
        state.contacts =
          state.contacts.filter((contact)=> contact.id !== action.payload);
        
      },
    
      
      addFilter(state, action) {
        state.filter = action.payload;
      },
      },
    }
  );
  export const { addContact, addFilter, deleteContact } = contactSlice.actions
  export const contactsReducer = contactSlice.reducer;

