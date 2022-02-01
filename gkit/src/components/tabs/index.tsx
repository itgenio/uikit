import './style.less';

import classNames from 'classnames';
import React from 'react';

export type TabsProps<T = any, C extends typeof Tab = typeof Tab> = {
  children?: (React.ReactElement<TabProps, C> | null)[];
  value?: T;
  onChange: (newValue: T) => void;
  className?: string;
};

type TabPropsAll = { value: any; label?: string } & any;

export type TabProps = React.PropsWithChildren<Pick<TabPropsAll, 'value'>>;

export function Tabs({ children, onChange, value, className }: TabsProps) {
  return (
    <div className={classNames('gkit-tabs', className)}>
      {React.Children.map(
        children,
        child =>
          child &&
          React.cloneElement(child, {
            ...child.props,
            // @ts-ignore
            onClick: onChange,
            selected: value === child.props.value,
          })
      )}
    </div>
  );
}

export function Tab({ children, value, onClick, label, selected, ...props }: TabProps & any) {
  return (
    <div
      className={classNames('gkit-tab', { selected })}
      data-value={value}
      onClick={() => onClick?.(value)}
      {...props}
    >
      {label ?? children}
    </div>
  );
}
