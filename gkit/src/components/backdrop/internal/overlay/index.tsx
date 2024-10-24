import classNames from 'classnames';
import './style.less';

import React from 'react';

export type BackdropOverlayProps = { className?: string; onClick?: React.MouseEventHandler<HTMLDivElement> };

export const BackdropOverlayInternal = ({ className, onClick }: BackdropOverlayProps) => {
  return <div className={classNames('backdrop-overlay', className)} onClick={onClick} />;
};
