import { test, expect } from '@playwright/test';
import { ApiHelper } from '../../../helpers/api-helper';

test.describe('Users - Delete User API Tests', () => {
  let apiHelper: ApiHelper;

  test.beforeEach(async ({ request }) => {
    apiHelper = new ApiHelper(request);
  });

  test('CP001 - [DELETE] Eliminar usuario existente - 200 | Tags: @Desarrollo', async () => {
    const startTime = Date.now();

    const response = await apiHelper.delete('/users/1');

    await apiHelper.validateStatus(response, 200);
    apiHelper.validateResponseTime(startTime, 5000);
  });

  test('CP002 - [DELETE] Eliminar usuario inexistente - 200 | Tags: @Desarrollo', async () => {
    // jsonplaceholder devuelve 200 para cualquier DELETE
    const response = await apiHelper.delete('/users/999');

    await apiHelper.validateStatus(response, 200);
  });
});