import classNames from 'classnames';
import React from 'react';
import ArrowImport from './assets/arrow_import_24_filled.svg';
import { SvgIconProps } from './types';

export function ArrowImportIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ArrowImport className={classNames('arrow-import-icon', className)} {...props} />;
}
