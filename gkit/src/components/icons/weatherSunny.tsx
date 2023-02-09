import classNames from 'classnames';
import React from 'react';
import WeatherSunnyFilled from './assets/weather_sunny_24_filled.svg';
import WeatherSunny from './assets/weather_sunny_24_regular.svg';
import { SvgIconProps } from './types';

export function WeatherSunnyIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <WeatherSunny className={classNames('weather-sunny-icon', className)} {...props} />;
}

export function WeatherSunnyFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <WeatherSunnyFilled className={classNames('weather-sunny-filled-icon', className)} {...props} />;
}
