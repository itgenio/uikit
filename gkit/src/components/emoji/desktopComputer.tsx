import classNames from 'classnames';
import React from 'react';
import DesktopComputer from './assets/desktop_computer_color.svg';
import { EmojiProps } from './types';

export const DesktopComputerEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <DesktopComputer className={classNames('desktop-computer-emoji', className)} {...props} />;
};
