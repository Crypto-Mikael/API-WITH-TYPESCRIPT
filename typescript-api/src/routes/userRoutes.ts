import { Router } from 'express';
import UserController from '../controllers/userController';
import { userValidations } from '../validations/userValidation';

const router = Router();
const userController = new UserController;

router.post('/', userValidations, userController.saveUser);

router.get('/', userController.getAllUser);

router.get('/lancamentos/:id', userController.getLauchFromUser);

router.delete('/:id', userController.deleteUserById);

router.put('/:id', userController.updateUserById);

export default router;