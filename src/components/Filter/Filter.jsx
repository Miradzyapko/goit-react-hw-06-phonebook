import React from "react";

import { Input, Label } from "./Filter.Styled";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from '../../redux/slice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.contacts.filter);
  
  
   
  
  return (
 
    <Label>Find contact by name<Input type = "text" value ={filterValue} onChange={(e) => dispatch(addFilter(e.target.value))}/>
</Label>

);

  }
  