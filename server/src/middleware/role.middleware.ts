import { Request, Response, NextFunction } from 'express';
import { Role } from '../models/user.model';

// Extend Express Request interface to include 'user'
declare global {
  namespace Express {
    interface Request {
      user?: { role: Role };
    }
  }
}

export function roleMiddleware(roles: Role[]) {
    return (req: Request, res: Response, next: NextFunction): void => {
      if (!req.user || !roles.includes(req.user.role)) {
        res.status(403).json({ message: 'Forbidden' });
        return;
      }
      next();
    };
  }