import { Router } from 'express';
import { ApplicationController } from '../controllers/application.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { roleMiddleware } from '../middleware/role.middleware';
import { Role } from '../models/user.model';

const router = Router();

router.post(
  '/',
  authMiddleware,
  roleMiddleware([Role.User, Role.BranchManager]),
  ApplicationController.createApplication
);
router.get(
  '/',
  authMiddleware,
  roleMiddleware([Role.User, Role.BranchManager, Role.Admin]),
  ApplicationController.getApplications
);

export default router;