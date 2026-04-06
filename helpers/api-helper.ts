import { APIRequestContext, APIResponse } from '@playwright/test';

export class ApiHelper {
  private request: APIRequestContext;
  private baseURL: string;
  private authToken: string = '';

  constructor(request: APIRequestContext, baseURL?: string) {
    this.request = request;
    this.baseURL = baseURL || process.env.API_BASE_URL || 'https://jsonplaceholder.typicode.com';
  }

  setAuthToken(token: string) {
    this.authToken = token;
  }

  private getHeaders(extraHeaders?: Record<string, string>) {
    return {
      'Content-Type': 'application/json',
      ...(this.authToken && { Authorization: `Bearer ${this.authToken}` }),
      ...extraHeaders,
    };
  }

  async get(endpoint: string, options?: any): Promise<APIResponse> {
    return this.request.get(`${this.baseURL}${endpoint}`, {
      headers: this.getHeaders(options?.headers),
    });
  }

  async post(endpoint: string, body: any, options?: any): Promise<APIResponse> {
    return this.request.post(`${this.baseURL}${endpoint}`, {
      headers: this.getHeaders(options?.headers),
      data: body,
    });
  }

  async delete(endpoint: string, options?: any): Promise<APIResponse> {
    return this.request.delete(`${this.baseURL}${endpoint}`, {
      headers: this.getHeaders(options?.headers),
    });
  }

  async getJsonResponse(response: APIResponse) {
    return response.json();
  }

  async validateStatus(response: APIResponse, expectedStatus: number) {
    const status = response.status();
    if (status !== expectedStatus) {
      throw new Error(`Expected status ${expectedStatus} but got ${status}`);
    }
  }

  validateResponseTime(startTime: number, maxMs: number) {
    const elapsed = Date.now() - startTime;
    if (elapsed > maxMs) {
      throw new Error(`Response time ${elapsed}ms exceeded limit of ${maxMs}ms`);
    }
  }
}