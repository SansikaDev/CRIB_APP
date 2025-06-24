import { Router } from 'express';
import authRoutes from './auth.routes';
import cribRoutes from './crib.routes';
import applicationRoutes from './application.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/crib', cribRoutes);
router.use('/applications', applicationRoutes);
export default router;