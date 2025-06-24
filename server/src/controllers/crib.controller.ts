import { Request, Response } from 'express';
import { CribService } from '../services/crib.service';

export class CribController {
  static async searchIndividual(req: Request, res: Response) {
    const data = req.body;
    const result = await CribService.searchIndividual(data);
    res.json(result);
  }
}