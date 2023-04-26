import jwt from 'jsonwebtoken';
import { Result } from '@/common/core/Result';
import { auth } from '@/common/middlewares/auth';
import { NextFunction, Request, Response, response } from 'express';

jest.mock('jsonwebtoken');

describe('Auth Middleware Test', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction = jest.fn();

  beforeEach(() => {
    mockRequest = {
      headers: {}
    };
    mockResponse = {
      json: jest.fn()
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  test('it should throw 401 error with no auth headers', () => {
    expect(mockResponse.json).toBeCalledWith(0);
  });

  test('it should call next function with valid auth token', () => {
    expect(mockResponse.json).toBeCalledWith(0);
  });

  test('it should throw Jwt Expired error with expired token', () => {
    expect(mockResponse.json).toBeCalledWith(0);
  });

  test('it should throw error with invalid auth token', () => {
    expect(mockResponse.json).toBeCalledWith(0);
  });
});
