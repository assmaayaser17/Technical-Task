import { API_CONFIG } from '@/shared/config/api';

type RequestConfig = RequestInit & {
  params?: Record<string, string>;
};

async function buildUrl(endpoint: string, params?: Record<string, string>): Promise<string> {
  const url = new URL(`${API_CONFIG.BASE_URL}${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }
  return url.toString();
}

export async function apiClient<T>(
  endpoint: string,
  options: RequestConfig = {}
): Promise<T> {
  const { params, ...fetchOptions } = options;
  const url = await buildUrl(endpoint, params);

  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...(fetchOptions.headers as Record<string, string>),
  };

  const response = await fetch(url, {
    ...fetchOptions,
    headers: defaultHeaders,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'An error occurred');
  }

  return data as T;
}
