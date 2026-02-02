export interface AuthUser {
  id: number;
  type: string;
  name: string;
  email: string;
  mobile_country_code: string;
  mobile: string;
  image: string;
  email_verified_at: boolean | string | null;
  count_items_cart: number;
  token: string;
}

export interface ApiResponse<T> {
  status: boolean;
  status_code: number;
  data: T;
  message: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  mobile: string;
  mobile_country_code: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface VerifyRequest {
  email: string;
  code: string;
}
