import Joi from 'joi';

const userSignUpSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': 'missing required email field',
  }),
  password: Joi.string().min(6).required().messages({
    'any.required': 'missing required password field',
  }),
  subscription: Joi.string(),
});

const userSignInSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': 'missing required email field',
  }),
  password: Joi.string().min(6).required().messages({
    'any.required': 'missing required password field',
  }),
});

export default { userSignUpSchema, userSignInSchema };