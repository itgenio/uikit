import './style.less';

import React from 'react';

export type BackdropOverlayProps = { onClick?: React.MouseEventHandler<HTMLDivElement> };

export const BackdropOverlayInternal = ({ onClick }: BackdropOverlayProps) => {
  return <div className="backdrop-overlay" onClick={onClick} />;
};
