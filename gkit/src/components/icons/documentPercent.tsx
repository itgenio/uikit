import classNames from 'classnames';
import React from 'react';
import DocumentPercent from './assets/document_percent_24_regular.svg';
import { SvgIconProps } from './types';

export function DocumentPercentIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <DocumentPercent className={classNames('document-percent-icon', className)} {...props} />;
}
