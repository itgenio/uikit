import classNames from 'classnames';
import React from 'react';
import { SvgIconProps } from '@itgenio/icons/types';
import Snowflake from './assets/snowflake_color.svg';

export function SnowflakeEmoji({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Snowflake className={classNames('snowflake-emoji', className)} {...props} />;
}
