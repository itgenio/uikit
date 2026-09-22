import classNames from 'classnames';
import React from 'react';
import BadExplanation from './assets/bad_explanation.svg';
import { EmojiProps } from './types';

export const BadExplanationEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <BadExplanation className={classNames('bad-explanation-emoji', className)} {...props} />;
};
