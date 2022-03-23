import './style.less';
import React from 'react';

type Props = {
  className?: string;
  onClose?: () => void;
  children?: React.PropsWithChildren<any>;
  fill?: string;
};

export function NotificationContainer({ children, fill }: Props) {
  const divStyle = {
    borderLeft: `4px solid ${fill}`,
  };

  return (
    <div style={divStyle} className="notification-container">
      {children}
    </div>
  );
}

export function NotificationHeader({ children, fill, onClose }: Props) {
  return (
    <div className="notification-title">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 0C15.523 0 20 4.478 20 10C20 15.522 15.523 20 10 20C4.477 20 0 15.522 0 10C0 4.478 4.477 0 10 0ZM10.0018 13.0037C9.45025 13.0037 9.00314 13.4508 9.00314 14.0024C9.00314 14.5539 9.45025 15.001 10.0018 15.001C10.5533 15.001 11.0005 14.5539 11.0005 14.0024C11.0005 13.4508 10.5533 13.0037 10.0018 13.0037ZM9.99964 5C9.4868 5.00018 9.06427 5.38638 9.00669 5.88374L9 6.00036L9.0018 11.0012L9.00857 11.1179C9.06651 11.6152 9.48932 12.0011 10.0022 12.0009C10.515 12.0007 10.9375 11.6145 10.9951 11.1171L11.0018 11.0005L11 5.99964L10.9932 5.88302C10.9353 5.3857 10.5125 4.99982 9.99964 5Z"
          fill={fill}
        />
      </svg>
      {children}
      <button className="notification-close-btn" onClick={() => onClose?.()}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.897052 1.05379L0.96967 0.96967C1.23594 0.703403 1.6526 0.679197 1.94621 0.897052L2.03033 0.96967L7 5.939L11.9697 0.96967C12.2359 0.703403 12.6526 0.679197 12.9462 0.897052L13.0303 0.96967C13.2966 1.23594 13.3208 1.6526 13.1029 1.94621L13.0303 2.03033L8.061 7L13.0303 11.9697C13.2966 12.2359 13.3208 12.6526 13.1029 12.9462L13.0303 13.0303C12.7641 13.2966 12.3474 13.3208 12.0538 13.1029L11.9697 13.0303L7 8.061L2.03033 13.0303C1.76406 13.2966 1.3474 13.3208 1.05379 13.1029L0.96967 13.0303C0.703403 12.7641 0.679197 12.3474 0.897052 12.0538L0.96967 11.9697L5.939 7L0.96967 2.03033C0.703403 1.76406 0.679197 1.3474 0.897052 1.05379L0.96967 0.96967L0.897052 1.05379Z"
            fill="#69707D"
          />
        </svg>
      </button>
    </div>
  );
}

export function NotificationTitle({ children }: Props) {
  return <h3>{children}</h3>;
}

export function NotificationContent({ children }: Props) {
  return <div className="notification-content">{children}</div>;
}

export function NotificationText({ children }: Props) {
  return <p className="notification-text">{children}</p>;
}

export function NotificationButtonContainer({ children }: Props) {
  return <div className="notification-button-container">{children}</div>;
}

export function NotificationButton({ children }: Props) {
  return <button>{children}</button>;
}
