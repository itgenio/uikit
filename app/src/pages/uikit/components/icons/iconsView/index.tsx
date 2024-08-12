import './style.less';

import React, { CSSProperties, Fragment, useCallback, useMemo, useState } from 'react';
import { Accordion, AccordionTitle } from '@itgenio/gkit/accordion';
import { Button } from '@itgenio/gkit/button';
import { Slider } from '@itgenio/gkit/slider';
import { TextField } from '@itgenio/gkit/textField';
import { Tooltip } from '@itgenio/gkit/tooltip';
import { DismissIcon } from '@itgenio/icons/dismissIcon';

const DEFAULT_SIZE = 40;
const STEP = 2;

type Props = { iconsSets: Function[][] };

export const IconsView = React.memo(({ iconsSets }: Props) => {
  const [searchValue, setSearchValue] = useState('');
  const [currentSize, setCurrentSize] = useState<number[]>([DEFAULT_SIZE]);

  const onClickMinus = useCallback(() => setCurrentSize(([s]) => [s - STEP]), []);
  const onClickPlus = useCallback(() => setCurrentSize(([s]) => [s + STEP]), []);

  const filteredIconsSets = useMemo(() => {
    return iconsSets.map(set => set.filter(Icon => new RegExp(searchValue, 'gi').test(Icon.name)));
  }, [iconsSets, searchValue]);

  return (
    <div className="icons" style={{ ['--parent-icon-size' as string]: `${currentSize[0]}px` }}>
      <div className="header">
        <div className="sizes">
          <span>Current size: {currentSize}</span>

          <SliderWithButtons
            value={currentSize}
            onValueChange={setCurrentSize}
            onClickMinus={onClickMinus}
            onClickPlus={onClickPlus}
          />
        </div>
        <TextField
          className="search"
          value={searchValue}
          endAdornment={<DismissIcon onClick={() => setSearchValue('')} />}
          onChange={e => setSearchValue(e.target.value)}
          size="small"
        />
      </div>

      {filteredIconsSets.map((filteredIcons, index) => {
        return <MemoIcons key={index} icons={filteredIcons} number={index + 1} />;
      })}
    </div>
  );
});

IconsView.displayName = 'IconsView';

const MemoIcons = React.memo(({ icons, number }: { icons: Function[]; number: number }) => {
  if (icons.length === 0) return null;

  return (
    <Fragment>
      <Accordion
        content={
          <div className="board" style={{ '--icon-size': `var(--parent-icon-size)` } as CSSProperties}>
            {icons.map(Icon => {
              return (
                <Tooltip key={Icon.name} content={Icon.name}>
                  <Icon />
                </Tooltip>
              );
            })}
          </div>
        }
      >
        <AccordionTitle>
          Set {number}. {`[${icons[0].name[0]} - ${icons[icons.length - 1].name[0]}]`}
        </AccordionTitle>
      </Accordion>
    </Fragment>
  );
});

MemoIcons.displayName = 'MemoIcons';

const SliderWithButtons = React.memo(
  ({
    onClickMinus,
    onClickPlus,
    value,
    onValueChange,
  }: {
    onClickMinus: () => void;
    onClickPlus: () => void;
    value: number[];
    onValueChange: (value: number[]) => void;
  }) => {
    return (
      <div className="slider">
        <Button onClick={onClickMinus} size="small" asIcon>
          -
        </Button>

        <Slider onValueChange={onValueChange} value={value} step={STEP} min={1} max={200} />

        <Button onClick={onClickPlus} size="small" asIcon>
          +
        </Button>
      </div>
    );
  }
);

SliderWithButtons.displayName = 'SliderWithButtons';
