import './style.less';
import React from 'react';
import { CheckMarkIcon, MobilePhoneIcon } from '@itgenio/gkit';

export function Icons() {
  return (
    <div className="icons">
      <div className="grid">
        <MobilePhoneIcon />
        <CheckMarkIcon />
      </div>
    </div>
  );
}

Icons.displayName = 'Icons';
