import classNames from 'classnames';
import React from 'react';
import ArrowDownloadFilled from './assets/arrow_download_24_filled.svg';
import ArrowDownload from './assets/arrow_download_24_regular.svg';
import { SvgIconProps } from './types';

export function ArrowDownloadIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ArrowDownload className={classNames('arrow-download-icon', className)} {...props} />;
}

export function ArrowDownloadFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ArrowDownloadFilled className={classNames('arrow-download-icon', className)} {...props} />;
}
