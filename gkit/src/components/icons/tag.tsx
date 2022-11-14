import classNames from 'classnames';
import React from 'react';
import TagFilled from './assets/tag_24_filled.svg';
import Tag from './assets/tag_24_regular.svg';
import { SvgIconProps } from './types';

export function TagIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Tag className={classNames('tag-icon', className)} {...props} />;
}

export function TagFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <TagFilled className={classNames('tag-filled-icon', className)} {...props} />;
}
