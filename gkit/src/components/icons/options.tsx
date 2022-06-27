import classNames from 'classnames';
import React from 'react';
import Options from './assets/options_24_regular.svg';
import { SvgIconProps } from './svgIcon';

export function OptionsIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Options className={classNames('options-icon', className)} {...props} />;
}
