import express from 'express';

import ctrl from '../../controllers/contacts-controller.js';
import contactsSchemas from '../../schemas/contactsSchema.js';
import { isEmptyBody, validateBody, isValidId } from '../../middlewares/index.js';

const contactsRouter = express.Router();

contactsRouter.get('/', ctrl.getAllContacts);

contactsRouter.get('/:contactId', isValidId, ctrl.getById);

contactsRouter.post('/', isEmptyBody, validateBody(contactsSchemas.contactsSchema), ctrl.addContact);

contactsRouter.put(
  '/:contactId',
  isValidId,
  isEmptyBody,
  validateBody(contactsSchemas.contactsSchema),
  ctrl.updateById
);

contactsRouter.patch(
  '/:contactId/favorite',
  isValidId,
  isEmptyBody,
  validateBody(contactsSchemas.contactUpdateFavoriteSchema),
  ctrl.updateStatusContact
);

contactsRouter.delete('/:contactId', isValidId, ctrl.deleteById);

export default contactsRouter;