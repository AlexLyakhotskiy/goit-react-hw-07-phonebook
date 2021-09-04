export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getLoading = state => state.contacts.loading;

export const getFiltredContact = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase()),
  );
};
