import { Request, Response } from 'express';
import { Application } from '../models/application.model';

export class ApplicationController {
  static async createApplication(req: Request, res: Response) {
    const { applicationNumber, fullName, idNumber, creditFacilityType, creditFacilityAmount } = req.body;
    const userId = (req as any).user.id;

    const application = new Application({
      applicationNumber,
      userId,
      fullName,
      idNumber,
      creditFacilityType,
      creditFacilityAmount,
    });

    await application.save();
    res.status(201).json(application);
  }

  static async getApplications(req: Request, res: Response) {
    const userId = (req as any).user.id;
    const applications = await Application.find({ userId });
    res.json(applications);
  }
}
