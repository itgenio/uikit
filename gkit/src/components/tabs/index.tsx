import './style.less';

import classNames from 'classnames';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons';

export const TABS_SCROLL_PADDING_PX = 10;
export const TABS_SCROLL_VALUE_PX = 50;

type Sizes = 'small' | 'normal';

export type TabsProps<T = any, C extends typeof Tab = typeof Tab> = {
  children?: (React.ReactElement<TabProps, C> | null | false) | (React.ReactElement<TabProps, C> | null | false)[];
  value?: T;
  onChange: (newValue: T) => void;
  className?: string;
  idQa?: string;
  size?: Sizes;
  isChips?: boolean;
  scrollable?: boolean;
};

type TabPropsAll = { value: any; label?: string; idQa?: string; isChips?: boolean } & any;

export type TabProps = React.PropsWithChildren<Pick<TabPropsAll, 'value'>>;

export function Tabs({ onChange, value, className, isChips, scrollable, idQa, children }: TabsProps) {
  const tabsWrapRef = useRef<HTMLDivElement>();

  const [hasScrollLeft, setHasScrollLeft] = useState(false);
  const [hasScrollRight, setHasScrollRight] = useState(false);

  useLayoutEffect(() => {
    if (!scrollable) return;

    const tabsWrapElement = tabsWrapRef.current;
    if (!tabsWrapElement) return;

    const handler = () => {
      const rect = tabsWrapElement.getBoundingClientRect();

      const scrollLeft = tabsWrapElement.scrollLeft;
      const scrollWidth = tabsWrapElement.scrollWidth;

      if (scrollLeft - TABS_SCROLL_PADDING_PX > 0) {
        setHasScrollLeft(true);
      } else {
        setHasScrollLeft(false);
      }

      if (scrollWidth - (scrollLeft + rect.width) > TABS_SCROLL_PADDING_PX) {
        setHasScrollRight(true);
      } else {
        setHasScrollRight(false);
      }
    };

    const mutationObserver = new MutationObserver(handler);
    const resizeObserver = new ResizeObserver(handler);

    mutationObserver.observe(tabsWrapElement, { childList: true, subtree: true });
    resizeObserver.observe(tabsWrapElement);

    tabsWrapElement.addEventListener('scroll', handler);

    handler();

    return () => {
      mutationObserver.disconnect();
      resizeObserver.disconnect();

      tabsWrapElement.removeEventListener('scroll', handler);
    };
  }, [scrollable]);

  const scrollTabsElement = (scrollValue: number) => {
    const tabsWrapElement = tabsWrapRef.current;
    if (!tabsWrapElement) return;

    tabsWrapElement.scrollBy({ left: scrollValue, behavior: 'smooth' });
  };

  return (
    <div className={classNames('gkit-tabs', className, { isChips })} id-qa={idQa}>
      {hasScrollLeft && scrollable && (
        <div className="tabs-scroll-btn-wrap left-scroll-btn" onClick={() => scrollTabsElement(-TABS_SCROLL_VALUE_PX)}>
          <div className="tabs-scroll-btn">
            <ChevronLeftIcon />
          </div>
        </div>
      )}

      <div className={classNames('tabs-wrap', { scrollable })} ref={tabsWrapRef}>
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

      {hasScrollRight && scrollable && (
        <div className="tabs-scroll-btn-wrap right-scroll-btn" onClick={() => scrollTabsElement(TABS_SCROLL_VALUE_PX)}>
          <div className="tabs-scroll-btn">
            <ChevronRightIcon />
          </div>
        </div>
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
