import { test, expect } from '@playwright/test';
import { ApiHelper } from '../../../helpers/api-helper';

test.describe('Users - Create User API Tests', () => {
  let apiHelper: ApiHelper;

  test.beforeEach(async ({ request }) => {
    apiHelper = new ApiHelper(request);
  });

  test('CP001 - [POST] Crear usuario con datos válidos - 201 | Tags: @Desarrollo', async () => {
    const startTime = Date.now();

    const newUser = {
      name: 'Maria Aller',
      username: 'maller',
      email: 'maller@test.com',
      phone: '123456789',
    };

    const response = await apiHelper.post('/users', newUser);

    await apiHelper.validateStatus(response, 201);
    apiHelper.validateResponseTime(startTime, 5000);

    const body = await apiHelper.getJsonResponse(response);

    expect(body).toHaveProperty('id');
    expect(body.name).toBe(newUser.name);
    expect(body.email).toBe(newUser.email);
    expect(typeof body.id).toBe('number');
  });

  test('CP002 - [POST] Crear usuario sin nombre - 201 | Tags: @Desarrollo', async () => {
    const newUser = {
      email: 'sinnombre@test.com',
    };

    const response = await apiHelper.post('/users', newUser);

    await apiHelper.validateStatus(response, 201);

    const body = await apiHelper.getJsonResponse(response);
    expect(body).toHaveProperty('id');
  });

  test('CP003 - [POST] Crear usuario con body vacío - 201 | Tags: @Desarrollo', async () => {
    const response = await apiHelper.post('/users', {});

    await apiHelper.validateStatus(response, 201);

    const body = await apiHelper.getJsonResponse(response);
    expect(body).toHaveProperty('id');
  });
});