import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function CalendarArrowRight16Icon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('calendar-arrow-right-icon', className)} viewBox="0 0 16 16" {...props}>
      <path
        d="M11.5 2C12.8807 2 14 3.11929 14 4.5V6.25716C13.0491 5.47182 11.8296 5 10.5 5H13V4.5C13 3.67157 12.3284 3 11.5 3H4.5C3.67157 3 3 3.67157 3 4.5V5H10.5C9.32259 5 8.23159 5.36997 7.33692 6H3V11.5C3 12.3284 3.67157 13 4.5 13H5.59971C5.78261 13.3578 6.00353 13.6929 6.25716 14H4.5C3.11929 14 2 12.8807 2 11.5V4.5C2 3.11929 3.11929 2 4.5 2H11.5ZM10.5 15C12.9853 15 15 12.9853 15 10.5C15 8.01472 12.9853 6 10.5 6C8.01472 6 6 8.01472 6 10.5C6 12.9853 8.01472 15 10.5 15ZM10.8536 12.8536C10.6583 13.0488 10.3417 13.0488 10.1464 12.8536C9.95118 12.6583 9.95118 12.3417 10.1464 12.1464L11.2929 11H8.5C8.22386 11 8 10.7761 8 10.5C8 10.2239 8.22386 10 8.5 10H11.2929L10.1464 8.85355C9.95119 8.65829 9.95119 8.34171 10.1464 8.14645C10.3417 7.95118 10.6583 7.95118 10.8536 8.14645L12.8536 10.1464C12.9015 10.1944 12.9377 10.2496 12.9621 10.3086C12.9861 10.3667 12.9996 10.4303 13 10.497L13 10.5L13 10.503C12.9996 10.5697 12.9861 10.6333 12.9621 10.6914C12.938 10.7495 12.9026 10.804 12.8557 10.8514L12.8532 10.854L10.8536 12.8536Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

export function CalendarArrowRight24Icon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('calendar-arrow-right-icon', className)} viewBox="0 0 24 24" {...props}>
      <path
        d="M20.3996 6.6001C20.3996 4.94324 19.0565 3.6001 17.3996 3.6001H6.59961C4.94275 3.6001 3.59961 4.94324 3.59961 6.6001V17.4001C3.59961 19.057 4.94275 20.4001 6.59961 20.4001H11.5193C11.3249 20.0199 11.1664 19.6185 11.048 19.2001H6.59961C5.6055 19.2001 4.79961 18.3942 4.79961 17.4001V8.4001H19.1996V11.0485C19.618 11.1669 20.0195 11.3254 20.3996 11.5197V6.6001ZM6.59961 4.8001H17.3996C18.3937 4.8001 19.1996 5.60598 19.1996 6.6001V7.2001H4.79961V6.6001C4.79961 5.60598 5.6055 4.8001 6.59961 4.8001ZM22.7996 17.4001C22.7996 20.3824 20.3819 22.8001 17.3996 22.8001C14.4173 22.8001 11.9996 20.3824 11.9996 17.4001C11.9996 14.4178 14.4173 12.0001 17.3996 12.0001C20.3819 12.0001 22.7996 14.4178 22.7996 17.4001ZM20.2234 17.8248L20.2264 17.8218C20.2827 17.7649 20.3252 17.6995 20.3541 17.6298C20.383 17.5601 20.3991 17.4837 20.3996 17.4037L20.3996 17.4001L20.3996 17.3965C20.3991 17.3165 20.383 17.2401 20.3541 17.1704C20.3248 17.0997 20.2814 17.0334 20.2239 16.9758L17.8239 14.5758C17.5896 14.3415 17.2097 14.3415 16.9753 14.5758C16.741 14.8101 16.741 15.19 16.9753 15.4244L18.3511 16.8001H14.9996C14.6682 16.8001 14.3996 17.0687 14.3996 17.4001C14.3996 17.7315 14.6682 18.0001 14.9996 18.0001H18.3511L16.9753 19.3758C16.741 19.6101 16.741 19.99 16.9753 20.2244C17.2097 20.4587 17.5896 20.4587 17.8239 20.2244L20.2234 17.8248Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

