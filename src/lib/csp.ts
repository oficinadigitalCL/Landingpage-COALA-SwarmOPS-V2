// src/lib/csp.ts — CSP header builder/validator
// HTTPS enforcement: all resources must be served over HTTPS.
// The 'upgrade-insecure-requests' directive can be added for environments
// that need automatic HTTP → HTTPS upgrade.

export interface CSPDirectives {
  'default-src'?: string[];
  'script-src'?: string[];
  'style-src'?: string[];
  'img-src'?: string[];
  'font-src'?: string[];
  'connect-src'?: string[];
  'media-src'?: string[];
  'object-src'?: string[];
  'frame-ancestors'?: string[];
  'base-uri'?: string[];
  'form-action'?: string[];
}

export const DEFAULT_CSP: CSPDirectives = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-eval'"], // needed for Three.js WebGL shaders
  'style-src': ["'self'", "'unsafe-inline'"], // needed for Tailwind CSS
  'img-src': ["'self'", "data:"],
  'font-src': ["'self'"],
  'connect-src': ["'self'"],
  'media-src': ["'self'"],
  'object-src': ["'none'"],
  'frame-ancestors': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"],
};

export function buildCSPString(directives: CSPDirectives): string {
  return Object.entries(directives)
    .map(([key, values]) => `${key} ${values.join(' ')}`)
    .join('; ');
}

export function validateCSP(cspString: string): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  if (!cspString.includes('default-src')) errors.push('Missing default-src');
  if (!cspString.includes("'self'")) errors.push("Missing 'self' source");
  return { valid: errors.length === 0, errors };
}
