import classNames from 'classnames';
import React from 'react';
import ArrowDownload from './assets/arrow_download.svg';
import { SvgIconProps } from './types';

export function ArrowDownloadIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ArrowDownload className={classNames('arrow-download-icon', className)} {...props} />;
}
