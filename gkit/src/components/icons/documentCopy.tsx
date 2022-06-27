import classNames from 'classnames';
import React from 'react';
import DocumentCopy from './assets/document_copy_24_regular.svg';
import { SvgIconProps } from './svgIcon';

export function DocumentCopyIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <DocumentCopy className={classNames('document-copy-icon', className)} {...props} />;
}
