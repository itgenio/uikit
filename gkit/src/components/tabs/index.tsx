import './style.less';

import classNames from 'classnames';
import React from 'react';

export type TabsProps<T = any, C extends typeof Tab = typeof Tab> = {
  children?: (React.ReactElement<TabProps, C> | null | false) | (React.ReactElement<TabProps, C> | null | false)[];
  value?: T;
  onChange: (newValue: T) => void;
  className?: string;
  idQa?: string;
};

type TabPropsAll = { value: any; label?: string; idQa?: string } & any;

export type TabProps = React.PropsWithChildren<Pick<TabPropsAll, 'value'>>;

export function Tabs({ children, onChange, value, className, idQa }: TabsProps) {
  return (
    <div className={classNames('gkit-tabs', className)} id-qa={idQa}>
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

export function Tab({ children, value, onClick, label, selected, idQa, ...props }: TabProps & any) {
  return (
    <div
      className={classNames('gkit-tab', { selected })}
      data-value={value}
      onClick={() => onClick?.(value)}
      id-qa={idQa}
      {...props}
    >
      {label ?? children}
    </div>
  );
}
