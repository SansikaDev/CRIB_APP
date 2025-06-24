import mongoose, { Schema } from 'mongoose';

const applicationSchema = new Schema({
  applicationNumber: { type: String, required: true, unique: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  fullName: { type: String, required: true },
  idNumber: { type: String, required: true },
  creditFacilityType: { type: String, required: true },
  creditFacilityAmount: { type: Number, required: true },
  status: { type: String, default: 'Pending' },
  cribReport: { type: Schema.Types.Mixed },
  createdAt: { type: Date, default: Date.now },
});

export const Application = mongoose.model('Application', applicationSchema);