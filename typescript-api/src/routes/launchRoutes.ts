import { Router } from 'express';
import { LaunchController } from '../controller/launchController';
import { UserController } from '../controller/userController';
import { Launch } from '../entity/Launch';

const router = Router();
const launchController = new LaunchController;
const userController = new UserController;

router.post('/', async (req, res) => {
  const { idUsuario, valor, descricao, data } = req.body;
  const user = await userController.getById(idUsuario);

  if (user) {
    const launch = new Launch(valor, descricao, data, user);
    const savedLaunch = await launchController.saveLauch(launch);
    return res.status(201).json(savedLaunch);
  }
  return res.status(404).json({ message: 'Lauch user not found'})
});

export default router;