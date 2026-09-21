# Auth Module Theme Contract

This module depends on the following CSS variables being mapped in `tailwind.config.ts` and defined in `globals.css`. It strictly adheres to the rule of not using arbitrary or hardcoded hex colors for semantic UI elements (except specifically designed role-brand colors).

## Backgrounds
- `--bg-main` (App shell background)
- `--bg-card` (Login card background)

## Text
- `--text-primary` (Primary headings and labels)
- `--text-secondary` (Subtext and placeholders)

## Borders
- `--border` (Input and card borders)

## Role Brand Colors
The role-specific login cards utilize a set of predefined branded colors specific to each role (e.g., `#0F766E` for School Admin). These are currently declared in `auth_constants/` or `login_mock_data.ts` and used via Tailwind arbitrary values in the specific login UI because they represent distinct branded entry points rather than the core application theme.
