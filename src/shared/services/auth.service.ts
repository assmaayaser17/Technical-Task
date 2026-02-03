import { apiClient } from "./api.client";
import type {
  ApiResponse,
  AuthUser,
  LoginRequest,
  RegisterRequest,
  VerifyRequest,
} from "@/shared/types/auth.types";

export const authService = {
  // Fetch register api
  register: (data: RegisterRequest) =>
    apiClient<ApiResponse<AuthUser>>("/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  // Fetch login api
  login: (data: LoginRequest) =>
    apiClient<ApiResponse<AuthUser>>("/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  // Fetch verify api
  verifyEmail: (data: VerifyRequest) =>
    apiClient<ApiResponse<AuthUser>>("/auth/verify-email", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  // Fetch resend code api
  resendVerificationCode: (data: { email: string }) =>
    apiClient<ApiResponse<unknown>>("/auth/verify-email/resend-code", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};
