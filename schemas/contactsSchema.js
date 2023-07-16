import Joi from 'joi';

const contactsSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required().messages({
    'any.required': 'missing required name field',
  }),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required()
    .messages({
      'any.required': 'missing required email field',
    }),
  phone: Joi.string()
    .pattern(/^\+\d{1,3}-\d{3}-\d{3}-\d{4}$/)
    .required()
    .messages({
      'any.required': 'missing required phone field',
    }),
});

export default contactsSchema;