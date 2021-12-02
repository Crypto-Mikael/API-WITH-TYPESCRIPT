import LaunchModel from '../models/launchModel';
import { Launch } from '../entity/Launch';
import UserModel from '../models/userModel';

const launchModel = new LaunchModel;
const userModel = new UserModel;

class LaunchService {
  async saveLauch(idUsuario: number, valor: number, descricao: string, data: Date) {
    const user = await userModel.getById(idUsuario);
    if (!user) return false;
    const launch = new Launch(valor, descricao, data, user);
    const newLaunch = await launchModel.saveLauch(launch);
    return newLaunch;
  };
};

export default LaunchService;
