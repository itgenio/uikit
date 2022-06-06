import './style.less';

import React from 'react';
import {
  CheckMarkIcon,
  MobilePhoneIcon,
  MoreHorizontalIcon,
  MoreVerticalIcon,
  StarIcon,
  EyeIcon,
  CloseIcon,
  EyeOffIcon,
  DismissCircleIcon,
  CalendarIcon,
  MoneyIcon,
  DocumentCopyIcon,
  CalendarWithArrowRightIcon,
} from '@itgenio/gkit';

export function Icons() {
  return (
    <div className="icons">
      <MobilePhoneIcon />
      <CheckMarkIcon />
      <MoreHorizontalIcon />
      <MoreVerticalIcon />
      <CloseIcon />
      <DismissCircleIcon />
      <EyeIcon />
      <EyeOffIcon />
      <StarIcon />
      <CalendarIcon />
      <CalendarWithArrowRightIcon />
      <MoneyIcon />
      <DocumentCopyIcon />
    </div>
  );
}

Icons.displayName = 'Icons';
