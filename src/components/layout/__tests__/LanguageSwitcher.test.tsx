import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageProvider } from '../../../hooks/useLanguage';
import { LanguageSwitcher } from '../LanguageSwitcher';

function renderSwitcher() {
  return render(
    <LanguageProvider>
      <LanguageSwitcher />
    </LanguageProvider>
  );
}

describe('LanguageSwitcher', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  // Task 119
  it('SHALL render 4 language buttons', () => {
    renderSwitcher();
    const buttons = screen.getAllByRole('radio');
    expect(buttons).toHaveLength(4);
  });

  // Task 119
  it('SHALL render zh-TW button with flag 🇹🇼 and label 繁體中文', () => {
    renderSwitcher();
    const zhTWButton = screen.getByTitle('繁體中文');
    expect(zhTWButton).toBeInTheDocument();
    expect(zhTWButton.textContent).toContain('🇹🇼');
  });

  // Task 91/120
  it('SHALL apply active styles to zh-TW button when clicked', () => {
    renderSwitcher();
    const zhTWButton = screen.getByTitle('繁體中文');
    fireEvent.click(zhTWButton);
    expect(zhTWButton.className).toContain('bg-coala-cyan/20');
    expect(zhTWButton.className).toContain('border-coala-cyan/50');
  });

  // Task 93
  it('SHALL set aria-checked="true" on active zh-TW button', () => {
    renderSwitcher();
    const zhTWButton = screen.getByTitle('繁體中文');
    fireEvent.click(zhTWButton);
    expect(zhTWButton).toHaveAttribute('aria-checked', 'true');
  });

  // Task 120
  it('SHALL update all 4 aria-checked states when switching languages', () => {
    renderSwitcher();
    const zhTWButton = screen.getByTitle('繁體中文');
    const esButton = screen.getByTitle('ES');

    fireEvent.click(zhTWButton);
    expect(zhTWButton).toHaveAttribute('aria-checked', 'true');
    expect(esButton).toHaveAttribute('aria-checked', 'false');

    fireEvent.click(esButton);
    expect(esButton).toHaveAttribute('aria-checked', 'true');
    expect(zhTWButton).toHaveAttribute('aria-checked', 'false');
  });

  // Task 116 (persistencia)
  it('SHALL persist zh-TW to localStorage on click', async () => {
    renderSwitcher();
    const zhTWButton = screen.getByTitle('繁體中文');
    fireEvent.click(zhTWButton);
    // Debounce 150ms — need to wait
    await new Promise((resolve) => setTimeout(resolve, 200));
    expect(localStorage.getItem('coala-language')).toBe('zh-TW');
  });

  // Task 121
  it('SHALL render ES, EN, 中文, 繁體中文 buttons', () => {
    renderSwitcher();
    expect(screen.getByTitle('ES')).toBeInTheDocument();
    expect(screen.getByTitle('EN')).toBeInTheDocument();
    expect(screen.getByTitle('中文')).toBeInTheDocument();
    expect(screen.getByTitle('繁體中文')).toBeInTheDocument();
  });

  // Task 98 (no regresión)
  it('SHALL have working ES, EN, ZH buttons without regression', () => {
    renderSwitcher();
    const esButton = screen.getByTitle('ES');
    const enButton = screen.getByTitle('EN');
    const zhButton = screen.getByTitle('中文');

    fireEvent.click(enButton);
    expect(enButton).toHaveAttribute('aria-checked', 'true');

    fireEvent.click(zhButton);
    expect(zhButton).toHaveAttribute('aria-checked', 'true');

    fireEvent.click(esButton);
    expect(esButton).toHaveAttribute('aria-checked', 'true');
  });
});
