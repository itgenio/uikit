import classNames from 'classnames';
import React from 'react';
import FaceHoldingBackTears from './assets/face_holding_back_tears_flat.svg';
import { EmojiProps } from './types';

export const FaceHoldingBackTearsEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <FaceHoldingBackTears className={classNames('face-holding-back-tears', className)} {...props} />;
};
