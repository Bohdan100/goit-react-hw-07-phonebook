import axios from 'axios';

// data = all contacts
export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

// data = new contact
export async function addContact(contact) {
  const { data } = await axios.post(`/contacts/`, contact);
  return data;
}

// data = delete contact
export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
