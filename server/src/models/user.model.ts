import mongoose, { Schema } from 'mongoose';

export enum Role {
  Admin = 'Admin',
  BranchManager = 'BranchManager',
  User = 'User',
}

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: Object.values(Role), default: Role.User },
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.model('User', userSchema);