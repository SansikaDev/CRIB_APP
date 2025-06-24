import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.model';
import env from '../config/env';

export class AuthService {
  static async register(username: string, password: string, role: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword, role });
    await user.save();
    return user;
  }

  static async login(username: string, password: string) {
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: user._id, role: user.role }, env.jwtSecret, { expiresIn: '1d' });
    return { token, user };
  }
}