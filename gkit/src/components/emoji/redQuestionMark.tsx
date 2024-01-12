import classNames from 'classnames';
import React from 'react';
import RedQuestionMarkColor from './assets/red_question_mark_color.svg';
import { EmojiProps } from './types';

export const RedQuestionMarkEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <RedQuestionMarkColor className={classNames('red-question-mark-color-emoji', className)} {...props} />;
};
