import { describe, it, expect, vi, beforeEach } from 'vitest'
import { healthRoute } from '../../services/healthRoute'
import * as api from '../../services/api'

vi.mock('../../services/api')

describe('healthRoute', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  describe('check', () => {
    it('should return the health status when API responds successfully', async () => {
    
        vi.mocked(api.fetchFromApi).mockResolvedValue({ status: "OK" });
        const result = await healthRoute.check();
        await expect(result).toEqual({ status: "OK" });
    
    });

    it('should throw an error when API fails', async () => {
    
        vi.mocked(api.fetchFromApi).mockRejectedValue(new Error("API failed"));
        await expect(healthRoute.check()).rejects.toThrow("API failed");
    
    });
  })
})
