import classNames from 'classnames';
import React from 'react';
import SettingsFilled from './assets/settings_24_filled.svg';
import Settings from './assets/settings_24_regular.svg';
import { SvgIconProps } from './types';

export function SettingsIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Settings className={classNames('settings-icon', className)} {...props} />;
}

export function SettingsFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <SettingsFilled className={classNames('settings-filled-icon', className)} {...props} />;
}
