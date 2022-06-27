import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function Heart16Icon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('heart-icon', className)} viewBox="0 0 16 16" {...props}>
      <path
        d="M7.54112 3.94755C6.26943 2.67586 4.21207 2.66968 2.94588 3.93587C1.67969 5.20206 1.68587 7.25942 2.95756 8.53111L7.66505 13.2386C7.86031 13.4339 8.1769 13.4339 8.37216 13.2386L13.0552 8.55833C14.3184 7.28802 14.3144 5.23643 13.0425 3.96452C11.7686 2.69054 9.71024 2.68436 8.44178 3.95282L7.99452 4.40095L7.54112 3.94755ZM12.3461 7.8532L8.01861 12.1779L3.66467 7.82401C2.78255 6.94189 2.77827 5.51769 3.65299 4.64298C4.5277 3.76826 5.9519 3.77254 6.83402 4.65466L7.64337 5.46401C7.84197 5.66261 8.16514 5.65872 8.35889 5.45539L9.14889 4.65993C10.0259 3.78295 11.451 3.78723 12.3354 4.67162C13.2178 5.55396 13.2205 6.97391 12.3461 7.8532Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

export function Heart24Icon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('heart-icon', className)} viewBox="0 0 24 24" {...props}>
      <path
        d="M12.8197 5.57961L11.999 6.40211L11.1757 5.57886C9.07663 3.4798 5.67337 3.4798 3.5743 5.57886C1.47523 7.67793 1.47523 11.0812 3.5743 13.1803L11.4697 21.0756C11.7626 21.3685 12.2374 21.3685 12.5303 21.0756L20.4318 13.1788C22.5262 11.0728 22.5298 7.67906 20.4303 5.57961C18.3274 3.47672 14.9226 3.47672 12.8197 5.57961ZM19.3682 12.1211L12 19.4846L4.63496 12.1196C3.12168 10.6063 3.12168 8.15281 4.63496 6.63952C6.14824 5.12624 8.60176 5.12624 10.115 6.63952L11.4725 7.99697C11.7703 8.29483 12.255 8.28903 12.5457 7.98412L13.8803 6.64027C15.3974 5.12317 17.8526 5.12316 19.3697 6.64027C20.8833 8.15391 20.8807 10.6001 19.3682 12.1211Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

export function Heart16FilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('heart-filled-icon', className)} viewBox="0 0 16 16" {...props}>
      <path
        d="M7.54112 3.94755C6.26943 2.67586 4.21207 2.66968 2.94588 3.93587C1.67969 5.20206 1.68587 7.25942 2.95756 8.53111L7.66505 13.2386C7.86031 13.4339 8.1769 13.4339 8.37216 13.2386L13.0552 8.55833C14.3184 7.28802 14.3144 5.23643 13.0425 3.96452C11.7686 2.69054 9.71024 2.68436 8.44178 3.95282L7.99452 4.40095L7.54112 3.94755Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

export function Heart24FilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('heart-filled-icon', className)} viewBox="0 0 24 24" {...props}>
      <path
        d="M12.8197 5.57961L11.999 6.40211L11.1757 5.57886C9.07663 3.4798 5.67337 3.4798 3.5743 5.57886C1.47523 7.67793 1.47523 11.0812 3.5743 13.1803L11.4697 21.0756C11.7626 21.3685 12.2374 21.3685 12.5303 21.0756L20.4318 13.1788C22.5262 11.0728 22.5298 7.67906 20.4303 5.57961C18.3274 3.47672 14.9226 3.47672 12.8197 5.57961Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
