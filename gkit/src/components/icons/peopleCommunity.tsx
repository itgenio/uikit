import classNames from 'classnames';
import React from 'react';
import PeopleCommunityFilled from './assets/people_community_24_filled.svg';
import PeopleCommunity from './assets/people_community_24_regular.svg';
import { SvgIconProps } from './types';

export function PeopleCommunityIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <PeopleCommunity className={classNames('people-community-icon', className)} {...props} />;
}

export function PeopleCommunityFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <PeopleCommunityFilled className={classNames('people-community-filled-icon', className)} {...props} />;
}
