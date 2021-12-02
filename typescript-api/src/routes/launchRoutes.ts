import { Router } from 'express';
import { LaunchController } from '../controllers/launchController';
import UserModel from '../models/userModel';
import { Launch } from '../entity/Launch';

const router = Router();
const launchController = new LaunchController;
const userModel = new UserModel;

router.post('/', async (req, res) => {
  const { idUsuario, valor, descricao, data } = req.body;
  const user = await userModel.getById(idUsuario);

  if (user) {
    const launch = new Launch(valor, descricao, data, user);
    const savedLaunch = await launchController.saveLauch(launch);
    return res.status(201).json(savedLaunch);
  }
  return res.status(404).json({ message: 'Lauch user not found'})
});

export default router;