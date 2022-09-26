import classNames from 'classnames';
import React from 'react';
import PeopleSearchFilled from './assets/people_search_24_filled.svg';
import PeopleSearch from './assets/people_search_24_regular.svg';
import { SvgIconProps } from './types';

export function PeopleSearchIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <PeopleSearch className={classNames('people-search-icon', className)} {...props} />;
}

export function PeopleSearchFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <PeopleSearchFilled className={classNames('people-search-filled-icon', className)} {...props} />;
}
