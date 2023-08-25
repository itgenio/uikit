import classNames from 'classnames';
import React from 'react';
import FileFolder from './assets/file_folder_color.svg';
import { EmojiProps } from './types';

export const FileFolderEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <FileFolder className={classNames('file-folder-emoji', className)} {...props} />;
};
