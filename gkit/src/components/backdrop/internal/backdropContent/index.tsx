import './style.less';

import React, { PropsWithChildren } from 'react';

export const BackdropContentInternal = ({ children }: PropsWithChildren<{}>) => {
  return <div className="backdrop-content">{children}</div>;
};
