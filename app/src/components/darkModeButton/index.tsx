import './style.css';
import React, { useEffect, useState } from 'react';
import { Button } from '@itgenio/gkit';
import imageMoonUrl from '../../img/icon_moon.svg';
import imageSunUrl from '../../img/icon_sun.svg';

const getDefaultTheme = () => {
  const stored = localStorage?.getItem('kit_theme');
  return !!stored || document.documentElement.hasAttribute('dark');
};

const saveDefaultTheme = (dark: boolean) => {
  localStorage?.setItem('kit_theme', dark ? '1' : '');
};

export const DarkModeButton = () => {
  const [isDarkTheme, setDarkTheme] = useState(getDefaultTheme());

  useEffect(() => {
    const el = document.documentElement;

    if (isDarkTheme) {
      el.setAttribute('dark', 'true');
      document.body.classList.add('dark-mode');
    } else {
      el.removeAttribute('dark');
      document.body.classList.remove('dark-mode');
    }

    saveDefaultTheme(isDarkTheme);
  }, [isDarkTheme]);

  return (
    <Button
      className="dark-mode-button"
      asIcon
      size="small"
      type="secondary"
      onClick={() => {
        const el = document.documentElement;

        if (el.hasAttribute('dark')) {
          setDarkTheme(false);
        } else {
          setDarkTheme(true);
        }
      }}
    >
      {isDarkTheme ? <img src={imageSunUrl} alt="" /> : <img src={imageMoonUrl} alt="" />}
    </Button>
  );
};
