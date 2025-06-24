import { Router } from 'express';
import { CribController } from '../controllers/crib.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { roleMiddleware } from '../middleware/role.middleware';
import { Role } from '../models/user.model';

const router = Router();

router.post(
  '/search/individual',
  authMiddleware,
  roleMiddleware([Role.Admin, Role.BranchManager]),
  CribController.searchIndividual
);

export default router;