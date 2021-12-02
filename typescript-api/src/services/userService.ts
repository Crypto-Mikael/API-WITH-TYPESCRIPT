import UserModel from '../models/userModel';
import { User } from '../entity/User';

const userModel = new UserModel;

class UserServices {

  async saveUser(usuario: User, email: string) {
    const userAlreadyExists = await userModel.getByEmail(email);
    if (userAlreadyExists) return false;
    const user = await userModel.saveUser(usuario);
    return user;
  };

  async getAllUser() {
    const users = await userModel.getAllUser();
    return users;
  };

  async getById(id: number) {
    const user = await userModel.getById(id);
    return user;
  };

  async getLauchFromUser(id: number) {
    const usersLauchs = await userModel.getLauchFromUser(id)
    return usersLauchs;
  };

};

export default UserServices;