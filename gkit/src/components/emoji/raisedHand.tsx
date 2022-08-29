import classNames from 'classnames';
import React from 'react';
import { Emoji, EmojiProps } from './internal';

export const RaisedHandEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return (
    <Emoji className={classNames('raise-hand-emoji', className)} viewBox="0 0 24 24" {...props}>
      <radialGradient id="svgIDa" cx="57.16" cy="33.264" r="89.842" gradientUnits="userSpaceOnUse">
        <stop offset=".359" stopColor="#F9DDBD" />
        <stop offset=".882" stopColor="#EDC391" />
      </radialGradient>
      <path
        fill="url(#svgIDa)"
        d="M50.9 122.3c-23.88 0-30.28-12.73-31.45-23.41c-.55-5.04-1.27-61.23-1.27-61.8c0-2.78.71-7.48 5.46-7.48c4.46 0 6.46 3.77 6.46 7.5l.46 23.24c.02.82.68 1.65 1.5 1.65s1.48-.84 1.5-1.66l.59-38.24c0-3.76 2-7.57 6.46-7.57s6.46 3.74 6.46 7.48l.48 37.92c.01.82.68 1.47 1.5 1.47s1.49-.66 1.5-1.48l.57-46.71c0-3.75 2-7.52 6.46-7.52s6.46 3.77 6.46 7.5l.59 46.46a1.5 1.5 0 0 0 3 0L68.1 25c0-3.75 2-7.52 6.46-7.52s6.46 3.77 6.46 7.5c.11 12.42.38 44.85.34 46.01c-.08.92.26 1.52.56 1.85c.4.44.98.69 1.63.69c1.44 0 2.87-1.14 3.27-1.49c1.78-1.54 3.31-3.95 4.93-6.5c2.02-3.18 4.12-6.48 6.36-7.39c1.76-.71 3.89-1.11 6.01-1.11c3.4 0 5.53 1 5.89 1.98c1.56 4.3-.32 5.95-5.09 9.6l-.92.71c-4.73 3.65-7.8 11.08-10.52 17.63c-1.11 2.67-2.15 5.2-3.23 7.32c-.65 1.28-1.21 2.79-1.86 4.53c-3.46 9.36-8.72 23.49-37.49 23.49z"
      />
      <path
        fill="#E6B77E"
        d="M57.59 7.2c2.29 0 4.96 1.57 4.96 6.04l.59 46.62c.02 1.64 1.36 3.14 3 3.14s2.98-1.5 3-3.14l.47-34.78c0-2.77 1.3-6.04 4.96-6.04s4.96 3.21 4.96 6c.15 17.6.37 44.16.34 45.88c-.1 1.46.46 2.4.95 2.95c.69.76 1.67 1.17 2.74 1.17c1.9 0 3.61-1.3 4.25-1.86c1.94-1.68 3.53-4.18 5.21-6.83c1.81-2.85 3.86-6.07 5.66-6.8c1.56-.63 3.55-1 5.45-1c2.78 0 4.24.74 4.5 1.04c1.12 3.12.24 4.14-4.61 7.84l-.92.71c-5.05 3.89-8.2 11.52-10.99 18.25c-1.09 2.65-2.13 5.14-3.18 7.21c-.69 1.36-1.3 2.98-1.93 4.69c-1.68 4.51-3.77 10.13-8.78 14.57c-6.02 5.35-14.96 7.94-27.33 7.94c-12.56 0-27.96-3.83-29.96-22.08c-.45-4.12-1.07-45.9-1.26-61.62c0-3.98 1.53-6 4.16-6c2.29 0 5.16 1.57 5.16 6v.06l.26 22.96c.03 1.63 1.17 2.87 2.8 2.87h.01c1.64 0 2.97-1.25 2.99-2.88l.59-38.16c0-2.77 1.3-5.98 4.96-5.98s4.96 3.24 4.96 6.05l.45 37.91c.04 1.65.99 2.97 2.99 2.97s3.01-1.32 3.03-2.96l.59-46.74c0-4.43 2.68-6 4.97-6m0-3c-4.95 0-7.96 4.03-7.96 9l-.57 46.7l-.48-37.91c0-4.97-3.01-9-7.96-9s-7.96 4.03-7.96 9l-.59 38.15l-.47-23.03c0-4.97-3.02-9-7.96-9c-4.95 0-6.96 4.03-6.96 9c0 0 .72 56.78 1.28 61.94c.93 8.5 5.74 24.75 32.94 24.75c35.1 0 36.64-20.86 40.71-28.84c3.79-7.43 7.09-19.64 13.33-24.45c4.96-3.83 8.62-6.12 6.5-12c-.71-1.96-3.81-2.97-7.3-2.97c-2.2 0-4.56.4-6.57 1.22c-4.6 1.87-7.84 10.79-11.7 14.14c-.72.62-1.66 1.13-2.29 1.13c-.46 0-.76-.27-.7-.95c.06-.69-.34-46.09-.34-46.09c0-4.97-3.01-9-7.96-9s-7.96 4.03-7.96 9l-.47 34.65l-.6-46.44c0-4.98-3.01-9-7.96-9z"
      />
      <defs>
        <path
          id="svgIDb"
          d="M107.92 57.8c-2.27-2.53-8.01-3.72-13.54-1.54c-4.65 1.83-9.96 19.19-9.96 19.19l-3.87-6.4s-65.53 21.5-64.6 30s7.74 24.75 34.94 24.75c35.1 0 36.64-20.86 40.71-28.84c3.79-7.43 8.56-24.71 14.42-26.55c3.8-1.18 3.82-8.48 1.9-10.61z"
        />
      </defs>
      <clipPath id="svgIDc">
        <use href="#svgIDb" />
      </clipPath>
      <g clipPath="url(#svgIDc)">
        <path
          fill="#E6B77E"
          d="M83.91 69.48C73 73.64 66.57 83.91 62.62 97.38c-.54 1.86 1.17 2.4 1.83.58c6.86-18.88 23.87-25.11 23.87-25.11l-4.41-3.37z"
        />
      </g>
    </Emoji>
  );
};
