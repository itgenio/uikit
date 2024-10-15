import classNames from 'classnames';
import React from 'react';
import FilmFrames from './assets/film_frames_color.svg';
import { EmojiProps } from './types';

export const FilmFramesEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <FilmFrames className={classNames('film-frames-emoji', className)} {...props} />;
};
