import express from "express";

import ctrl from "../../controllers/contacts-controller.js"
import contactsSchema from "../../schemas/contactsSchema.js";
import { validateBody } from "../../decorators/index.js"
import { isEmptyBody } from "../../middlewars/index.js"

const contactsRouter = express.Router();

contactsRouter.get('/', ctrl.getAllContacts);

contactsRouter.get('/:contactId', ctrl.getById);

contactsRouter.post('/', isEmptyBody,validateBody(contactsSchema), ctrl.addContact);

contactsRouter.delete('/:contactId', ctrl.updateById);

contactsRouter.put('/:contactId', isEmptyBody, validateBody(contactsSchema), ctrl.deleteById);

export default contactsRouter;