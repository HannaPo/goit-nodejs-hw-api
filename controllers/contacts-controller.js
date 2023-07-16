import ContactsService from '../models/contacts.js';
import { ctrlWrapper } from "../decorators/index.js";
import { HttpError } from '../helpers/index.js';

const getAllContacts = async (req, res, next) => {
  const result = await ContactsService.listContacts();
  res.json(result);
};

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await ContactsService.getContactById(contactId);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

const addContact = async (req, res) => {
  const result = await ContactsService.addContact(req.body);
  res.status(201).json(result);
};

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await ContactsService.updateContact(contactId, req.body);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const result = await ContactsService.removeContact(contactId);
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.status(200).json({
    message: 'contact deleted',
  });
};

export default {
  getAllContacts: ctrlWrapper(getAllContacts),
  getById: ctrlWrapper(getById),
  addContact: ctrlWrapper(addContact),
  updateById: ctrlWrapper(updateById),
  deleteById: ctrlWrapper(deleteById),
}
