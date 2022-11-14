import classNames from 'classnames';
import React from 'react';
import ClipboardTaskFilled from './assets/clipboard_task_24_filled.svg';
import ClipboardTask from './assets/clipboard_task_24_regular.svg';
import { SvgIconProps } from './types';

export function ClipboardTaskIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ClipboardTask className={classNames('clipboard-task-icon', className)} {...props} />;
}

export function ClipboardTaskFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ClipboardTaskFilled className={classNames('clipboard-task-filled-icon', className)} {...props} />;
}
