import classNames from 'classnames';
import React from 'react';
import Handshake from './assets/handshake.svg';
import { EmojiProps } from './types';

export const HandshakeEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
    return <Handshake className={classNames('handshake-emoji', className)} {...props} />;
};
