import fs from 'fs/promises';
import path from 'path';
import { nanoid } from 'nanoid';

const contactsPath = path.resolve('models', 'contacts.json');

const updateContacts = movies => fs.writeFile(moviesPath, JSON.stringify(movies, null, 2));

export const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

export const getContactById = async contactId => {
  const contacts = await listContacts();
  const result = contacts.find(item => item.id === contactId);
  return result || null;
};

export const removeContact = async contactId => {
  const contacts = await listContacts();
  const index = contacts.findIndex(item => item.id === contactId);
  if (index === -1) {
    return null;
  }
  const [removedContact] = contacts.splice(index, 1);
  await updateContacts(contacts);
  return removedContact;
};

export const addContact = async body => {
  const { name, email, phone } = body;
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

export const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const index = contacts.findIndex(item => item.id === contactId);
  if (index === -1) {
    return null;
  }

  contacts[index] = { id: contactId, ...body };
  const updatedContact = contacts[index];

  await updateContacts(contacts);
  return updatedContact;
};

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
