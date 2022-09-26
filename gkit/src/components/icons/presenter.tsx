import classNames from 'classnames';
import React from 'react';
import PresenterFilled from './assets/presenter_24_filled.svg';
import Presenter from './assets/presenter_24_regular.svg';
import { SvgIconProps } from './types';

export function PresenterIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Presenter className={classNames('presenter-icon', className)} {...props} />;
}

export function PresenterFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <PresenterFilled className={classNames('presenter-filled-icon', className)} {...props} />;
}
