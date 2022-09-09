import classNames from 'classnames';
import React from 'react';
import TextBulletListTreeFilled from './assets/text_bullet_list_tree_24_filled.svg';
import TextBulletListTree from './assets/text_bullet_list_tree_24_regular.svg';
import { SvgIconProps } from './types';

export function TextBulletListTreeIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <TextBulletListTree className={classNames('text-bullet-list-tree-icon', className)} {...props} />;
}

export function TextBulletListTreeFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <TextBulletListTreeFilled className={classNames('text-bullet-list-tree-filled-icon', className)} {...props} />;
}
