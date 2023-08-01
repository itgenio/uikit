import classNames from 'classnames';
import React from 'react';
import CodeFilled from './assets/code_24_filled.svg';
import Code from './assets/code_24_regular.svg';
import { SvgIconProps } from './types';

export function CodeIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Code className={classNames('code-icon', className)} {...props} />;
}

export function CodeFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <CodeFilled className={classNames('code-filled-icon', className)} {...props} />;
}
