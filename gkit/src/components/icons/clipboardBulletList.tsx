import classNames from 'classnames';
import React from 'react';
import ClipboardBulletListFilled from './assets/clipboard_bullet_list_ltr_20_filled.svg';
import ClipboardBulletList from './assets/clipboard_bullet_list_ltr_20_regular.svg';
import { SvgIconProps } from './types';

export function ClipboardBulletListIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ClipboardBulletList className={classNames('clipboard-bullet-list-icon', className)} {...props} />;
}

export function ClipboardBulletListFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <ClipboardBulletListFilled className={classNames('clipboard-bullet-list-filled-icon', className)} {...props} />
  );
}
