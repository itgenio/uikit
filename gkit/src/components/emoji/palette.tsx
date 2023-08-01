import classNames from 'classnames';
import React from 'react';
import ArtistPalette from './assets/artist_palette.svg';
import { EmojiProps } from './types';

export const ArtistPaletteEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <ArtistPalette className={classNames('artist-palette-emoji', className)} {...props} />;
};
