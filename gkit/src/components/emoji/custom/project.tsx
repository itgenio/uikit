import classNames from 'classnames';
import React from 'react';
import Project from '../assets/project.svg';
import { EmojiProps } from '../types';

export const ProjectEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <Project className={classNames('project-emoji', className)} {...props} />;
};
