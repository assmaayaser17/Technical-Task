'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { useRouter } from 'next/navigation';
import type { AuthUser } from '@/shared/types/auth.types';
import { STORAGE_KEYS } from '@/shared/constants/storage';

interface AuthContextValue {
  user: AuthUser | null;
  token: string | null;
  isLoading: boolean;
  login: (user: AuthUser) => void;
  logout: () => void;
  setUser: (user: AuthUser | null) => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function getStoredAuth(): { user: AuthUser | null; token: string | null } {
  if (typeof window === 'undefined') return { user: null, token: null };
  try {
    const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    const userStr = localStorage.getItem(STORAGE_KEYS.USER_DATA);
    const user = userStr ? (JSON.parse(userStr) as AuthUser) : null;
    return { user, token };
  } catch {
    return { user: null, token: null };
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const { user: storedUser, token: storedToken } = getStoredAuth();
    setUserState(storedUser);
    setToken(storedToken);
    setIsLoading(false);
  }, []);

  const login = useCallback((authUser: AuthUser) => {
    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, authUser.token);
    localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(authUser));
    setUserState(authUser);
    setToken(authUser.token);
    router.push('/dashboard');
  }, [router]);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER_DATA);
    setUserState(null);
    setToken(null);
    router.push('/login');
  }, [router]);

  const setUser = useCallback((newUser: AuthUser | null) => {
    setUserState(newUser);
    if (newUser) {
      localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(newUser));
    } else {
      localStorage.removeItem(STORAGE_KEYS.USER_DATA);
    }
  }, []);

  const value: AuthContextValue = {
    user,
    token,
    isLoading,
    login,
    logout,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
