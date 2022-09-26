import classNames from 'classnames';
import React from 'react';
import TextboxFilled from './assets/textbox_24_filled.svg';
import Textbox from './assets/textbox_24_regular.svg';
import { SvgIconProps } from './types';

export function TextboxIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Textbox className={classNames('textbox-icon', className)} {...props} />;
}

export function TextboxFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <TextboxFilled className={classNames('textbox-filled-icon', className)} {...props} />;
}
