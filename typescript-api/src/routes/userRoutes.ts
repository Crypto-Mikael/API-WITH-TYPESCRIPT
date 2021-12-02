import { Router } from 'express';
import { UserController } from '../controller/userController';
import { User } from '../entity/User';

const router = Router();
const userController = new UserController;

router.post('/', async (req, res) => {
  const { nome, email } = req.body;
  const user = new User(nome, email);
  const savedUser = await userController.saveUser(user);
  return res.status(201).json(savedUser);
});

router.get('/', async (_req, res) => {
  const users = await userController.getAllUser();
  return res.status(200).json(users);
});

router.get('/lancamentos/:idUsuario', async (req, res) => {
  const idUsuario = Number(req.params.idUsuario);
  const lancamentos = await userController.getLauchFromUser(idUsuario);
  return res.status(200).json(lancamentos);
});

export default router;