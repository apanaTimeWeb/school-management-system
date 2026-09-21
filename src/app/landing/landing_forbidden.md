# Forbidden Patterns in Landing Module

1. **Do not import dashboard or internal app components.**
   - The landing page must remain lightweight and isolated from heavy internal state/components.
2. **Do not use auth-protected API routes.**
   - All data fetched on the landing page (if any) must be public.
3. **Do not perform authentication state checks.**
   - Session validation should happen within the `auth` module or protected route groups, not in the public landing page layout.
