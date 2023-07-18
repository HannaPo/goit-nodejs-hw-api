import express from 'express';

import ctrl from '../../controllers/contacts-controller.js';
import contactsSchema from '../../schemas/contactsSchema.js';
import { isEmptyBody, validateBody } from '../../middlewares/index.js';

const contactsRouter = express.Router();

contactsRouter.get('/', ctrl.getAllContacts);

contactsRouter.get('/:contactId', ctrl.getById);

contactsRouter.delete('/:contactId', ctrl.deleteById);

contactsRouter.post('/', isEmptyBody, validateBody(contactsSchema), ctrl.addContact);

contactsRouter.put('/:contactId', isEmptyBody, validateBody(contactsSchema), ctrl.updateById);

export default contactsRouter;