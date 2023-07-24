import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.contacts;
/*export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;*/
export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
 [selectContacts, selectFilter], 
 (contacts, queryFilter) => {
    const filterContacts = queryFilter
  ?  contacts.filter(contact => 
         contacts.name.toLowerCase().includes(queryFilter)
    )
    : contacts;
    return filterContacts;
   
 }  
)