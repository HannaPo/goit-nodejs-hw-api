import express from 'express';

import usersSchemas from '../../schemas/users-schemas.js';
import {  validateBody } from '../../middlewares/index.js';
import authController from '../../controllers/auth-controller.js'

const authRouter = express.Router();

authRouter.post('/register', validateBody(usersSchemas.userSignUpSchema), authController.signup);

authRouter.post('/login', validateBody(usersSchemas.userSignInSchema), authController.signin);

export default authRouter;