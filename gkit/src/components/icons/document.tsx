import classNames from 'classnames';
import React from 'react';
import DocumentFilled from './assets/document_24_filled.svg';
import Document from './assets/document_24_regular.svg';
import { SvgIconProps } from './types';

export function DocumentIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Document className={classNames('document-icon', className)} {...props} />;
}

export function DocumentFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <DocumentFilled className={classNames('document-filled-icon', className)} {...props} />;
}
