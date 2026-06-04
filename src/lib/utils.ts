// src/lib/utils.ts — lightweight cn() without external deps
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export const EXTERNAL_LINK_PROPS = {
  target: '_blank',
  rel: 'noreferrer noopener',
} as const;
