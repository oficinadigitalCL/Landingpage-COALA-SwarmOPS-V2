// src/lib/env.ts — runtime env validation
// Validates required environment variables at runtime.
// Uses Vite's import.meta.env; types are declared in src/vite-env.d.ts.

interface EnvConfig {
  VITE_APP_NAME: string;
  VITE_REPO_URL: string;
  VITE_SPONSOR_URL: string;
}

export function validateEnv(): EnvConfig {
  const required = ['VITE_APP_NAME', 'VITE_REPO_URL', 'VITE_SPONSOR_URL'] as const;

  for (const key of required) {
    if (!import.meta.env[key]) {
      console.warn(`Missing env variable: ${key}. Using fallback.`);
    }
  }

  return {
    VITE_APP_NAME: import.meta.env.VITE_APP_NAME || 'COALA SwarmOPS',
    VITE_REPO_URL: import.meta.env.VITE_REPO_URL || 'https://github.com/oficinadigitalCL/Landingpage-COALA-SwarmOPS-V2',
    VITE_SPONSOR_URL: import.meta.env.VITE_SPONSOR_URL || 'https://github.com/sponsors/oficinadigitalCL',
  };
}

export const env = validateEnv();
