import { Router } from 'express';
import UserController from '../controllers/userController';
import { userValidations } from '../validations/userValidation';

const router = Router();
const userController = new UserController;

router.post('/', userValidations, userController.saveUser);

router.get('/', userController.getAllUser);

router.get('/lancamentos/:id', userController.getLauchFromUser);

export default router;