import UserModel from '../models/userModel';
import { User } from '../entity/User';

const userModel = new UserModel;

class UserServices {

  async saveUser(nome: string, email: string) {
    const userAlreadyExists = await userModel.getByEmail(email);
    if (userAlreadyExists) return false; 
    const usuario = new User(nome, email);
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
    const user = await this.getById(id);
    if (!user) return false;
    const usersLauchs = await userModel.getLauchFromUser(id);
    return usersLauchs;
  };

  async deleteUserById(id: number) {
    const user = await this.getById(id);
    if (!user) return false;
    await userModel.deleteUserById(id);
    return user;
  };

  async updateUserById (id: number, nome: string) {
    const user = await this.getById(id);
    if (!user) return false;
    const updatedUser = await userModel.updateUserById(id, nome);
    return user;
  };

};

export default UserServices;