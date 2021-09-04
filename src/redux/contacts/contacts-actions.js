import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/add', contact => ({
  payload: { id: uuidv4(), ...contact },
}));

const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/changeFilter');

const actions = { addContact, deleteContact, changeFilter };

export default actions;
