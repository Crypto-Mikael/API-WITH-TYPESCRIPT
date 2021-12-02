import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.send('Serviços de Usuário'));

export default router;