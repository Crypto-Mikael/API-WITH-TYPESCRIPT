import { Request, Response } from 'express';
import UserServices from '../services/userService';

const ERROR_MESSAGE = 'error interno';
const userService = new UserServices;
class UserController {

  async saveUser(req: Request, res: Response) {
    try {
      const { nome, email }: { nome: string, email: string } = req.body;
      const savedUser = await userService.saveUser(nome, email);
      if (savedUser === false) {
        return res.status(406).json({ message: 'Email already exists' });
      }
      return res.status(201).json(savedUser);
    } catch (err) {
      return res.status(500).json({ message: ERROR_MESSAGE });
    };
  };

  async getAllUser(_req: Request, res: Response) {
    try {
      const users = await userService.getAllUser();
      return res.status(200).json(users);
    } catch (err) {
      return res.status(500).json({ message: ERROR_MESSAGE });
    };
  };

  async getLauchFromUser(req: Request, res: Response) {
    try {
      const idUsuario = Number(req.params.id);
      const lancamentos = await userService.getLauchFromUser(idUsuario);
      return res.status(200).json(lancamentos);
    } catch (err) {
      return res.status(500).json({ message: ERROR_MESSAGE });
    };
  };

};

export default UserController;