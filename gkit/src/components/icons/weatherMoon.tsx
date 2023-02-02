import classNames from 'classnames';
import React from 'react';
import WeatherMoonFilled from './assets/weather_moon_24_filled.svg';
import WeatherMoon from './assets/weather_moon_24_regular.svg';
import { SvgIconProps } from './types';

export function WeatherMoonIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <WeatherMoon className={classNames('weather-moon-icon', className)} {...props} />;
}

export function WeatherMoonFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <WeatherMoonFilled className={classNames('weather-moon-filled-icon', className)} {...props} />;
}
