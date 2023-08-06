import express from 'express';

import ctrl from '../../controllers/contacts-controller.js';
import contactsSchemas from '../../schemas/contacts-schemas.js';

import {upload, authenticate, isEmptyBody, validateBody, isValidId } from '../../middlewares/index.js';

const contactsRouter = express.Router();

contactsRouter.use(authenticate);

contactsRouter.get('/', ctrl.getAllContacts);

contactsRouter.get('/:contactId', isValidId, ctrl.getById);

contactsRouter.post(
  '/',
  upload.single('avatar'),
  isEmptyBody,
  validateBody(contactsSchemas.contactsSchema),
  ctrl.addContact
);

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
  validateBody(contactsSchemas.contactUpdateFavoriteSchema),
  ctrl.updateStatusContact
);

contactsRouter.delete('/:contactId', isValidId, ctrl.deleteById);

export default contactsRouter;
