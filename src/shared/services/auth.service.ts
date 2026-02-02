import { apiClient } from './api.client';
import type {
  ApiResponse,
  AuthUser,
  LoginRequest,
  RegisterRequest,
  VerifyRequest,
} from '@/shared/types/auth.types';

export const authService = {
  register: (data: RegisterRequest) =>
    apiClient<ApiResponse<AuthUser>>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  login: (data: LoginRequest) =>
    apiClient<ApiResponse<AuthUser>>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  verify: (data: VerifyRequest) =>
    apiClient<ApiResponse<AuthUser>>('/auth/verify', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};
