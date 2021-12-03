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
      return res.status(500).json({ message: err.message });
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
      if (lancamentos === false) {
        return res.status(404).json({ message: 'Usuario não existente' });
      } 
      return res.status(200).json(lancamentos);
    } catch (err) {
      return res.status(500).json({ message: ERROR_MESSAGE });
    };
  };

  async deleteUserById(req: Request, res: Response) {
    try {
      const idUsuario = Number(req.params.id);
      const user = await userService.deleteUserById(idUsuario);
      if (user === false) {
        return res.status(404).json({ message: 'Usuario não existente' });
      } 
      return res.status(200).json({ message: `Usuario com email: [${user.email}] deletado` });
    } catch (err) {
      return res.status(500).json({ message: ERROR_MESSAGE });
    }
  };

  async updateUserById(req: Request, res: Response) {
    try {
      const { nome }: { nome: string } = req.body;
      const idUsuario = Number(req.params.id);
      const user = await userService.updateUserById(idUsuario, nome);
      if (user === false) {
        return res.status(404).json({ message: 'Usuario não existente' })
      }
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json({ message: ERROR_MESSAGE });
    }
  };

};

export default UserController;