import express from 'express';

import usersSchemas from '../../schemas/users-schemas.js';
import { authenticate, validateBody } from '../../middlewares/index.js';
import authController from '../../controllers/auth-controller.js';

const authRouter = express.Router();

authRouter.post('/register', validateBody(usersSchemas.userSignUpSchema), authController.signup);

authRouter.post('/login', validateBody(usersSchemas.userSignInSchema), authController.signin);

authRouter.get('/current', authenticate, authController.getCurrent);

authRouter.post('/logout', authenticate, authController.signout)

export default authRouter;