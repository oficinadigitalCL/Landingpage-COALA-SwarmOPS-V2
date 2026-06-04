# Security Policy — COALA SwarmOPS Landing

## Content Security Policy
This site uses a strict Content-Security-Policy delivered via `<meta>` tag:
- No inline scripts allowed
- All assets self-hosted
- `'unsafe-inline'` for styles (required by Tailwind CSS)

## Environment Variables
- All config via `import.meta.env`
- `.env` files are git-ignored
- Production builds strip `console.log`

## External Dependencies
- Zero CDN dependencies for critical rendering
- All fonts and icons are self-hosted
- SRI would be used for any external scripts (currently none)
- All npm dependencies have their integrity verified via `package-lock.json`

## Reporting
Report security issues to the GitHub repository's Issues tab.
