import Joi from 'joi';

const contactsSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required().messages({
    'any.required': 'missing required name field',
  }),
  email: Joi.string().email().required().messages({
    'any.required': 'missing required email field',
  }),
  phone: Joi.string()
    .regex(/^[0-9 ()+-]+$/)
    .required()
    .messages({
      'any.required': 'missing required phone field',
    }),
  favorite: Joi.boolean().required().messages({
    'any.required': `missing required favorite field`,
  }),
});

const contactUpdateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required().messages({
    'any.required': 'missing field favorite',
  }),
});

export default { contactsSchema, contactUpdateFavoriteSchema };