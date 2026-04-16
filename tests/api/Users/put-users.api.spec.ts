import { test, expect } from '@playwright/test';
import { ApiHelper } from '../../../helpers/api-helper';

test.describe('Users - Update User API Tests', () => {
  let apiHelper: ApiHelper;

  test.beforeEach(async ({ request }) => {
    apiHelper = new ApiHelper(request);
  });

  test('CP001 - [PUT] Actualizar usuario con datos válidos - 200 | Tags: @Desarrollo', async () => {
    const startTime = Date.now();

    const updatedUser = {
      name: 'Maria Aller Actualizada',
      email: 'maller.updated@test.com',
    };

    const response = await apiHelper.put('/users/1', updatedUser);

    await apiHelper.validateStatus(response, 200);
    apiHelper.validateResponseTime(startTime, 5000);

    const body = await apiHelper.getJsonResponse(response);

    expect(body.name).toBe(updatedUser.name);
    expect(body.email).toBe(updatedUser.email);
  });

 test('CP002 - [PUT] Actualizar usuario inexistente - 200/500 | Tags: @Desarrollo', async () => {
  const response = await apiHelper.put('/users/999', { name: 'Test' });

  const status = response.status();
  expect([200, 500]).toContain(status);
});
  });
