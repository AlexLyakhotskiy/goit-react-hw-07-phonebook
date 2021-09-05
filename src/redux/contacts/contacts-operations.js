import axios from 'axios';

import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

import { getArrayFromObject } from '../../utils/functions';

// everything that is commented out for json-server
// axios.defaults.baseURL = 'http://localhost:4040';
axios.defaults.baseURL =
  'https://phonebook-4ec2d-default-rtdb.europe-west1.firebasedatabase.app/';

export const getContacts = () => async dispatch => {
  dispatch(getContactsRequest());
  try {
    // const { data } = await axios.get('/contacts');
    const { data } = await axios.get('/contacts.json');
    dispatch(
      getContactsSuccess(
        // data
        getArrayFromObject(data),
      ),
    );
  } catch (error) {
    dispatch(getContactsError(error));
  }
};

export const addContact = contact => async dispatch => {
  dispatch(addContactRequest());
  try {
    // const { data } = await axios.post('/contacts', contact);
    const { data } = await axios.post('/contacts.json', contact);
    dispatch(
      addContactSuccess(
        // data
        { ...contact, id: data.name },
      ),
    );
  } catch (error) {
    dispatch(addContactError(error));
  }
};

export const deleteContact = contactId => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    // await axios.delete(`/contacts/${contactId}`);
    await axios.delete(`/contacts/${contactId}.json`);
    dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