export function CalendarArrowRight16FilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('calendar-arrow-right-filled-icon', className)} viewBox="0 0 16 16" {...props}>
      <path
        d="M4.5 14H6.25716C5.47182 13.0491 5 11.8296 5 10.5C5 8.63984 5.92345 6.99537 7.33692 6H2V11.5C2 12.8807 3.11929 14 4.5 14ZM14 5H2V4.5C2 3.11929 3.11929 2 4.5 2H11.5C12.8807 2 14 3.11929 14 4.5V5ZM10.5 15C12.9853 15 15 12.9853 15 10.5C15 8.01472 12.9853 6 10.5 6C8.01472 6 6 8.01472 6 10.5C6 12.9853 8.01472 15 10.5 15ZM10.8536 12.8536C10.6583 13.0488 10.3417 13.0488 10.1464 12.8536C9.95118 12.6583 9.95118 12.3417 10.1464 12.1464L11.2929 11H8.5C8.22386 11 8 10.7761 8 10.5C8 10.2239 8.22386 10 8.5 10H11.2929L10.1464 8.85355C9.95119 8.65829 9.95119 8.34171 10.1464 8.14645C10.3417 7.95118 10.6583 7.95118 10.8536 8.14645L12.8536 10.1464C12.9015 10.1944 12.9377 10.2496 12.9621 10.3086C12.9861 10.3667 12.9996 10.4303 13 10.497L13 10.5L13 10.503C12.9996 10.5697 12.9861 10.6333 12.9621 10.6914C12.938 10.7495 12.9026 10.804 12.8557 10.8514L12.8532 10.854L10.8536 12.8536Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

export function CalendarArrowRight24FilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('calendar-arrow-right-filled-icon', className)} viewBox="0 0 24 24" {...props}>
      <path
        d="M20.3996 6.6001C20.3996 4.94324 19.0565 3.6001 17.3996 3.6001H6.59961C4.94275 3.6001 3.59961 4.94324 3.59961 6.6001V7.2001H20.3996V6.6001ZM20.3996 11.5197V8.4001H3.59961V17.4001C3.59961 19.057 4.94275 20.4001 6.59961 20.4001H11.5193C11.0591 19.5 10.7996 18.4804 10.7996 17.4001C10.7996 13.755 13.7545 10.8001 17.3996 10.8001C18.4799 10.8001 19.4995 11.0596 20.3996 11.5197ZM22.7996 17.4001C22.7996 20.3824 20.3819 22.8001 17.3996 22.8001C14.4173 22.8001 11.9996 20.3824 11.9996 17.4001C11.9996 14.4178 14.4173 12.0001 17.3996 12.0001C20.3819 12.0001 22.7996 14.4178 22.7996 17.4001ZM20.2234 17.8248L20.2264 17.8218C20.2827 17.7649 20.3252 17.6995 20.3541 17.6298C20.383 17.5601 20.3991 17.4837 20.3996 17.4037L20.3996 17.4001L20.3996 17.3965C20.3991 17.3165 20.383 17.2401 20.3541 17.1704C20.3248 17.0997 20.2814 17.0334 20.2239 16.9758L17.8239 14.5758C17.5896 14.3415 17.2097 14.3415 16.9753 14.5758C16.741 14.8101 16.741 15.19 16.9753 15.4244L18.3511 16.8001H14.9996C14.6682 16.8001 14.3996 17.0687 14.3996 17.4001C14.3996 17.7315 14.6682 18.0001 14.9996 18.0001H18.3511L16.9753 19.3758C16.741 19.6101 16.741 19.99 16.9753 20.2244C17.2097 20.4587 17.5896 20.4587 17.8239 20.2244L20.2234 17.8248Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
