import { getManager } from 'typeorm';
import { Launch } from '../entity/Launch';
class LaunchController {
  async saveLauch(lancamento: Launch) {
    const savedLauch = getManager().save(lancamento);
    return savedLauch;
  };
};

export default LaunchController;