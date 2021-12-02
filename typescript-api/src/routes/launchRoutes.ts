import { Router } from 'express';
import { LaunchController } from '../controllers/launchController';

const router = Router();
const launchController = new LaunchController;

router.post('/', launchController.saveLauch);

export default router;