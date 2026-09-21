# Forbidden Patterns in Auth Module

1. **Do not use `localStorage` or `sessionStorage` for sensitive tokens.** 
   - All session tokens must be stored in secure HTTP-only cookies.
2. **Do not share login components across roles if they have distinct authentication requirements or UI.** 
   - Each role must maintain its isolated login view if customized.
3. **Do not bypass the standard API client for authentication requests.**
   - All auth calls must go through the centralized HTTP transport to ensure global interceptors (like error handling) are applied.
4. **Do not expose raw error messages from the backend.**
   - Always display safe, user-friendly messages for login failures to prevent enumeration attacks.
5. **Do not add feature mock data outside this module.**
   - Auth-related mock endpoints must stay in `auth_mocks/`.
