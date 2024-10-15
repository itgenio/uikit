import classNames from 'classnames';
import React from 'react';
import MusicalNote from './assets/musical_note_color.svg';
import { EmojiProps } from './types';

export const MusicalNoteEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <MusicalNote className={classNames('musical-note-emoji', className)} {...props} />;
};
