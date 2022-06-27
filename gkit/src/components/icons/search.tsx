import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function Search16Icon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('search-icon', className)} viewBox="0 0 16 16" {...props}>
      <path
        d="M9.30887 10.016C8.53903 10.6318 7.56252 11 6.5 11C4.01472 11 2 8.98531 2 6.50002C2 4.01473 4.01472 2 6.5 2C8.98528 2 11 4.01473 11 6.50002C11 7.56252 10.6318 8.53901 10.016 9.30885L13.8536 13.1464C14.0488 13.3417 14.0488 13.6583 13.8536 13.8536C13.6583 14.0488 13.3417 14.0488 13.1464 13.8536L9.30887 10.016ZM10 6.50002C10 4.56701 8.433 3 6.5 3C4.567 3 3 4.56701 3 6.50002C3 8.43302 4.567 10 6.5 10C8.433 10 10 8.43302 10 6.50002Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

export function Search24Icon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('search-icon', className)} viewBox="0 0 24 24" {...props}>
      <path
        d="M10 2.75C14.0041 2.75 17.25 5.99594 17.25 10C17.25 11.7319 16.6427 13.3219 15.6295 14.5688L20.5303 19.4697C20.8232 19.7626 20.8232 20.2374 20.5303 20.5303C20.2641 20.7966 19.8474 20.8208 19.5538 20.6029L19.4697 20.5303L14.5688 15.6295C13.3219 16.6427 11.7319 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75ZM10 4.25C6.82436 4.25 4.25 6.82436 4.25 10C4.25 13.1756 6.82436 15.75 10 15.75C13.1756 15.75 15.75 13.1756 15.75 10C15.75 6.82436 13.1756 4.25 10 4.25Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
