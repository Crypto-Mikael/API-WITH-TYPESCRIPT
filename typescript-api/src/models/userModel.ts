import { getManager } from 'typeorm';
import { User } from '../entity/User';

class UserModel {
  async saveUser(usuario: User) {
    const savedUser = await getManager().save(usuario);
    return savedUser;
  };

  async getAllUser() {
    const user = await getManager().find(User);
    return user;
  };

  async getById(id: number) {
    const user = await getManager().findOne(User, id);
    return user;
  };

  async getLauchFromUser(id: number) {
    const usuario = await getManager().findOne(User, id, {
      relations: ['lancamento']
    });
    return usuario;
  };

  async getByEmail(email: string) {
    const user = await getManager().findOne(User, { where: { email } });
    return user;
  };

  async deleteUserById(id: number) {
    await getManager().delete(User, id)
    return true;
  };

  async updateUserById(id: number, nome: string) {
    await getManager().update(User, id, { nome })
    const updatedUser = this.getById(id);
    return updatedUser;
  };

};

export default UserModel;