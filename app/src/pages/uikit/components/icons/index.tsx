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
  CommentIcon,
  HeartIcon,
  HeartFillIcon,
  OptionsIcon,
  SearchIcon,
  ChevronUp20FilledIcon,
  ChevronDown20FilledIcon,
} from '@itgenio/gkit';

const ICONS = [
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
  CommentIcon,
  HeartIcon,
  HeartFillIcon,
  OptionsIcon,
  SearchIcon,
  ChevronUp20FilledIcon,
  ChevronDown20FilledIcon,
].sort((a, b) => a.name.localeCompare(b.name));

export function Icons() {
  return (
    <div className="icons">
      {ICONS.map(Icon => (
        <Icon key={Icon.name} />
      ))}
    </div>
  );
}

Icons.displayName = 'Icons';
