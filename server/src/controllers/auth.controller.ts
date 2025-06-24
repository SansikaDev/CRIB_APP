import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

export class AuthController {
  static async register(req: Request, res: Response) {
    const { username, password, role } = req.body;
    const user = await AuthService.register(username, password, role);
    res.status(201).json({ user });
  }

  static async login(req: Request, res: Response) {
    const { username, password } = req.body;
    const { token, user } = await AuthService.login(username, password);
    res.json({ token, user });
  }
}