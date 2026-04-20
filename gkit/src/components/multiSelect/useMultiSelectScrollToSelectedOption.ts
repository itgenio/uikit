import { RefObject, useCallback, useLayoutEffect, useMemo, useRef } from 'react';
import type { Key, MultiSelectOption } from './index';

export type OptionsScrollConfig = {
  active: boolean;
  defaultOptionValue?: MultiSelectOption['value'];
  behavior?: ScrollBehavior;
};

type Params<T extends MultiSelectOption> = {
  isDropdownOpen: boolean;
  dropdownRef: RefObject<HTMLUListElement>;
  options: T[];
  values: T['value'][];
  optionsScrollConfig: OptionsScrollConfig;
};

export const useMultiSelectScrollToSelectedOption = <T extends MultiSelectOption>({
  isDropdownOpen,
  dropdownRef,
  options,
  values,
  optionsScrollConfig,
}: Params<T>) => {
  const optionForScrollRef = useRef<HTMLLIElement>(null);
  const { active, defaultOptionValue, behavior = 'smooth' } = optionsScrollConfig ?? {};

  const optionForScrollKey = useMemo(() => {
    const getValueKey = (value?: T['value']): Key | undefined => (typeof value === 'object' ? value.key : value);
    const selectedKeys = new Set(values.map(getValueKey));

    const firstSelectedOption = options.find(({ value }) => selectedKeys.has(getValueKey(value)));

    if (defaultOptionValue === undefined) {
      return getValueKey(firstSelectedOption?.value);
    }

    const defaultOption = options.find(({ value }) => getValueKey(value) === getValueKey(defaultOptionValue));

    const optionForScroll = defaultOption ?? firstSelectedOption;

    return getValueKey(optionForScroll?.value);
  }, [defaultOptionValue, options, values]);

  const getOptionRef = useCallback(
    (optionValue: Key) => (optionValue === optionForScrollKey ? optionForScrollRef : undefined),
    [optionForScrollKey]
  );

  useLayoutEffect(() => {
    if (!active || !isDropdownOpen) return;

    const dropdown = dropdownRef.current;
    const optionForScroll = optionForScrollRef.current;

    if (!dropdown || !optionForScroll) return;

    const optionTop = optionForScroll.offsetTop;
    const centeredTop = optionTop - dropdown.clientHeight / 2 + optionForScroll.offsetHeight / 2;
    const maxScrollTop = Math.max(0, dropdown.scrollHeight - dropdown.clientHeight);

    dropdown.scrollTo({ top: Math.min(Math.max(0, centeredTop), maxScrollTop), behavior });
  }, [active, isDropdownOpen, dropdownRef, behavior]);

  return { getOptionRef };
};
