import { Router } from 'express';
import LaunchController from '../controllers/launchController';
import { launchValidations } from '../validations/launchValidation';

const router = Router();
const launchController = new LaunchController;

router.post('/', launchValidations, launchController.saveLauch);

export default router;