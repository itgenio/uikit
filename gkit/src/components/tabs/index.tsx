import './style.less';

import classNames from 'classnames';
import React from 'react';

type Sizes = 'small' | 'normal';

export type TabsProps<T = any, C extends typeof Tab = typeof Tab> = {
  children?: (React.ReactElement<TabProps, C> | null | false) | (React.ReactElement<TabProps, C> | null | false)[];
  value?: T;
  onChange: (newValue: T) => void;
  className?: string;
  idQa?: string;
  size?: Sizes;
  isChips?: boolean;
};

type TabPropsAll = { value: any; label?: string; idQa?: string; isChips?: boolean } & any;

export type TabProps = React.PropsWithChildren<Pick<TabPropsAll, 'value'>>;

export function Tabs({ children, onChange, value, className, idQa, isChips }: TabsProps) {
  return (
    <div className={classNames('gkit-tabs', className, { isChips })} id-qa={idQa}>
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

export function Tab({
  children,
  className,
  value,
  isChips,
  onClick,
  label,
  selected,
  idQa,
  size = 'normal',
  ...props
}: TabProps & any) {
  return (
    <div
      className={classNames(isChips ? 'gkit-chips' : 'gkit-tab', className, size, { selected })}
      data-value={value}
      onClick={() => onClick?.(value)}
      id-qa={idQa}
      {...props}
    >
      {label ?? children}
    </div>
  );
}
