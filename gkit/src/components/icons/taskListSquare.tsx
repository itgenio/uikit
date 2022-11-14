import classNames from 'classnames';
import React from 'react';
import TaskListSquareFilled from './assets/task_list_square_ltr_24_filled.svg';
import TaskListSquare from './assets/task_list_square_ltr_24_regular.svg';
import { SvgIconProps } from './types';

export function TaskListSquareIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <TaskListSquare className={classNames('task-list-square-icon', className)} {...props} />;
}

export function TaskListSquareFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <TaskListSquareFilled className={classNames('task-list-square-filled-icon', className)} {...props} />;
}
