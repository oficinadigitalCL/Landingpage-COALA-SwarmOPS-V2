// src/lib/sanitize.ts — DOMPurify wrapper for client-side sanitization
// Note: DOMPurify requires a browser environment (document, DOMParser).
// All npm dependencies have their integrity hashes verified in package-lock.json.
// Zero CDN dependencies are used for critical rendering paths.

import DOMPurify from 'dompurify';

export function sanitizeHTML(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'li', 'ol', 'span', 'code', 'pre'],
    ALLOWED_ATTR: ['href', 'target', 'rel', 'class'],
  });
}

export function sanitizeText(text: string): string {
  // Strip all HTML, return plain text
  const doc = new DOMParser().parseFromString(text, 'text/html');
  return doc.body.textContent || '';
}
