import { Request, Response } from 'express';
import LaunchService from '../services/launchService';

const launchService = new LaunchService;
const ERROR_MESSAGE = 'error interno';

class LaunchController {

  async saveLauch(req: Request, res: Response) {
    try {
      const { idUsuario, valor, descricao, data }:
      { idUsuario: number, descricao: string, valor: number, data: Date } = req.body;
      const savedLaunch = await launchService.saveLauch(idUsuario, valor, descricao, data);
      if (savedLaunch === false) {
        return res.status(404).json({ message: 'Lauch user not found'})
      }
      return res.status(201).json(savedLaunch);
    } catch (err) {
      return res.status(500).json({ message: ERROR_MESSAGE})
    };
  };

}

export default LaunchController;