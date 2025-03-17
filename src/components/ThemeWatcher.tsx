'use client';

import { useEffect } from 'react';

import { useTheme } from 'next-themes';

export function ThemeWatcher() {
  const { setTheme } = useTheme();

  useEffect(() => {
    // Створюємо медіа-запит для відстеження системної теми
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Функція обробки зміни теми
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
      // Оновлюємо data-theme для daisyUI
      document.documentElement.setAttribute('data-theme', newTheme);
    };

    // Початкова перевірка
    handleChange(mediaQuery);

    // Підписуємося на зміни
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [setTheme]);

  return null;
}
