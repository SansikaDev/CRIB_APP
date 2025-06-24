import axios from 'axios';
import { redisClient } from '../config/redis';
import env from '../config/env';

export class CribService {
  private static async getAccessToken(): Promise<string> {
    const cacheKey = 'crib_access_token';
    const cachedToken = await redisClient.get(cacheKey);
    if (cachedToken) return cachedToken;

    const response = await axios.post<{ access_token: string }>(
      env.cribTokenUrl,
      new URLSearchParams({
        grant_type: 'client_credentials',
        scope: 'cb5webservices',
        client_id: env.cribClientId,
        client_secret: env.cribClientSecret,
      }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    const token = response.data.access_token;
    await redisClient.setEx(cacheKey, 3600, token); // Cache for 1 hour
    return token;
  }

  static async searchIndividual(data: any) {
    const token = await this.getAccessToken();
    const response = await axios.post(
      `${env.cribApiBaseUrl}/search/smart/individual`,
      data,
      { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } }
    );
    return response.data;
  }

  // Add other CRIB API methods (e.g., continueSearch, getReport, etc.) similarly
}