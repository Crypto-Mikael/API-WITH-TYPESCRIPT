import { getManager } from 'typeorm';
import { User } from '../entity/User';

export class UserController {
  async saveUser(usuario: User) {
    const savedUser = await getManager().save(usuario);
    return savedUser;
  };

  async getAllUser() {
    const user = await getManager().find(User);
    return user;
  };

  async getById(id: number) {
    const user = await getManager().findOne(User, id)
    return user;
  }

  async getLauchFromUser(id: number) {
    const usuario = await getManager().findOne(User, id, {
      relations: ['lancamento']
    });
    return usuario;
  }
};