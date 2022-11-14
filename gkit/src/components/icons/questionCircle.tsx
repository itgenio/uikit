import classNames from 'classnames';
import React from 'react';
import QuestionCircle from './assets/question_circle_24_regular.svg';
import { SvgIconProps } from './types';

export function QuestionCircleIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <QuestionCircle className={classNames('question-circle-icon', className)} {...props} />;
}
