export const AUTH_URLS = {
  // Page Routes
  PAGES: {
    LOGIN_SELECTION: '/auth/login',
    ROLE_LOGIN: (role: string) => `/auth/login/${role}`,
  },
  
  // API Routes
  API: {
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    REFRESH: '/api/auth/refresh',
    SESSION: '/api/auth/session',
  }
} as const;
