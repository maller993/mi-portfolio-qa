import { test, expect } from '@playwright/test';
import { ApiHelper } from '../../helpers/api-helper';

test.describe('Users - Get Users API Tests', () => {
  let apiHelper: ApiHelper;

  test.beforeEach(async ({ request }) => {
    apiHelper = new ApiHelper(request);
  });

  test('CP001 - [GET] Obtener lista de usuarios y validar estructura | Tags: @Desarrollo', async () => {
    const startTime = Date.now();

    const response = await apiHelper.get('/users');

    await apiHelper.validateStatus(response, 200);
    apiHelper.validateResponseTime(startTime, 5000);

    const body = await apiHelper.getJsonResponse(response);

    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0);

    body.forEach((user: any) => {
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('name');
      expect(user).toHaveProperty('email');
      expect(typeof user.id).toBe('number');
      expect(typeof user.name).toBe('string');
      expect(typeof user.email).toBe('string');
    });
  });

  test('CP002 - [GET] Obtener usuario por ID válido - 200 | Tags: @Desarrollo', async () => {
    const response = await apiHelper.get('/users/1');

    await apiHelper.validateStatus(response, 200);

    const body = await apiHelper.getJsonResponse(response);
    expect(body).toHaveProperty('id');
    expect(body.id).toBe(1);
    expect(body).toHaveProperty('name');
    expect(body).toHaveProperty('email');
  });

  test('CP003 - [GET] Obtener usuario inexistente - 404 | Tags: @Desarrollo', async () => {
    const response = await apiHelper.get('/users/999');

    await apiHelper.validateStatus(response, 404);
  });
});