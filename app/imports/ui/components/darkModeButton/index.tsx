import './style.less';
import React, { useEffect, useState } from 'react';
import { Button } from '@itgenio/gkit';

export const DarkModeButton = () => {
  const [isDarkTheme, setDarkTheme] = useState(document.documentElement.hasAttribute('dark'));

  useEffect(() => {
    const el = document.documentElement;

    if (isDarkTheme) {
      el.setAttribute('dark', 'true');
      document.body.classList.add('dark-mode');
    } else {
      el.removeAttribute('dark');
      document.body.classList.remove('dark-mode');
    }
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
      {isDarkTheme ? <img src="/img/icon_sun.svg" alt="" /> : <img src="/img/icon_moon.svg" alt="" />}
    </Button>
  );
};
