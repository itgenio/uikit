import './style.less';

import classNames from 'classnames';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { ChevronLeftIcon } from '@itgenio/icons/chevronLeftIcon';
import { ChevronRightIcon } from '@itgenio/icons/chevronRightIcon';

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

  // По аналогии как в MUI
  // https://github.com/mui/material-ui/blob/7f81475ea148a416ec8fab252120ce6567c62897/packages/mui-material/src/Tabs/Tabs.js#L462
  const scrollTabsElement = (direction: -1 | 1) => {
    const wrapElement = tabsWrapRef.current;
    if (!wrapElement) return;

    const children = [...wrapElement.children];
    const wrapElementWidth = wrapElement.getBoundingClientRect().width;

    const wrapElementGapValues = getComputedStyle(wrapElement).gap.split(' ');

    // В хроме это "10px", а в сафари "10px 10px", поэтому берем последнее
    const wrapElementGap = Number(wrapElementGapValues.at(-1).slice(0, -2)) || 0;

    let scrollSize = 0;

    for (let i = 0; i < children.length; i += 1) {
      const childWidth = children[i].getBoundingClientRect().width;

      if (scrollSize + childWidth > wrapElementWidth) {
        if (i === 0) {
          scrollSize = wrapElementWidth;
        }

        break;
      }

      scrollSize += childWidth + wrapElementGap;
    }

    wrapElement.scrollBy({ left: direction * scrollSize, behavior: 'smooth' });
  };

  return (
    <div className={classNames('gkit-tabs', className, { isChips })} id-qa={idQa}>
      <div className="content-wrap">
        {scrollable && (
          <div
            className={classNames('tabs-scroll-btn-wrap', 'left-scroll-btn', { 'scroll-btn-active': hasScrollLeft })}
            onClick={() => scrollTabsElement(-1)}
            id-qa={classNames({ [`${idQa}-scroll-btn-left`]: !!idQa })}
          >
            <div className="tabs-scroll-btn">
              <ChevronLeftIcon />
            </div>
          </div>
        )}

        <div className={classNames('tabs-wrap', { scrollable })} ref={tabsWrapRef}>
          {React.Children.map(children, child => {
            if (!child) return null;

            return React.cloneElement(child, {
              ...child.props,
              // @ts-expect-error
              onClick: onChange,
              // @ts-expect-error
              selected: child.props.selected || value === child.props.value,
            });
          })}
        </div>

        {scrollable && (
          <div
            className={classNames('tabs-scroll-btn-wrap', 'right-scroll-btn', { 'scroll-btn-active': hasScrollRight })}
            onClick={() => scrollTabsElement(1)}
            id-qa={classNames({ [`${idQa}-scroll-btn-right`]: !!idQa })}
          >
            <div className="tabs-scroll-btn">
              <ChevronRightIcon />
            </div>
          </div>
        )}
      </div>
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
